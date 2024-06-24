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
    let reAnim = 1;
    let lastX;
    let timer;

    let dispatch = createEventDispatcher();

    function handleShowBigSearch() {
        dispatch("showBigSearch");
    }

    function hiddenDropDown(x) {
        dropDown = 0;
        if (x === "re") reAnim = 1;
    }

    function handleDropDown(x) {
        if (x && x !== lastX && !reAnim) reAnim = 1;

        if (reAnim && x !== lastX) {
            clearTimeout(timer);
            dropDown = 0;
            timer = setTimeout(() => {
                dropDown = 1;
            }, 30);
            reAnim = 0;
        } else if (reAnim && x === lastX) {
            dropDown = 1;
            reAnim = 0;
        } else {
            dropDown = 1;
        }

        if (x) lastX = x;

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

<div class="relative grid grid-cols-[1fr_auto_1fr] items-center px-12">
    <div>
        <NikeLogo />
    </div>
    <div class="flex space-x-8 font-semibold items-center justify-center">
        <button
            class="py-4 hover:underline"
            on:mouseenter={() => handleDropDown("novità")}
            on:mouseleave={hiddenDropDown}>Novità e in evidenza</button
        >
        <button
            class="py-4 hover:underline"
            on:mouseenter={() => handleDropDown("uomo")}
            on:mouseleave={hiddenDropDown}>Uomo</button
        >
        <button
            class="py-4 hover:underline"
            on:mouseenter={() => handleDropDown("donna")}
            on:mouseleave={hiddenDropDown}>Donna</button
        >
        <button
            class="py-4 hover:underline"
            on:mouseenter={() => handleDropDown("kids")}
            on:mouseleave={hiddenDropDown}>Kids</button
        >
        <button
            class="py-4 hover:underline"
            on:mouseenter={() => handleDropDown("outlet")}
            on:mouseleave={hiddenDropDown}>Outlet</button
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
        class={`absolute top-full left-0 w-full bg-white overflow-hidden z-20
        ${dropDown ? "transition-h duration-[80ms] ease-in h-[400px]" : "h-0"}`}
        role="group"
        on:mouseenter={() => handleDropDown(null)}
        on:mouseleave={() => hiddenDropDown("re")}
    >
        {#each items as item}
            <div class="flex space-x-32 justify-center">
                {#each Object.entries(item) as [key, value]}
                    {#if key !== "id"}
                        <div
                            class={`transition-all ease-in-out
                            ${dropDown ? "opacity-100 duration-[700ms]" : "opacity-0 duration-0"}
                        `}
                        >
                            {value}
                        </div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
</div>
