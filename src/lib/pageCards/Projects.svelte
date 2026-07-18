<script>
  import Sticker from "$lib/components/Sticker.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Description from "$lib/components/Description.svelte";

  import queenDoodle from "$lib/assets/doodles/queen.png";
  import { projects } from "$lib/helpers/projects";

  /**
   * Create a href link for smoothScrolling based on project name
   * @param {string} projectName name of the project
   */
  function createLink(projectName) {
    let projectLink = projectName.replace(/\s/g, "");
    projectLink = projectLink[0].toLowerCase() + projectLink.slice(1);
    return projectLink;
  }
</script>

<div
  class="w-full h-screen relative overflow-hidden justify-center items-center flex flex-row gap-20"
>
  <img
    class="w-[15%] absolute bottom-0 left-0"
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
