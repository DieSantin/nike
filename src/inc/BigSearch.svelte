<script>
    import { createEventDispatcher } from "svelte";

    import CoverIcons from "./CoverIcons.svelte";
    import Lente from "$svg/Lente.svelte";
    import { onMount } from "svelte";
    import NikeLogoSearch from "$svg/NikeLogoSearch.svelte";

    let dispatch = createEventDispatcher();

    let activeFirstTransition;
    let activeSecondTransition;

    let navInput;

    function handleStopBigSearch() {
        dispatch("stopBigSearch");
    }

    function textInput() {
        navInput.focus();
    }

    onMount(() => {
        setTimeout(() => {
            activeFirstTransition = 1;
            navInput.focus();
        }, 0);
        setTimeout(() => {
            activeSecondTransition = 1;
        }, 500);
    });
</script>

<div
    class={`fixed w-full h-[350px] left-0 bg-white
        transition-all duration-200 ease-linear
        ${activeFirstTransition ? "opacity-100" : "opacity-90"}
        ${activeSecondTransition ? "top-0" : "top-9"}
        `}
>
    <div class="px-10 grid grid-cols-[1fr_auto_1fr] py-3">
        <div
            class={`transition-all duration-300 ease-out
            ${activeFirstTransition ? "ml-0" : "ml-[100vw]"}
        `}
        >
            <NikeLogoSearch />
        </div>
        <div>
            <button
                class={`bg-gray-100 rounded-full flex items-center h-[36px] cursor-text hover:bg-gray-200 
                transition-all duration-300 ease-out 
                ${activeFirstTransition ? "ml-0 opacity-100" : "ml-[100vw] opacity-0"}
                ${activeFirstTransition ? "w-[60vw]" : "w-[160px]"}`}
                on:click={() => textInput()}
            >
                <CoverIcons>
                    <Lente />
                </CoverIcons>
                <input
                    class="bg-transparent focus:outline-none w-[55vw] placeholder-gray-500"
                    type="text"
                    placeholder="Cerca"
                    bind:this={navInput}
                /></button
            >
            <div class="pt-8">
                <div
                    class={`text-gray-500 text-[15px] font-medium pb-2
                    transition-opacity ease-linear duration-500
                    ${activeSecondTransition ? "opacity-100" : "opacity-0"}`}
                >
                    I termini più ricercati
                </div>
                <div
                    class={`text-2xl font-medium
                    transition-all ease-out duration-500 delay-[50ms]
                    ${activeSecondTransition ? "opacity-100" : "opacity-0 -translate-y-2"}`}
                >
                    Air Force 1
                </div>
                <div
                    class={`text-2xl font-medium py-2
                    transition-all ease-out duration-500 delay-[100ms]
                    ${activeSecondTransition ? "opacity-100 py-0" : "opacity-0 -translate-y-4"}`}
                >
                    Jordan
                </div>
                <div
                    class={`text-2xl font-medium py-2
                    transition-all ease-out duration-500 delay-[150ms]
                    ${activeSecondTransition ? "opacity-100" : "opacity-0 -translate-y-8"}`}
                >
                    Air Max
                </div>
                <div
                    class={`text-2xl font-medium py-2
                    transition-all ease-out duration-500 delay-[200ms]
                    ${activeSecondTransition ? "opacity-100" : "opacity-0 -translate-y-16"}`}
                >
                    Blazer
                </div>
            </div>
        </div>
        <button
            class={`flex justify-end py-2
            transition-all duration-300 delay-300
            ${activeFirstTransition ? "opacity-100 font-semibold" : "opacity-0 text-xs font-bold"}
            `}
            on:click={() => handleStopBigSearch()}
        >
            Annulla
        </button>
    </div>
</div>
