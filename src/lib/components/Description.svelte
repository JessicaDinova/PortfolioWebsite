<script>
  let {descriptionStyling, descriptionRotate="", descriptionImg, description} = $props();
</script>

<div class="absolute text-nowrap min-h-max min-w-min flex z-20 {descriptionStyling} items-center gap-2">
  <p class="text-3xl text-lavander-100 font-hand font-bold">{description}</p>
  <img src="{descriptionImg}" alt="arrow" class="h-20 {descriptionRotate}">
</div>