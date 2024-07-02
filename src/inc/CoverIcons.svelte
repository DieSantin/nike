<script>
    export let bgTransparent = false;
    export let big = false;
    export let hoverGray = false;

    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    function func() {
        dispatch("func");
    }
</script>

<button
    class={`rounded-full flex items-center justify-center 
    transition-all duration-75 ease-in-out
    ${bgTransparent ? "bg-transparent" : "bg-gray-100"}
    ${big ? "w-[50px] h-[50px]" : "w-[36px] h-[36px]"}
    ${hoverGray ? "hover:bg-gray-300" : ""}
    `}
    on:click={() => func()}
>
    <slot />
</button>
