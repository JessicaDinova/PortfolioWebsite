<script>
  import Sticker from "./Sticker.svelte";
  import emptyCircle from "$lib/assets/doodles/emptyCircle.svg";
  import fullCircle from "$lib/assets/doodles/fullCircle.svg";
  import slideArrow from "$lib/assets/arrows/slideArrow.svg";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { preloadImages } from "$lib/helpers/pageFunctions";

  let { imgConfig } = $props();
  let numberOfImgs = $derived(imgConfig.images.length);
  let currentImg = $state(0);
  let preloadedImgs = [];

  const nextSlide = () => (currentImg === (numberOfImgs - 1) ? currentImg = 0 : currentImg++);
  const previousSlide = () => (currentImg === 0 ? currentImg = (numberOfImgs - 1) : currentImg--);

  onMount(() => {
    preloadedImgs = preloadImages(imgConfig.images);
  });
</script>

<div class="flex gap-10 flex-col items-center">
  <div class="flex relative justify-center">
    {#each imgConfig.stickers as sticker}
      <Sticker {sticker} isDoodle={false} />
    {/each}
    <div class="{imgConfig.size} shrink-0">
      {#each imgConfig.images as image, i}
        {#if i === currentImg}
          <img class="{imgConfig.size} object-fill shadow-xl" src={image} alt="projectPhoto" in:fade={{duration: 100}}/>
        {/if}
      {/each}
    </div>
  </div>
  
  {#if numberOfImgs > 1}
    <div class="flex z-10 gap-2 items-center">
      <button onclick={previousSlide} class="cursor-pointer hover:scale-105">
        <img src="{slideArrow}" alt="arrow" class="rotate-180 w-6">
      </button>
      {#each Array(numberOfImgs) as _, i}
        <button onclick={() => (currentImg = i)}>
          <img class="w-7 cursor-pointer hover:scale-105 transitional" style="rotate: {Math.floor(Math.random() * 360)}deg" src={i === currentImg ? fullCircle : emptyCircle} alt="circle"/>
        </button>
      {/each}
      <button onclick={nextSlide} class="cursor-pointer hover:scale-105">
        <img src="{slideArrow}" alt="arrow" class="w-6">
      </button>
    </div>
  {/if}
</div>