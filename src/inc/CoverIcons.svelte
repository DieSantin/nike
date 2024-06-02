<script>
    export let bgTransparent = 0;
    export let big = 0;
</script>

<button
    class={`rounded-full flex items-center justify-center 
    transition-all duration-75 ease-in-out hover:bg-gray-300
    ${bgTransparent ? "bg-transparent" : "bg-gray-100"}
    ${big ? "w-[50px] h-[50px]" : "w-[36px] h-[36px]"}
    `}
>
    <slot />
</button>
