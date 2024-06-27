<script>
    import { browser } from "$app/environment";
    import { onDestroy, onMount } from "svelte";

    export let slides;
    export let slidesTitle;
    export let idPrefix = "";
    export let litle = 0;

    let isUserScrolling = 1;
    let scrollTimeout;
    let resizeTimer;
    let currentIndex = 1;
    let maxLeft = 1;
    let maxRight = slides.length - 2;

    $: clickAbleLeft = currentIndex == maxLeft ? 0 : 1;
    $: clickAbleRight = currentIndex == maxRight ? 0 : 1;

    onMount(() => {
        if (browser) {
            window.addEventListener("resize", handleResize);
            handleResize();
        }
    });

    onDestroy(() => {
        if (browser) window.removeEventListener("resize", handleResize);
    });

    function handleResize() {
        clearTimeout(resizeTimer);
        isUserScrolling = 0;
        const screenWidth = window.innerWidth;

        if (litle) {
            if (screenWidth >= 1280) maxRight = slides.length - 2;
            else maxRight = slides.length - 1;
        } else {
            if (screenWidth >= 1024) maxRight = slides.length - 2;
            else maxRight = slides.length - 1;
        }

        resizeTimer = setTimeout(() => {
            isUserScrolling = 1;
        }, 500);
    }

    function index(direction) {
        isUserScrolling = 0;

        if (direction === "toRight" && clickAbleRight) currentIndex += 1;
        else if (direction === "toLeft" && clickAbleLeft) currentIndex -= 1;

        scrollToCurrentSlide();
    }

    function scrollToCurrentSlide() {
        let currentSlide = document.getElementById(
            `${idPrefix}-slide-${currentIndex}`,
        );

        let scrollContainer = currentSlide.parentElement;

        scrollContainer.scrollTo({
            left: currentSlide.offsetLeft - currentSlide.clientWidth,
            behavior: "smooth",
        });

        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            isUserScrolling = 1;
        }, 1200);
    }

    function handleScroll(event) {
        if (isUserScrolling) {
            let scrollLeft = event.target.scrollLeft;
            let slideWidth = event.target.clientWidth / 3;
            currentIndex = Math.round(scrollLeft / slideWidth) + 1;
        }
    }
</script>

<div class="px-10 pt-14">
    <div class="flex justify-between px-12 pt-14 pb-3">
        <div
            class="font-normal font-roboto text-[26px] translate-y-2
            xl:text-[30px]"
        >
            {slidesTitle}
        </div>
        <div class="flex space-x-5 pr-3">
            {#if slides.length > 3}
                <button
                    class={` w-12 h-12 rounded-full flex justify-center items-center cursor-default
                    ${
                        clickAbleLeft
                            ? "bg-gray-200 hover:cursor-pointer hover:bg-gray-300 text-gray-700"
                            : "bg-gray-50 hover:cursor-default text-gray-300"
                    }`}
                    on:click={() => index("toLeft")}
                >
                    <span class="material-symbols-sharp text-2xl">
                        chevron_left
                    </span>
                </button>

                <button
                    class={`w-12 h-12 rounded-full flex justify-center items-center cursor-default
                    ${
                        clickAbleRight
                            ? "bg-gray-200 hover:cursor-pointer hover:bg-gray-300 text-gray-700"
                            : "bg-gray-50 hover:cursor-default text-gray-300"
                    }`}
                    on:click={() => index("toRight")}
                >
                    <span class="material-symbols-sharp text-2xl">
                        chevron_right
                    </span>
                </button>
            {/if}
        </div>
    </div>

    <div
        class="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
        on:scroll={handleScroll}
    >
        {#each slides as slide, i}
            <div
                id={`${idPrefix}-slide-${i}`}
                class={`relative shrink-0
                ${
                    litle
                        ? "xl:h-[22vw] xl:w-1/3 xl:snap-center sm:h-[31vw] sm:w-1/2 sm:snap-end"
                        : "lg:h-[40vw] lg:w-1/3 lg:snap-center sm:h-[60vw] sm:w-1/2 sm:snap-end"
                }`}
            >
                <button
                    class={`px-2 w-full overflow-hidden
                    ${litle ? "h-[93.75%]" : "h-[90%"}`}
                >
                    <img
                        src={slide.url}
                        alt={slide.id}
                        class={`w-[100%] object-cover object-center
                        ${litle ? "xl:h-[22vw] sm:h-[31vw]" : "lg:h-[40vw] sm:h-[60vw]"}`}
                    />
                </button>
                {#if litle}
                    <button
                        class="absolute top-[75%] left-[11%] px-3 py-1 bg-white rounded-full hover:bg-gray-300 font-roboto"
                    >
                        {slide.text}
                    </button>
                {:else}
                    <div
                        class="absolute flex w-full bg-white px-5 font-normal items-center top-[90%] h-[10%] font-roboto text-xl
                        xl:text-2xl"
                    >
                        {slide.text}
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>
