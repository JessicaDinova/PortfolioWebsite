<script>
  let {stickerRotation="0", stickerOffset, stickerDoodle=false, stickerImg} = $props();
</script>

<div class="absolute {stickerOffset} {stickerDoodle ? "" : "opacity-55"} z-10 rotate-{stickerRotation}">
  <img class="w-32" src="{stickerImg}" alt="sticker">
</div>