<script>
    import Lente from "$svg/Lente.svelte";
    import CoverIcons from "./CoverIcons.svelte";

    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    let navInput;

    function handleShow() {
        dispatch("showSearch");
    }

    function focusInput() {
        navInput.focus();
    }
</script>

<button
    class="bg-gray-100 rounded-full flex items-center w-[170px] h-[36px] cursor-text hover:bg-gray-200"
    on:click={() => focusInput()}
    on:click={() => handleShow()}
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
