<script>
    import { createEventDispatcher } from "svelte";

    import CoverIcons from "./CoverIcons.svelte";
    import Lente from "$svg/Lente.svelte";
    import X from "$svg/X.svelte";
    import { onMount } from "svelte";
    import NikeLogoSearch from "$svg/NikeLogoSearch.svelte";

    let dispatch = createEventDispatcher();

    let activeFirstTransition = false;
    let activeSecondTransition = false;
    let text = "";

    let navInput;

    function clearText() {
        text = "";
    }

    function handleStopBigSearch() {
        dispatch("stopBigSearch");
    }

    function textInput() {
        navInput.focus();
    }

    onMount(() => {
        setTimeout(() => {
            activeFirstTransition = true;
            navInput.focus();
        }, 0);
        setTimeout(() => {
            activeSecondTransition = true;
        }, 500);
    });
</script>

<div
    class={`fixed w-full h-[700px] lg:h-[350px] left-0 bg-white
        transition-all duration-200 ease-linear top-0
        ${activeFirstTransition ? "opacity-100" : "opacity-95"}
        ${activeSecondTransition ? "lg:top-0" : "lg:top-9"}
        `}
>
    <div class="px-10 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] py-3">
        <div
            class={`transition-all duration-300 hidden lg:block
            ${activeFirstTransition ? "ml-0" : "ml-[60vw]"}
        `}
        >
            <NikeLogoSearch />
        </div>
        <div>
            <div class="relative">
                <button
                    class={`bg-gray-100 rounded-full flex items-center h-[36px] cursor-text hover:bg-gray-200 
                    transition-all duration-30 px-2 md:px-0
                    ${activeFirstTransition ? "ml-0 opacity-100" : ""}
                    ${activeFirstTransition ? "w-[50vw] sm:w-[60vw]" : "w-[0vw]"}`}
                    on:click={() => textInput()}
                >
                    <CoverIcons>
                        <Lente />
                    </CoverIcons>
                    <input
                        class="bg-transparent focus:outline-none w-[55vw] placeholder-gray-500"
                        type="text"
                        placeholder="Cerca"
                        bind:value={text}
                        bind:this={navInput}
                    />
                    {#if text}
                        <div class="absolute right-0">
                            <CoverIcons on:func={clearText}>
                                <X />
                            </CoverIcons>
                        </div>
                    {/if}
                </button>
            </div>
            <div class="pt-8">
                <div
                    class={`text-gray-500 text-[15px] font-medium pb-4
                    transition-opacity ease-linear duration-300 leading-4
                    ${activeSecondTransition ? " " : "opacity-0"}`}
                >
                    I termini più ricercati
                </div>
                <div
                    class={`text-2xl font-medium
                    transition-all duration-300 delay-[50ms]
                    ${activeSecondTransition ? " " : "opacity-0 -translate-y-2"}`}
                >
                    Air Force 1
                </div>
                <div
                    class={`text-2xl font-medium py-2
                    transition-all duration-[350ms] delay-[100ms]
                    ${activeSecondTransition ? " " : "opacity-0 -translate-y-8"}`}
                >
                    Jordan
                </div>
                <div
                    class={`text-2xl font-medium py-2
                    transition-all duration-[400ms] delay-[150ms]
                    ${activeSecondTransition ? " " : "opacity-0 -translate-y-16"}`}
                >
                    Air Max
                </div>
                <div
                    class={`text-2xl font-medium py-2
                    transition-all duration-[450ms] delay-[200ms]
                    ${activeSecondTransition ? " " : "opacity-0 -translate-y-24"}`}
                >
                    Blazer
                </div>
            </div>
        </div>
        <button
            class={`flex justify-end py-2
            transition-all duration-300 delay-300
            ${activeFirstTransition ? "font-semibold" : "opacity-0 text-xs font-bold"}
            `}
            on:click={() => handleStopBigSearch()}
        >
            Annulla
        </button>
    </div>
</div>
