<script>
    import BgContent from "$inc/BgContent.svelte";
    import Carousel from "$inc/Carousel.svelte";

    const miglioriNovità = [
        {
            title: "Tutte le migliori novità",

            item: [
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
            ],
        },
    ];

    let miglioriNovitàItem = miglioriNovità[0].item;
    let miglioriNovitàTitle = miglioriNovità[0].title;
</script>

<BgContent />

<div class="px-10 py-10">
    <Carousel slides={miglioriNovitàItem} slidesTitle={miglioriNovitàTitle} />
</div>
