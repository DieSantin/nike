<script>
    import "$css/app.css";
    import Navbar from "$inc/Navbar.svelte";
    import Navbar2 from "$inc/Navbar2.svelte";
    import ShowSearch from "$inc/ShowSearch.svelte";

    let show = 0;

    function handleStopShow() {
        show = 0;
    }

    function handleShowSearch() {
        show = 1;
    }
</script>

<header>
    <Navbar />
    <Navbar2 on:showSearch={handleShowSearch} />
    {#if show}
        <ShowSearch on:stopShow={handleStopShow} />
    {/if}
</header>

<main>
    <slot />
</main>
