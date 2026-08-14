<script>
  import { skills } from "$lib/data/skills.svelte";
  import stamp from "$lib/assets/doodles/stamp.png";
  import Marquee from "$lib/components/Marquee.svelte";
  let halfLenght = Math.ceil(skills.length / 2);
  let marqueeOne = $derived(skills.slice(0, halfLenght));
  let marqueeTwo = $derived(skills.slice(halfLenght, skills.length));
</script>

<div class="main relative font-light flex flex-col justify-center gap-20 items-center overflow-x-hidden">
  <img
    class="w-35 md:w-48 drop-shadow-lg -rotate-30 hover:rotate-0 transitional hover:z-30 lg:drop-shadow-2xl lg:hover:opacity-100 lg:opacity-40 absolute top-8 left-3 md:top-20 md:left-10"
    src={stamp}
    alt="doodle"
  />
  <Marquee items={marqueeOne}/>
  <p class="text-xl md:text-2xl mt-10 md:mt-0">
    I am <span class="highlight">regularly</span> developing my skills
  </p>
  <Marquee items={marqueeTwo} leftFlow={false}/>
  <p class="text-xs md:text-sm absolute bottom-2 md:right-2">logos and trademarks belong to their respective owners</p>
</div>



