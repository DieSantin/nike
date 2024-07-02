<script>
    import { createEventDispatcher, onMount } from "svelte";

    import X from "$svg/X.svelte";
    import CoverIcons from "./CoverIcons.svelte";
    import JordanLogo from "$svg/JordanLogo.svelte";
    import ConverseLogo from "$svg/ConverseLogo.svelte";
    import Button from "./Button.svelte";

    function dioboia() {
        console.log(anim);
    }

    let anim = false;

    onMount(() => {
        setTimeout(() => {
            anim = true;
        }, 0);
    });

    let dispatch = createEventDispatcher();

    function hideSidebar() {
        anim = false;
        setTimeout(() => {
            dispatch("hideSidebar");
        }, 300);
    }

    const menuItems = [
        { id: 1, label: "Novità e in evidenza" },
        { id: 2, label: "Uomo" },
        { id: 3, label: "Donna" },
        { id: 4, label: "Kids" },
        { id: 5, label: "Outlet" },
    ];
</script>

<div
    class={`fixed top-0 bg-white w-[320px] h-[100vh] z-20 transition-all duration-300 
    ${anim ? "right-0" : "right-[-320px]"}`}
>
    <div class="p-5">
        <div class="flex justify-end">
            <button on:click={() => hideSidebar()}>
                <X />
            </button>
        </div>

        <div class="py-4">
            {#each menuItems as item}
                <div class="flex justify-between items-center">
                    {item.label}
                    <CoverIcons bgTransparent={true} hoverGray={false}>
                        <span class="material-symbols-sharp">
                            chevron_right
                        </span>
                    </CoverIcons>
                </div>
            {/each}
        </div>

        <div class="py-4">
            <div class="flex">
                <JordanLogo />
                <div>Jordan</div>
            </div>
            <div class="flex">
                <ConverseLogo />
                <div>Converse</div>
            </div>
        </div>

        <div class="py-4">
            <div class="">
                Diventa Member Nike per accedere a prodotti fantastici, tanta
                ispirazione e storie sullo sport.
            </div>
            <div class="font-semibold">Scopri di più</div>
        </div>

        <div class="py-4 flex justify-center space-x-3">
            <Button noResponsive={true} bgBlack={true} hoverGray={false}>
                Unisciti a noi
            </Button>
            <Button noResponsive={true} hoverGray={true} border={true}
                >Accedi</Button
            >
        </div>
    </div>
</div>
