<script>
    import BgContent from "$inc/BgContent.svelte";
    import Carousel from "$inc/Carousel.svelte";
    const miglioriNovità = [
        {
            title: "Tutte le migliori novità",

            item: [
                {
                    id: 0,
                    url: "./img/miglioriAttività/nike1.avif",
                    text: "Scopri Dynamic Air",
                },
                {
                    id: 1,
                    url: "./img/miglioriAttività/nike1.avif",
                    text: "Mad brilliance Pack",
                },
                {
                    id: 2,
                    url: "./img/miglioriAttività/nike1.avif",
                    text: "Novità: tennis",
                },
                {
                    id: 3,
                    url: "./img/miglioriAttività/nike1.avif",
                    text: "Articoli per il fitness",
                },
            ],
        },
    ];

    let miglioriNovitàItem = miglioriNovità[0].item;
    let miglioriNovitàTitle = miglioriNovità[0].title;

    const nostreIcone = [
        {
            title: "Acquista le nostre icone",

            item: [
                {
                    id: 0,
                    url: "./img/nostreIcone/nikes.webp",
                    text: "Scopri Dynamic Air",
                },
                {
                    id: 1,
                    url: "./img/nostreIcone/nikes.webp",
                    text: "Mad brilliance Pack",
                },
                {
                    id: 2,
                    url: "./img/nostreIcone/nikes.webp",
                    text: "Novità: tennis",
                },
                {
                    id: 3,
                    url: "./img/nostreIcone/nikes.webp",
                    text: "Articoli per il fitness",
                },
                {
                    id: 4,
                    url: "./img/nostreIcone/nikes.webp",
                    text: "Mad brilliance Pack",
                },
                {
                    id: 5,
                    url: "./img/nostreIcone/nikes.webp",
                    text: "Novità: tennis",
                },
                {
                    id: 6,
                    url: "./img/nostreIcone/nikes.webp",
                    text: "Articoli per il fitness",
                },
            ],
        },
    ];

    let nostreIconeTitle = nostreIcone[0].title;
    let nostreIconeItem = nostreIcone[0].item;
</script>

<BgContent />

<Carousel
    idPrefix={"miglioriNovità"}
    slides={miglioriNovitàItem}
    slidesTitle={miglioriNovitàTitle}
/>
<Carousel
    small={true}
    idPrefix={"nostreIcone"}
    slides={nostreIconeItem}
    slidesTitle={nostreIconeTitle}
/>
