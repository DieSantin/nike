<script>
    export let noResponsive = false;
    export let bgBlack = false;
    export let border = false;
    export let hoverGray = false;
</script>

<button
    class={`px-4 py-1 md:py-2 rounded-full font-medium
    ${noResponsive ? "" : "text-xl sm:text-lg lg:text-xl 1xl:text-1xl"}
    ${border ? "border border-gray-20300" : ""}
    ${hoverGray ? "hover:bg-gray-300" : ""}
    ${bgBlack ? "bg-black text-white" : "bg-white"}
`}
>
    <slot />
</button>
