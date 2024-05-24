<script>
    import { createEventDispatcher } from "svelte";

    import CoverIcons from "./CoverIcons.svelte";
    import Lente from "$svg/Lente.svelte";
    import { onMount } from "svelte";
    import NikeLogoSearch from "$svg/NikeLogoSearch.svelte";

    let dispatch = createEventDispatcher();

    let activeFirstTransition = 0;
    let activeSecondTransition = 0;
    let activeThirdTransition = 0;

    let navInput;

    function handleShow() {
        dispatch("stopShow");
    }

    onMount(() => {
        setTimeout(() => {
            activeFirstTransition = 1;
            navInput.focus();
        }, 0);
        setTimeout(() => {
            activeSecondTransition = 1;
        }, 100);
        setTimeout(() => {
            activeThirdTransition = 1;
        }, 500);
    });
</script>

<div class="fixed inset-0 bg-black opacity-25 z-100"></div>

<!-- TENGO QUESTO CODICE COMMENTATO NEL CASO NON VADA BENE QUELLO CHE HO SCRITTO SOTTO, VERSIONE VECCHIA -->

<!-- <div
    class={`fixed w-full h-[380px] left-0 px-10 grid grid-cols-[1fr_auto_1fr] items-center bg-white
        transition-all duration-300 ease-in-out
        ${activeFirstTransition ? "opacity-100" : "opacity-100"}
        ${activeThirdTransition ? "top-0" : "top-9"}
        `}
>
    <NikeLogoSearch />
    <button
        class={`bg-gray-100 rounded-full flex items-center space-x-2 h-[36px] cursor-text hover:bg-gray-200 
        transition-all duration-200 delay-50 ease-in-out 
        ${activeFirstTransition ? "ml-0" : "ml-[1500px]"}
        ${activeSecondTransition ? "w-[1200px]" : "w-[160px]"}
    `}
    >
        <button
            class="hover:cursor-pointer w-[36px] h-[36px] bg-gray-100 hover:bg-gray-300 rounded-full
            flex items-center justify-center"
        >
            <Lente />
        </button>
        <input
            class="bg-transparent focus:outline-none max-w-[530px] placeholder-gray-500"
            type="text"
            placeholder="Cerca"
            bind:this={navInput}
        /></button
    >
    <button
        class={`justify-end font-semibold
        transition-all duration-200 delay-300
        ${activeFirstTransition ? "scale-100" : "hidden"}`}
        on:click={() => handleShow()}
    >
        Annulla
    </button>
</div> -->

<div
    class={`fixed w-full h-[380px] left-0 bg-white
        transition-all duration-300 ease-in-out
        ${activeFirstTransition ? "opacity-100" : "opacity-100"}
        ${activeThirdTransition ? "top-0" : "top-9"}
        `}
>
    <div class="px-10 grid grid-cols-[1fr_auto_1fr] items-center py-3">
        <div
            class={`transition-all duration-200 delay-75 ease-in
        ${activeFirstTransition ? "ml-0" : "ml-[1500px]"}`}
        >
            <NikeLogoSearch />
        </div>
        <button
            class={`bg-gray-100 rounded-full flex items-center h-[36px] cursor-text hover:bg-gray-200 
            transition-transform duration-200 delay-75 ease-in-out 
            ${activeFirstTransition ? "ml-0" : "ml-[1500px]"}
            ${activeSecondTransition ? "w-[1200px]" : "w-[160px]"}
        `}
        >
            <CoverIcons>
                <Lente />
            </CoverIcons>
            <input
                class="bg-transparent focus:outline-none max-w-[530px] placeholder-gray-500"
                type="text"
                placeholder="Cerca"
                bind:this={navInput}
            /></button
        >
        <button
            class={`font-semibold
            transition-all duration-200 delay-300`}
            on:click={() => handleShow()}
        >
            Annulla
        </button>
    </div>
</div>
