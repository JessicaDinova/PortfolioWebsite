<script>
  import Sticker from "$lib/components/Sticker.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Description from "$lib/components/Description.svelte";

  import queenDoodle from "$lib/assets/doodles/queen.png";
  import { projects } from "$lib/helpers/projects";
  import { createLink } from "$lib/helpers/pageFunctions";
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
    <a href="#{createLink(project.name)}">
      <div class="relative flex justify-center hover:scale-105 duration-100">
        <Description
          description={project.description.text}
          descriptionImg={project.description.img}
          descriptionStyling={project.description.styling}
          descriptionRotate={project.description.rotation}
        />
        <ProjectCard projectName={project.name} projectImg={project.img} />
        {#each project.doodles as doodle}
          <Sticker stickerImg={doodle.img} stickerStyling={doodle.styling} />
        {/each}
      </div>
    </a>
  {/each}
</div>
