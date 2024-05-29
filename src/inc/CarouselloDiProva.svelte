<script>
    import { onMount } from "svelte";
    let currentIndex = 0;
    let interval;

    const slides = [
        { id: 1, color: "bg-red-500" },
        { id: 2, color: "bg-green-500" },
        { id: 3, color: "bg-blue-500" },
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

<div class="relative overflow-hidden w-screen h-screen">
    <div
        class="flex transition-transform duration-500 ease-in-out"
        style="transform: translateX({-currentIndex * 100}vw);"
    >
        {#each slides as slide}
            <div
                class="min-w-full min-h-full {slide.color} flex items-center justify-center text-white text-5xl font-bold"
            >
                Slide {slide.id}
            </div>
        {/each}
    </div>
</div>

<style>
    .carousel {
        transition: transform 0.5s ease-in-out;
    }
</style>
