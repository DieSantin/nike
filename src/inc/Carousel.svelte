<script>
    import { onDestroy, onMount } from "svelte";
    import { browser } from "$app/environment";
    import Button from "./Button.svelte";

    export let slides = [];
    export let small = false;
    export let idPrefix;
    export let slidesTitle;

    let alreadyClicked = false;
    let isUserScrolling = true;
    let forMobile = false;
    let hideButtons = false;

    let noSpamIndexTimer;
    let disableUserScrollingTimer;

    let maxLeft = 0;
    let maxRight = slides.length - 2;

    let visibleSlides = 3;
    let currentIndex = 0;

    $: clickAbleLeft = currentIndex == maxLeft ? false : true;
    $: clickAbleRight = currentIndex == maxRight ? false : true;

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
        disableUserScrolling();
        const screenWidth = window.innerWidth;

        if (!small) {
            if (screenWidth >= 1024) bigCarouselSetup();
            else smallCarouselSetup();
        } else {
            if (screenWidth >= 1280) bigCarouselSetup();
            else if (screenWidth >= 1024 && screenWidth <= 1279)
                mediumCarouselSetup();
            else if (screenWidth <= 1023) smallCarouselSetup();
        }

        moveCarousel();
    }

    function bigCarouselSetup() {
        visibleSlides = 3;
        maxRight = slides.length - 3;
        forMobile = false;
        if (currentIndex == slides.length - 1) currentIndex -= 2;
    }

    function smallCarouselSetup() {
        visibleSlides = 1.5;
        maxRight = slides.length - 1;
        forMobile = true;
    }

    function mediumCarouselSetup() {
        visibleSlides = 2;
        maxRight = slides.length - 2;
        forMobile = false;
        if (currentIndex == slides.length - 1) currentIndex -= 1;
    }

    function noSpamIndex() {
        alreadyClicked = true;
        clearTimeout(noSpamIndexTimer);
        noSpamIndexTimer = setTimeout(() => {
            alreadyClicked = false;
        }, 400);
    }

    function disableUserScrolling() {
        isUserScrolling = false;
        clearTimeout(disableUserScrollingTimer);

        disableUserScrollingTimer = setTimeout(() => {
            isUserScrolling = true;
        }, 500);
    }

    function index(direction) {
        disableUserScrolling();
        if (!alreadyClicked) {
            if (direction === "left" && clickAbleLeft) {
                currentIndex -= 1;
                noSpamIndex();
                moveCarousel();
            } else if (direction === "right" && clickAbleRight) {
                currentIndex += 1;
                noSpamIndex();
                moveCarousel();
            }
        }
    }

    function moveCarousel() {
        let currentSlide = document.getElementById(
            `${idPrefix}-slide-${currentIndex}`,
        );
        let scrollbar = currentSlide.parentElement;

        scrollbar.scrollTo({
            left: scrollTarget(forMobile, currentSlide, scrollbar),
            behavior: "smooth",
        });
    }

    function scrollTarget(forMobile, currentSlide, scrollbar) {
        let target;
        if (forMobile) {
            target =
                currentSlide.offsetLeft -
                (scrollbar.clientWidth - currentSlide.clientWidth) / 2;
        } else {
            target = currentSlide.offsetLeft;
        }

        return target;
    }

    function handleSlidebarScroll(event) {
        if (isUserScrolling) {
            let scrollLeft = event.target.scrollLeft;
            let slideWidth = event.target.clientWidth / visibleSlides;
            currentIndex = Math.round(scrollLeft / slideWidth);
            console.log(currentIndex);
        }
    }
</script>

<div class="pl-3 sm:pl-6 lg:px-10 pt-14">
    <div class="flex justify-between pb-3 px-2">
        <div
            class="font-roboto text-[28px] 2xl:text-[35px] -translate-y-1 sm:translate-y-2 2xl:translate-y-0"
        >
            {slidesTitle}
        </div>

        <div class="space-x-4 pr-3 hidden sm:flex">
            <button
                class={` w-12 h-12 rounded-full flex justify-center items-center cursor-default
                    ${
                        clickAbleLeft
                            ? "bg-gray-200 hover:cursor-pointer hover:bg-gray-300 text-gray-700"
                            : "bg-gray-50 hover:cursor-default text-gray-300"
                    }`}
                on:click={() => index("left")}
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
                on:click={() => index("right")}
            >
                <span class="material-symbols-sharp text-2xl">
                    chevron_right
                </span>
            </button>
        </div>
    </div>

    <div
        class="flex overflow-x-auto snap-x snap-mandatory"
        on:scroll={handleSlidebarScroll}
    >
        {#each slides as slide, i}
            <div
                id={`${idPrefix}-slide-${i}`}
                class={`relative shrink-0 px-2 snap-start w-[90%] sm:w-2/3
                ${small ? "lg:w-[50%] 2xl:w-1/3" : "lg:w-1/3"}`}
            >
                <div class="grid grid-cols-1">
                    <button
                        class={`
                            ${
                                small
                                    ? "h-[70.2vw] sm:h-[39.6vw] lg:h-[30vw] 2xl:h-[19.8vw]"
                                    : "h-[102.6vw] sm:h-[77vw] lg:h-[38vw]"
                            }`}
                    >
                        <img
                            src={slide.url}
                            alt={slide.id}
                            class="object-cover object-center w-full h-full"
                        />
                    </button>
                    {#if small}
                        <div
                            class="absolute bottom-[15%] sm:bottom-[18%] left-[8%]"
                        >
                            <Button noResponsive="false">
                                {slide.text}
                            </Button>
                        </div>
                        <div
                            class="bg-white py-2 sm:py-5 lg:py-3 2xl:py-5"
                        ></div>
                    {:else}
                        <div
                            class="flex items-center
                            bg-white font-normal font-roboto
                            py-5 sm:py-5 lg:py-3 2xl:py-6 text-2xl sm:text-2xl lg:text-xl 2xl:text-3xl"
                        >
                            {slide.text}
                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>
