<script>
  import Sticker from "$lib/components/Sticker.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Description from "$lib/components/Description.svelte";
  import queenDoodle from "$lib/assets/doodles/queen.png";
  import slideArrow from "$lib/assets/arrows/slideArrow.svg";
  import { projects } from "$lib/data/projects.svelte";
  import { createLink } from "$lib/helpers/pageFunctions";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { preloadImages } from "$lib/helpers/pageFunctions";

  let { scrollToSection } = $props();
  let currentIndex = $state(0);
  let transitionDirection = $state(-100);
  let itemsPerView = $state(4);
  let preloadedImages = [];
  
  onMount(() => {
    const handleResize = () => {
      const isMedium = window.innerWidth < 1300;
      const isSmall = window.innerWidth < 1000;
      itemsPerView = isSmall ? 2 : (isMedium ? 3 : 4);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    preloadedImages = preloadImages(projects, 'img');

    return () => window.removeEventListener('resize', handleResize);
  })

  function nextSlide() {
    transitionDirection = 100;
    currentIndex = (currentIndex + 1) % projects.length;
  }

  function previousSlide() {
    transitionDirection = -100;
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

<div class="pageShell relative overflow-hidden axesCenter flex flex-row gap-8">
  <img
    class="w-[20%] lg:w-[13%] absolute bottom-0 left-0"
    src={queenDoodle}
    alt="doodle"
  />
  <button onclick={previousSlide} class="cursor-pointer hover:scale-105">
    <img src={slideArrow} alt="arrow" class="rotate-180 w-6">
  </button>
  <div class="flex gap-17">
    {#each visibleProjects as project, i (project.name || i)}
      <button onclick={() => scrollToSection(createLink(project.name))} in:fly={{duration: 500, x: transitionDirection}}>
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
    <img src={slideArrow} alt="arrow" class="w-6">
  </button>
</div>
