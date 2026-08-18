<script>
  import star from "$lib/assets/doodles/star.svg";
  let { items = [], leftFlow=true } = $props();
  let duplicatedItems = $derived([...items, ...items]);
  let marqueeFlow = $derived(leftFlow ? "animate-marquee" : "animate-marquee-alt")
</script>

<div class="w-full">
  <div class="w-max flex {marqueeFlow} items-center">
    {#each duplicatedItems as item}
      <img class="h-6" src={star} alt="star"/>
      <div class="relative flex flex-col items-center group">
        <img class="h-15 md:h-28 mx-3" src={item.icon} alt={item.name} />
        <p class="absolute uppercase lg:invisible lg:group-hover:visible translate-y-2 lg:group-hover:translate-y-0 lg:transitional -bottom-10">{item.name}</p>
      </div>
    {/each}
  </div>
</div>