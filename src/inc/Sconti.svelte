<script>
    import { onMount } from "svelte";

    let seconds = 1;

    let leftToRight;
    let rightToLeft;
    let hiddenRight;
    let noHidden;

    onMount(() => {
        setInterval(() => {
            if (seconds > 0) {
                seconds -= 1;
            } else {
                setTimeout(() => {
                    leftToRight = 1;
                }, 5000);
                setTimeout(() => {
                    leftToRight = 0;
                    hiddenRight = 1;
                }, 8000);
                setTimeout(() => {
                    hiddenRight = 0;
                    noHidden = 1;
                }, 9000);
                setTimeout(() => {
                    noHidden = 0;
                    rightToLeft = 1;
                }, 20000);
                seconds = 20;
            }
        }, 1000);
    });
</script>

<div class="bg-gray-100 h-14 overflow-hidden">
    <div
        class={`text-center py-2 ml-0
        transition-all ease-linear duration-150
        ${leftToRight ? "ml-[2000px]" : null}
        ${hiddenRight ? "ml-[-3000px] hidden" : null}
        ${noHidden ? "ml-[-3000px]" : null}
        ${rightToLeft ? "ml-0" : null}
        `}
    >
        <div>Consegna e resi gratuiti</div>
        <div class="flex justify-center">
            <div class="text-sm">
                Per i Member Nike, consegna e resi gratuiti entro 30 giorni.
            </div>
            <div class="text-sm underline font-medium ml-1">Scopri di più.</div>
            <div class="text-sm underline font-medium ml-1">
                Unisciti a noi.
            </div>
        </div>
    </div>
</div>
<div class="text-center mt-20">
    <div class="text-lg font-bold">Tempo rimasto: {seconds} secondi</div>
</div>
