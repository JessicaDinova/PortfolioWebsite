<script>
  import star from "$lib/assets/doodles/star.svg";
  let { items = [], marqueeRotation, leftFlow=true } = $props();
  let duplicatedItems = $derived([...items, ...items]);
  let marqueeFlow = $derived(leftFlow ? "animate-marquee" : "animate-marquee-alt")
</script>

<div class="w-full overflow-x-hidden {marqueeRotation}">
  <div class="w-max flex {marqueeFlow} items-center">
    {#each duplicatedItems as item}
      <img class="h-10" src={star} alt="star"/>
      <img class="h-28 mx-3" src={item.icon} alt={item.name} />
    {/each}
  </div>
</div>