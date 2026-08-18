<script>
  import star from "$lib/assets/doodles/star.svg";
  import Sticker from "$lib/components/Sticker.svelte";
  const stars = [
    {img:star, styling:"h-5 md:h-10", position:"left-20 top-50 md:left-50 md:top-45"},
    {img:star, styling:"h-3 md:h-8 rotate-20", position:"left-35 top-110 md:left-150 md:top-120"},
    {img:star, styling:"h-10 md:h-15 rotate-15", position:"right-20 top-20 md:right-70 md:top-40"},
    {img:star, styling:"h-5 md:h-10 -rotate-30", position:"right-35 top-75 md:top-70 md:right-150"},
    {img:star, styling:"h-13 md:h-18 -rotate-10", position:"left-10 bottom-20"},
    {img:star, styling:"h-5 md:h-10 rotate-10", position:"left-25 bottom-37"},
    {img:star, styling:"h-10 md:h-15 rotate-10", position:"right-15 bottom-43"},
    {img:star, styling:"h-7 md:h-12", position:"right-25 bottom-30"},
    {img:star, styling:"h-5 md:h-10 -rotate-20", position:"right-10 bottom-26"},
  ]
</script>
<div class="pageShell relative font-light flex flex-col axesCenter">
  <h1 class="text-4xl md:text-6xl">Hello, I am 
  <span class="font-drawn text-4xl md:text-middle text-lavander-100 font-black text-shadow-boldest">
    Jessica
  </span></h1>
  <p class="font-normal md:font-light text-lg md:text-3xl text-right">Web developer and wannabe graphic<br/> designer</p>
    {#each stars as star}
      <Sticker sticker={star} animation={"animate-star"} animationDelay={`animation-delay: ${Math.floor(Math.random() * 1000)}ms`}/>
    {/each}
</div>