<script>
    import Lente from "$svg/Lente.svelte";
    import CoverIcons from "./CoverIcons.svelte";

    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    let navInput;

    function handleShow() {
        dispatch("showBigSearch");
    }

    function focusInput() {
        navInput.focus();
    }
</script>

<button
    class={`rounded-full flex items-center h-[36px] cursor-text hover:bg-gray-200
    transition-all duration-200 ease-out
    xl:w-[170px] xl:mx-2 xl:bg-gray-100
    "mr-0"}`}
    on:click={() => {
        focusInput();
        handleShow();
    }}
>
    <CoverIcons bgTransparent="true">
        <Lente />
    </CoverIcons>
    <input
        class="bg-transparent focus:outline-none max-w-10 placeholder-gray-500 hidden
        xl:block"
        type="text"
        placeholder="Cerca"
        bind:this={navInput}
    />
</button>
