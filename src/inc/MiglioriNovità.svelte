<script>
    let currentIndex = 1;
    let isUserScrolling = 1;

    $: clickAbleLeft = currentIndex == 1 ? 0 : 1;
    $: clickAbleRight = currentIndex == 2 ? 0 : 1;

    const slides = [
        {
            id: 0,
            url: "./img/nike1.avif",
            text: "Scopri Dynamic Air",
        },
        {
            id: 1,
            url: "./img/nike2.avif",
            text: "Mad brilliance Pack",
        },
        {
            id: 2,
            url: "./img/nike3.avif",
            text: "Novità: tennis",
        },
        {
            id: 3,
            url: "./img/nike4.avif",
            text: "Articoli per il fitness",
        },
    ];

    function index(direction) {
        isUserScrolling = 0;
        if (direction === "toLeft" && currentIndex != 1) {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        } else if (direction === "toRight" && currentIndex != 2) {
            currentIndex = (currentIndex + 1) % slides.length;
        }
        scrollToCurrentSlide();
    }

    function scrollToCurrentSlide() {
        const currentSlide = document.getElementById(`slide-${currentIndex}`);
        currentSlide.scrollIntoView({ behavior: "smooth", inline: "center" });

        setTimeout(() => {
            isUserScrolling = 1;
        }, 1000);
    }

    function handleScroll(event) {
        if (isUserScrolling) {
            let scrollLeft = event.target.scrollLeft;
            let slideWidth = event.target.clientWidth / 3;
            currentIndex = Math.round(scrollLeft / slideWidth) + 1;
        }
    }
</script>

<div class="flex items-center justify-between px-2">
    <div class="text-4xl font-medium py-5">Tutte le migliori novità</div>
    <div class="flex space-x-7">
        <button
            class={` w-14 h-14 rounded-full flex justify-center items-center cursor-default ${
                clickAbleLeft
                    ? "bg-gray-200 hover:cursor-pointer hover:bg-gray-300 text-gray-700"
                    : "bg-gray-50 hover:cursor-default text-gray-300"
            }`}
            on:click={() => index("toLeft")}
        >
            <span class="material-symbols-sharp text-2xl"> chevron_left </span>
        </button>

        <button
            class={`w-14 h-14 rounded-full flex justify-center items-center cursor-default
            ${
                clickAbleRight
                    ? "bg-gray-200 hover:cursor-pointer hover:bg-gray-300 text-gray-700"
                    : "bg-gray-50 hover:cursor-default text-gray-300"
            }`}
            on:click={() => index("toRight")}
        >
            <span class="material-symbols-sharp text-2xl"> chevron_right </span>
        </button>
    </div>
</div>

<div
    class="flex overflow-x-auto snap-x snap-mandatory"
    on:scroll={handleScroll}
>
    {#each slides as slide, i}
        <div id={`slide-${i}`} class="shrink-0 w-1/3 snap-center">
            <div class=" overflow-hidden h-[35vw] px-2">
                <button>
                    <img src={slide.url} alt={slide.id} />
                </button>
            </div>
            <div class="p-5 text-2xl font-semibold">
                {slide.text}
            </div>
        </div>
    {/each}
</div>
