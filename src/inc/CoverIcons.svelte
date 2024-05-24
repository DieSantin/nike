<script>
    export let bgTransparent;
</script>

<button
    class={`hover:cursor-pointer w-[36px] h-[36px] hover:bg-gray-300 rounded-full flex items-center justify-center 
    ${bgTransparent ? "bg-transparent" : "bg-gray-100"}`}
>
    <slot />
</button>
