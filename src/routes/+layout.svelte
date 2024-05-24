<script>
    import "$css/app.css";
    import Navbar from "$inc/Navbar.svelte";
    import Navbar2 from "$inc/Navbar2.svelte";
    import BigSearch from "$inc/BigSearch.svelte";

    let show;
    let animSearch;

    function handleStopBigSearch() {
        show = 0;
        animSearch = 0;
    }

    function handleBigSearch() {
        show = 1;
        animSearch = 1;
    }
</script>

<header>
    <Navbar />
    <Navbar2 on:showBigSearch={handleBigSearch} {animSearch} />
    {#if show}
        <BigSearch on:stopBigSearch={handleStopBigSearch} />
    {/if}
</header>

<main>
    <slot />
</main>
