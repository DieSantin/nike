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
                    url: "./img/miglioriAttività/nike2.avif",
                    text: "Mad brilliance Pack",
                },
                {
                    id: 2,
                    url: "./img/miglioriAttività/nike3.avif",
                    text: "Novità: tennis",
                },
                {
                    id: 3,
                    url: "./img/miglioriAttività/nike4.avif",
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
                    url: "./img/nostreIcone/nikenike.jpg",
                    text: "Scopri Dynamic Air",
                },
                {
                    id: 1,
                    url: "./img/nostreIcone/nikenike.jpg",
                    text: "Mad brilliance Pack",
                },
                {
                    id: 2,
                    url: "./img/nostreIcone/nikenike.jpg",
                    text: "Novità: tennis",
                },
                {
                    id: 3,
                    url: "./img/nostreIcone/nikenike.jpg",
                    text: "Articoli per il fitness",
                },
                {
                    id: 4,
                    url: "./img/nostreIcone/nikenike.jpg",
                    text: "Mad brilliance Pack",
                },
                {
                    id: 5,
                    url: "./img/nostreIcone/nikenike.jpg",
                    text: "Novità: tennis",
                },
                {
                    id: 6,
                    url: "./img/nostreIcone/nikenike.jpg",
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
    slides={miglioriNovitàItem}
    slidesTitle={miglioriNovitàTitle}
    idPrefix={"miglioriNovità"}
/>

<Carousel
    slides={nostreIconeItem}
    slidesTitle={nostreIconeTitle}
    idPrefix={"nostreIcone"}
    litle="1"
/>
