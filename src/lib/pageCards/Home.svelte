<script>
  import star from "$lib/assets/doodles/star.svg";
  import Sticker from "$lib/components/Sticker.svelte";
  const stars = [
    {img:star, styling: "h-10", position:"left-50 top-45"},
    {img:star, styling: "h-8 rotate-20", position:"left-150 top-120"},
    {img:star, styling: "h-15 rotate-15", position:"right-70 top-40"},
    {img:star, styling: "h-10 -rotate-30", position:"top-75 right-150"},
    {img:star, styling: "h-18 -rotate-10", position:"left-10 bottom-20"},
    {img:star, styling: "h-10 rotate-10", position:"left-25 bottom-37"},
    {img:star, styling: "h-15 rotate-10", position:"right-15 bottom-43"},
    {img:star, styling: "h-12", position:"right-25 bottom-30"},
    {img:star, styling: "h-10 -rotate-20", position:"right-10 bottom-26"},
  ]
</script>
<div class="main relative font-light flex flex-col justify-center items-center">
  <h1 class="text-6xl">Hello, I am 
  <span class="font-drawn text-middle text-lavander-100 font-black text-shadow-boldest">
    Jessica
  </span></h1>
  <p class="text-3xl text-right">Web developer and wannabe graphic<br/> designer</p>
    {#each stars as star}
      <Sticker sticker={star} animation={"animate-star"} animationDelay={`animation-delay: ${Math.floor(Math.random() * 1000)}ms`}/>
    {/each}
</div>