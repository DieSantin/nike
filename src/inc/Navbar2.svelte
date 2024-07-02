<script>
    import Cuore from "$svg/Cuore.svelte";
    import NikeLogo from "$svg/NikeLogo.svelte";
    import Borsetta from "$svg/Borsetta.svelte";
    import Menu from "$svg/Menu.svelte";
    import Search from "./Search.svelte";
    import CoverIcons from "./CoverIcons.svelte";

    import { createEventDispatcher } from "svelte";

    const menuItems = [
        { id: "novità", label: "Novità e in evidenza" },
        { id: "uomo", label: "Uomo" },
        { id: "donna", label: "Donna" },
        { id: "kids", label: "Kids" },
        { id: "outlet", label: "Outlet" },
    ];

    let items = [];

    let dropDown = false;
    let reanim = true;
    let lastX;
    let timer;
    let timerCheck;

    let dispatch = createEventDispatcher();

    function handleShowBigSearch() {
        dispatch("showBigSearch");
    }

    function hiddenDropDown(x) {
        dropDown = 0;
        if (x === "reanimation") reanim = true;
    }

    function handleSidebarMenu() {
        dispatch("showSidebar");
    }

    function handleDropDown(dropDownElement) {
        if (reanim && dropDownElement !== lastX) {
            clearTimeout(timer);
            dropDown = false;
            timer = setTimeout(() => {
                dropDown = true;
            }, 30);
            reanim = false;
        } else if (reanim && dropDownElement === lastX) {
            dropDown = true;
            reanim = false;
        } else if (dropDownElement && dropDownElement !== lastX && !reanim) {
            dropDown = true;
        } else {
            dropDown = true;
        }

        if (dropDownElement) lastX = dropDownElement;

        clearTimeout(timerCheck);
        timerCheck = setTimeout(() => {}, 20);

        switch (dropDownElement) {
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

<div
    class="relative grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center px-7 lg:px-12"
>
    <div>
        <NikeLogo />
    </div>
    <div
        class="hidden lg:flex space-x-8 font-semibold items-center justify-center"
    >
        {#each menuItems as item}
            <button
                class="py-4 hover:underline"
                on:mouseenter={() => handleDropDown(item.id)}
                on:mouseleave={hiddenDropDown}
            >
                {item.label}
            </button>
        {/each}
    </div>
    <div class="flex items-center justify-end">
        <Search on:showBigSearch={handleShowBigSearch} />
        <CoverIcons bgTransparent="true">
            <Cuore />
        </CoverIcons>
        <CoverIcons bgTransparent="true">
            <Borsetta />
        </CoverIcons>
        <div class="block lg:hidden">
            <CoverIcons
                bgTransparent="true"
                on:func={() => handleSidebarMenu()}
            >
                <Menu />
            </CoverIcons>
        </div>
    </div>
    <div
        class={`absolute top-full left-0 w-full bg-white overflow-hidden z-20
        ${dropDown ? "transition-h duration-150 ease-in h-[400px]" : "h-0"}`}
        role="group"
        on:mouseenter={() => handleDropDown(null)}
        on:mouseleave={() => hiddenDropDown("reanimation")}
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
