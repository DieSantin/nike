<script>
    import Cuore from "$svg/Cuore.svelte";
    import NikeLogo from "$svg/NikeLogo.svelte";
    import Borsetta from "$svg/Borsetta.svelte";
    import Search from "./Search.svelte";
    import CoverIcons from "./CoverIcons.svelte";

    import { createEventDispatcher } from "svelte";

    let bgTransparent = 1;

    let dispatch = createEventDispatcher();

    function handleShowSearch() {
        dispatch("showSearch");
    }
</script>

<div class="grid grid-cols-3 items-center px-12">
    <div>
        <NikeLogo />
    </div>
    <div class="flex space-x-6 font-semibold items-center justify-center">
        <div>Novità e in evidenza</div>
        <div>Uomo</div>
        <div>Donna</div>
        <div>Kids</div>
        <div>Outlet</div>
    </div>
    <div class="flex items-center justify-end space-x-6">
        <Search on:showSearch={handleShowSearch} />
        <CoverIcons {bgTransparent}>
            <Cuore />
        </CoverIcons>
        <CoverIcons {bgTransparent}>
            <Borsetta />
        </CoverIcons>
    </div>
</div>
