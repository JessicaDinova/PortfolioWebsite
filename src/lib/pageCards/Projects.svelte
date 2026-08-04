<script>
  import Sticker from "$lib/components/Sticker.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Description from "$lib/components/Description.svelte";
  import queenDoodle from "$lib/assets/doodles/queen.png";
  import slideArrow from "$lib/assets/arrows/slideArrow.svg";
  import { projects } from "$lib/data/projects";
  import { createLink } from "$lib/helpers/pageFunctions";
  import { slide, fade,fly, crossfade, scale } from "svelte/transition";

  let { scrollToSection } = $props();
  let currentIndex = $state(0);
  let itemsPerView = 4;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % projects.length;
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  }

  function getCircularSlice(array, start, count) {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(array[(start + i) % array.length]);
    }
    return result;
  }

  let visibleProjects = $derived(getCircularSlice(projects, currentIndex, itemsPerView));
</script>

<div class="main relative overflow-hidden justify-center items-center flex flex-row gap-8">
  <img
    class="w-[13%] absolute bottom-0 left-0"
    src={queenDoodle}
    alt="doodle"
  />
  <button onclick={previousSlide} class="cursor-pointer hover:scale-105">
    <img src="{slideArrow}" alt="arrow" class="rotate-180 w-6">
  </button>
  <div class="flex gap-17">
    {#each visibleProjects as project, i (project.name || i)}
      <button onclick={() => scrollToSection(createLink(project.name))} in:fly={{duration: 200, y:-100}}>
        <div class="relative flex justify-center hover:scale-105 transitional">
          <Description description={project.description}/>
          <ProjectCard projectName={project.name} projectImg={project.img} />
          {#each project.stickers as sticker}
            <Sticker sticker={sticker} isDoodle={false}/>
          {/each}
        </div>
      </button>
    {/each}
  </div>
  <button onclick={nextSlide} class="cursor-pointer hover:scale-105">
    <img src="{slideArrow}" alt="arrow" class="w-6">
  </button>
</div>
