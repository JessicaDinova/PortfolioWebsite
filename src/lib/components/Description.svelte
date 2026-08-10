<script>
  let { description } = $props();
</script>

<div class="absolute text-nowrap min-h-max min-w-min flex z-20 {description.styling} items-center gap-2">
  <p class="text-3xl text-lavander-100 font-hand font-bold">{description.text}</p>
  <img src={description.img} alt="arrow" class="h-15 {description.rotation}">
</div>