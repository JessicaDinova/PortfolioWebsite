<script>
  import { skills } from "$lib/helpers/skills";
  import Marquee from "$lib/components/Marquee.svelte";
  let halfLenght = Math.ceil(skills.length / 2);
  let marqueeOne = $derived(skills.slice(0, halfLenght));
  let marqueeTwo = $derived(skills.slice(halfLenght, skills.length));
</script>

<div class="main relative font-light flex flex-col justify-center gap-12 items-center overflow-x-hidden">
  <div class="absolute svgBorder top-22 left-2 text-3xl flex w-108">
    <div class="z-10 flex flex-col p-8">
      <p>All icons illustrated by
        <span class="font-hand font-medium text-lavander-100 text-shadow-boldest pr-1">
          ME
        </span>
      </p>
      <p class="text-sm z-10">logos and trademarks belong to their respective owners</p>
    </div>
  </div>
  <Marquee 
    items={marqueeOne} 
    marqueeRotation="-rotate-5"
  />
  <p class="text-2xl py-12">
    I am <span class="highlight">regularly</span> developing my skills
  </p>
  <Marquee 
    items={marqueeTwo} 
    marqueeRotation="rotate-5" 
    leftFlow={false}
  />
</div>


