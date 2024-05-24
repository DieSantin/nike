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

    function handleStopBigSearch() {
        dispatch("stopBigSearch");
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
<div
    class={`fixed w-full h-[380px] left-0 bg-white
        transition-all duration-200 ease-linear
        ${activeFirstTransition ? "opacity-100" : "opacity-95"}
        ${activeThirdTransition ? "top-0" : "top-9"}
        `}
>
    <div class="px-10 grid grid-cols-[1fr_auto_1fr] items-center py-3">
        <div
            class={`transition-all duration-100 ease-out
            ${activeFirstTransition ? "ml-0" : "ml-[2000px]"}
        `}
        >
            <NikeLogoSearch />
        </div>
        <button
            class={`bg-gray-100 rounded-full flex items-center h-[36px] cursor-text hover:bg-gray-200 
            transition-all duration-300 ease-out 
            ${activeFirstTransition ? "ml-0" : "ml-[2000px]"}
            ${activeFirstTransition ? "w-[1200px]" : "w-[160px]"}
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
            class={`font-semibold flex justify-end
            transition-all duration-300 delay-300
            ${activeFirstTransition ? "text-lg" : "text-sm"}
            ${activeSecondTransition ? "opacity-100 text-base" : "opacity-0 text-lg"}`}
            on:click={() => handleStopBigSearch()}
        >
            Annulla
        </button>
    </div>
</div>
