<script>
    import "$css/app.css";
    import Navbar from "$inc/Navbar.svelte";
    import Navbar2 from "$inc/Navbar2.svelte";
    import BigSearch from "$inc/BigSearch.svelte";
    import Sconti from "$inc/Sconti.svelte";
    import Footer from "$inc/Footer.svelte";
    import Sidebar from "../inc/Sidebar.svelte";

    let showBigSearch = false;
    let showSidebar = false;

    function handleStopBigSearch() {
        showBigSearch = false;
    }

    function handleBigSearch() {
        showBigSearch = true;
    }

    function handleSidebarMenu() {
        showSidebar = true;
    }

    function hideSidebar() {
        showSidebar = false;
    }
</script>

<header>
    <div class="hidden lg:block">
        <Navbar />
    </div>
    <Navbar2
        on:showBigSearch={handleBigSearch}
        on:showSidebar={handleSidebarMenu}
    />
    <Sconti />
</header>

<main>
    <slot />
    {#if showBigSearch}
        <BigSearch on:stopBigSearch={handleStopBigSearch} />
    {/if}
    {#if showSidebar}
        <Sidebar on:hideSidebar={hideSidebar} />
    {/if}
</main>

<footer>
    <Footer />
</footer>
