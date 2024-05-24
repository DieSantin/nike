<script>
    import Lente from "$svg/Lente.svelte";
    import CoverIcons from "./CoverIcons.svelte";

    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    let navInput;
    export let animSearch;

    function handleShow() {
        dispatch("showBigSearch");
    }

    function focusInput() {
        navInput.focus();
        animSearch = 1;
    }
</script>

<button
    class={`bg-gray-100 rounded-full flex items-center w-[170px] h-[36px] cursor-text hover:bg-gray-200
    transition-all duration-200 delay-100 ease-out
    ${animSearch ? "mr-36" : "mr-0"}`}
    on:click={() => {
        focusInput();
        handleShow();
    }}
>
    <CoverIcons>
        <Lente />
    </CoverIcons>
    <input
        class="bg-transparent focus:outline-none max-w-10 placeholder-gray-500"
        type="text"
        placeholder="Cerca"
        bind:this={navInput}
    />
</button>
