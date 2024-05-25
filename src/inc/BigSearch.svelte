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
        }, 200);
        setTimeout(() => {
            activeThirdTransition = 1;
        }, 500);
    });
</script>

<div class="fixed inset-0 bg-black opacity-25 z-100"></div>
<div
    class={`fixed w-full h-[360px] left-0 bg-white
        transition-all duration-200 ease-linear
        ${activeFirstTransition ? "opacity-100" : "opacity-90"}
        ${activeThirdTransition ? "top-0" : "top-9"}
        `}
>
    <div class="px-10 grid grid-cols-[1fr_auto_1fr] py-3">
        <div
            class={`transition-all duration-300 ease-out
            ${activeFirstTransition ? "ml-0" : "ml-[1500px]"}
        `}
        >
            <NikeLogoSearch />
        </div>
        <div>
            <button
                class={`bg-gray-100 rounded-full flex items-center h-[36px] cursor-text hover:bg-gray-200 
                transition-all duration-300 ease-out 
                ${activeFirstTransition ? "ml-0 opacity-100" : "ml-[1500px] opacity-0"}
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
            <dir class="pt-5">
                <div
                    class={`text-gray-500 text-[15px] font-medium pb-2
                    transition-opacity ease-linear duration-300
                    ${activeThirdTransition ? "opacity-100" : "opacity-0"}`}
                >
                    I termini più ricercati
                </div>
                <div
                    class={`text-2xl font-medium
                    transition-all ease-out duration-300 delay-[80ms]
                    ${activeThirdTransition ? "opacity-100 py-2" : "opacity-0 py-0"}`}
                >
                    Air Force 1
                </div>
                <div
                    class={`text-2xl font-medium py-2
                    transition-all ease-out duration-300 delay-[160ms]
                    ${activeThirdTransition ? "opacity-100 py-2" : "opacity-0 py-0"}`}
                >
                    Jordan
                </div>
                <div
                    class={`text-2xl font-medium py-2
                    transition-all ease-out duration-300 delay-[240ms]
                    ${activeThirdTransition ? "opacity-100 py-2" : "opacity-0 py-0"}`}
                >
                    Air Max
                </div>
                <div
                    class={`text-2xl font-medium py-2
                    transition-all ease-out duration-300 delay-[320ms]
                    ${activeThirdTransition ? "opacity-100 py-2" : "opacity-0 py-0"}`}
                >
                    Blazer
                </div>
            </dir>
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
