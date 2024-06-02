<script>
    import Cuore from "$svg/Cuore.svelte";
    import NikeLogo from "$svg/NikeLogo.svelte";
    import Borsetta from "$svg/Borsetta.svelte";
    import Search from "./Search.svelte";
    import CoverIcons from "./CoverIcons.svelte";
    import { createEventDispatcher } from "svelte";

    export let animSearch;

    let items = [];

    let bgTransparent = 1;
    let dropDown = 0;

    let dispatch = createEventDispatcher();

    function handleShowBigSearch() {
        dispatch("showBigSearch");
    }

    function handleDropDown(x) {
        dropDown = !dropDown;

        console.log(x);

        switch (x) {
            case "novità":
                items = [
                    {
                        id: 1,
                        Sec1: "In evidenza",
                        Sec2: "Scopri le icone",
                        Sec3: "Scopri lo sport",
                        Sec4: "Di tendenza",
                    },
                ];
                break;
            case "uomo":
                items = [
                    {
                        id: 2,
                        Sec1: "In evidenza",
                        Sec2: "Scarpe",
                        Sec3: "Abbigliamento",
                        Sec4: "Sccopri lo sport",
                        Sec5: "Accessori",
                    },
                ];
                break;
            case "donna":
                items = [
                    {
                        id: 3,
                        Sec1: "In evidenza",
                        Sec2: "Scarpe",
                        Sec3: "Abbigliamento",
                        Sec4: "Sccopri lo sport",
                        Sec5: "Accessori",
                    },
                ];
                break;
            case "kids":
                items = [
                    {
                        id: 4,
                        Sec1: "In evidenza",
                        Sec2: "Scarpe",
                        Sec3: "Abbigliamento",
                        Sec4: "Kids per età",
                        Sec5: "Accessori",
                    },
                ];
                break;
            case "outlet":
                items = [
                    {
                        id: 5,
                        Sec1: "Sconti e offerte",
                        Sec2: "Sconti per lui",
                        Sec3: "Sconti per lei",
                        Sec4: "Sconti per bambini",
                        Sec5: "Sconti per sport",
                    },
                ];
        }
    }
</script>

<div class="relative grid grid-cols-3 items-center px-12">
    <div>
        <NikeLogo />
    </div>
    <div class="flex space-x-5 font-semibold items-center justify-center">
        <button
            class="py-4 px-5 hover:underline"
            on:mouseenter={() => handleDropDown("novità")}
            on:mouseleave={handleDropDown}>Novità e in evidenza</button
        >
        <button
            class="py-4 px-5 hover:underline"
            on:mouseenter={() => handleDropDown("uomo")}
            on:mouseleave={handleDropDown}>Uomo</button
        >
        <button
            class="py-4 px-5 hover:underline"
            on:mouseenter={() => handleDropDown("donna")}
            on:mouseleave={handleDropDown}>Donna</button
        >
        <button
            class="py-4 px-5 hover:underline"
            on:mouseenter={() => handleDropDown("kids")}
            on:mouseleave={handleDropDown}>Kids</button
        >
        <button
            class="py-4 px-5 hover:underline"
            on:mouseenter={() => handleDropDown("outlet")}
            on:mouseleave={handleDropDown}>Outlet</button
        >
    </div>
    <div class="flex items-center justify-end space-x-6">
        <Search on:showBigSearch={handleShowBigSearch} {animSearch} />
        <CoverIcons {bgTransparent}>
            <Cuore />
        </CoverIcons>
        <CoverIcons {bgTransparent}>
            <Borsetta />
        </CoverIcons>
    </div>
    <div
        class={`absolute top-full left-0 w-full
        bg-white overflow-hidden z-20 h-0
        ${dropDown ? "transition-h duration-200 h-[400px]" : ""}`}
    >
        {#each items as item}
            <div class="flex space-x-32 justify-center">
                {#each Object.entries(item) as [key, value]}
                    {#if key !== "id"}
                        <div>{value}</div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
</div>
