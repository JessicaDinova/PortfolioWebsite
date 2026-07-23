<script>
  let {stickerStyling, stickerDoodle=false, stickerImg} = $props();
</script>

<div class="absolute z-10 {stickerStyling} {stickerDoodle ? "" : "opacity-55 scale-75"}">
  <img class="{stickerDoodle ? "" : "w-32"}" src="{stickerImg}" alt="sticker">
</div>