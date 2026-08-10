<script>
  import { skills } from "$lib/data/skills.svelte";
  import stamp from "$lib/assets/doodles/stamp.svg";
  import Marquee from "$lib/components/Marquee.svelte";
  let halfLenght = Math.ceil(skills.length / 2);
  let marqueeOne = $derived(skills.slice(0, halfLenght));
  let marqueeTwo = $derived(skills.slice(halfLenght, skills.length));
</script>

<div class="main relative font-light flex flex-col justify-center gap-12 items-center overflow-x-hidden">
  <img
    class="w-[13%] -rotate-30 hover:rotate-0 transitional hover:z-30 drop-shadow-2xl hover:opacity-100 opacity-40 absolute top-20 left-10"
    src={stamp}
    alt="doodle"
  />
  <Marquee items={marqueeOne}/>
  <p class="text-2xl py-10">
    I am <span class="highlight">regularly</span> developing my skills
  </p>
  <Marquee items={marqueeTwo} leftFlow={false}/>
  <p class="text-sm absolute bottom-2 right-2">logos and trademarks belong to their respective owners</p>
</div>



