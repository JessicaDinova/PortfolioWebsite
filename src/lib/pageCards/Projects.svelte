<script>
  import Sticker from "$lib/components/Sticker.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Description from "$lib/components/Description.svelte";
  import queenDoodle from "$lib/assets/doodles/queen.png";
  import { projects } from "$lib/helpers/projects";
  import { createLink } from "$lib/helpers/pageFunctions";

  let { scrollToSection } = $props();
</script>

<div
  class="main relative overflow-hidden justify-center items-center flex flex-row gap-20"
>
  <img
    class="w-[13%] absolute bottom-0 left-0"
    src={queenDoodle}
    alt="doodle"
  />
  {#each projects as project}
    <button onclick={() => scrollToSection(createLink(project.name))}>
      <div class="relative flex justify-center hover:scale-105 duration-100">
        <Description description={project.description}/>
        <ProjectCard projectName={project.name} projectImg={project.img} />
        {#each project.stickers as sticker}
          <Sticker sticker={sticker} isDoodle={false}/>
        {/each}
      </div>
    </button>
  {/each}
</div>
