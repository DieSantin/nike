<script>
    export let slides;
    export let slidesTitle;
    export let idPrefix = "";
    export let litle = 0;

    let currentIndex = 1;
    let isUserScrolling = 1;
    let scrollTimeout;
    let maxRight = slides.length - 2;

    $: clickAbleLeft = currentIndex == 1 ? 0 : 1;
    $: clickAbleRight = currentIndex == maxRight ? 0 : 1;

    function index(direction) {
        isUserScrolling = 0;

        if (direction === "toLeft" && currentIndex != 1) {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        } else if (
            direction === "toRight" &&
            currentIndex != slides.length - 2
        ) {
            currentIndex = (currentIndex + 1) % slides.length;
        }
        scrollToCurrentSlide();
    }

    function scrollToCurrentSlide() {
        const currentSlide = document.getElementById(
            `${idPrefix}-slide-${currentIndex}`,
        );
        const scrollContainer = currentSlide.parentElement;

        const targetScrollLeft =
            currentSlide.offsetLeft -
            (scrollContainer.clientWidth - currentSlide.clientWidth) / 2;

        scrollContainer.scrollTo({
            left: targetScrollLeft,
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

<div class="px-10 pt-20">
    <div class="flex justify-between px-2 pb-3">
        <div class="text-[30px] font-normal font-roboto">
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
                class={`relative shrink-0 w-1/3 snap-center
                ${litle ? "h-[25vw]" : "h-[40vw]"}`}
            >
                <div
                    class={`absolute px-2 top-0 w-full overflow-hidden
                    ${litle ? "h-[93.75%]" : "h-[90%"}`}
                >
                    <img
                        src={slide.url}
                        alt={slide.id}
                        class="w-full h-full object-cover object-center"
                    />
                </div>
                {#if litle}
                    <button
                        class="absolute top-[83%] left-[8%] px-3 py-1 bg-white rounded-full hover:bg-gray-300 font-roboto"
                    >
                        {slide.text}
                    </button>
                {:else}
                    <div
                        class="absolute flex w-full bg-white px-5 text-2xl font-normal items-center top-[90%] h-[10%] font-roboto"
                    >
                        {slide.text}
                    </div>
                {/if}
            </div>
        {/each}
    </div>
</div>
