<script>
  let {stickerStyling, stickerDoodle=false, stickerImg} = $props();
</script>

<div class="absolute {stickerStyling} {stickerDoodle ? "" : "opacity-55"} scale-75 z-10">
  <img class="w-32" src="{stickerImg}" alt="sticker">
</div>