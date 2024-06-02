<script>
    import "$css/app.css";
    import Navbar from "$inc/Navbar.svelte";
    import Navbar2 from "$inc/Navbar2.svelte";
    import BigSearch from "$inc/BigSearch.svelte";
    import Sconti from "$inc/Sconti.svelte";

    let animSearch;
    let showBigSearch;

    function handleStopBigSearch() {
        showBigSearch = 0;
        animSearch = 0;
    }

    function handleBigSearch() {
        showBigSearch = 1;
        animSearch = 1;
    }
</script>

<header>
    <Navbar />
    <Navbar2 on:showBigSearch={handleBigSearch} {animSearch} />
    <Sconti />
</header>

<main>
    <slot />
    {#if showBigSearch}
        <BigSearch on:stopBigSearch={handleStopBigSearch} />
    {/if}
</main>
