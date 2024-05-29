<script>
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";

    let interval;
    let currentIndex = 0;

    const slides = [
        {
            id: 1,
            title: "Consegna e resi gratuiti",
            content:
                "Per i Member Nike, consegna e resi gratuiti entro 30 giorni.",
            link1: "Scopri di più.",
            link2: "Unisciti a noi.",
        },
        {
            id: 2,
            title: "Tutti i nuovi arrivi",
            content: null,
            link1: "Acquista",
            link2: null,
        },
    ];

    onMount(() => {
        startCarousel();
        return () => clearInterval(interval);
    });

    function startCarousel() {
        intervall = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
        }, 5000);
    }
</script>

<div class="bg-gray-100 overflow-hidden">
    <div
        class="flex transition-transform duration-500 ease-in-out"
        style="transform: translateX({-currentIndex * 100}vw);"
    >
        {#each slides as slide}
            <div class="py-1 w-screen shrink-0 carousel-slide">
                <div class="text-center">{slide.title}</div>
                <div class="flex justify-center">
                    {#if slide.content}
                        <div class="text-sm">
                            {slide.content}
                        </div>
                    {/if}
                    <div class="text-sm underline font-medium ml-1">
                        {slide.link1}
                    </div>
                    {#if slide.link2}
                        <div class="text-sm underline font-medium ml-1">
                            {slide.link2}
                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>
