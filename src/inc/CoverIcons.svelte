<script>
    export let bgTransparent = 0;
</script>

<button
    class={`hover:cursor-pointer w-[36px] h-[36px] hover:bg-gray-300 rounded-full flex items-center justify-center 
    transition-all duration-75 ease-in-out
    ${bgTransparent ? "bg-transparent" : "bg-gray-100"}`}
>
    <slot />
</button>
