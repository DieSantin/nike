<script>
    import { onMount } from "svelte";

    let interval;
    let currentIndex = 0;

    const slides = [
        {
            id: 1,
            title: "Tutti i nuovi arrivi",
            content: null,
            link1: "Acquista",
            link2: null,
        },
        {
            id: 2,
            title: "Consegna e resi gratuiti",
            content:
                "Per i Member Nike, consegna e resi gratuiti entro 30 giorni.",
            link1: "Scopri di più.",
            link2: "Unisciti a noi.",
        },
    ];

    onMount(() => {
        startCarousel();
        return () => clearInterval(interval);
    });

    function startCarousel() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
        }, 5000);
    }
</script>

<div class="bg-gray-100 overflow-hidden">
    <div
        class="flex transition-transform duration-500 ease-in-out py-0 sm:py-1 items-center"
        style="transform: translateX({-currentIndex * 100}vw);"
    >
        {#each slides as slide}
            <div class="py-1 w-screen shrink-0">
                <div class="text-center leading-5">{slide.title}</div>
                <div class="text-center justify-center">
                    {#if slide.content}
                        <div class="sm:inline text-[12px] sm:text-sm">
                            {slide.content}
                        </div>
                    {/if}
                    {#if slide.link1}
                        <div
                            class="inline text-[12px] sm:text-sm underline font-medium ml-1"
                        >
                            {slide.link1}
                        </div>
                    {/if}
                    {#if slide.link2}
                        <div
                            class="inline text-[12px] sm:text-sm underline font-medium ml-1"
                        >
                            {slide.link2}
                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>
