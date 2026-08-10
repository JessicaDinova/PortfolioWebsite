<script>
  let { sticker, isDoodle=true, animation="", animationDelay="" } = $props();
</script>

<div class="absolute z-10 {sticker.position} {animation} {isDoodle ? "": "opacity-55 size-27"}" style="{animationDelay}">
  <img class="{sticker.styling}" src={sticker.img} alt="sticker">
</div>