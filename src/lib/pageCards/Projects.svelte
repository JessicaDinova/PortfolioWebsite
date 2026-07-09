<script>
  import Sticker from "$lib/components/Sticker.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  
  import queenDoodle from "$lib/assets/doodles/queen.png";
  import looneyImg from "$lib/assets/projectImages/looney.png";
  import curiousVillageImg from "$lib/assets/projectImages/curiousVillage.png";
  import manageMeImg from "$lib/assets/projectImages/manageMe.png";
  import pageBuilderImg from "$lib/assets/projectImages/pageBuilder.png";
  import stickerBottom from "$lib/assets/stickers/stickerBottom.png";
  import stickerLeft1 from "$lib/assets/stickers/stickerLeft1.png";
  import stickerLeft2 from "$lib/assets/stickers/stickerLeft2.png";
  import stickerRight1 from "$lib/assets/stickers/stickerRight1.png";
  import stickerRight2 from "$lib/assets/stickers/stickerRight2.png";
  import stickerTop from "$lib/assets/stickers/stickerTop.png";

  const projects = [
    {name: "Page Builder", img: pageBuilderImg, doodles: [{img: stickerTop, offset: "top-[-2rem]"}]},
    {name: "Looney", img: looneyImg, doodles: [{img: stickerLeft1, offset: "left-[-3.5rem] top-[-3.5rem]"}, {img: stickerLeft2, offset: "right-[-3.5rem] bottom-[-3.5rem]"}]},
    {name: "Curious Village", img: curiousVillageImg, doodles: [{img: stickerBottom, offset: "top-[-2rem]"}]},
    {name: "Manage Me", img: manageMeImg, doodles: [{img: stickerRight1, offset: "right-[-3.5rem] top-[-3.5rem]"}, {img: stickerRight2, offset: "left-[-3.5rem] bottom-[-3.5rem]"}]},
  ];

  /**
   * Create a href link for smoothScrolling based on project name
   * @param {string} projectName name of the project
   */
  function createLink(projectName){
    let projectLink = projectName.replace(/\s/g, '');
    projectLink = projectLink[0].toLowerCase() + projectLink.slice(1);
    return projectLink;
  }
</script>

<div class="w-full h-screen relative overflow-hidden justify-center items-center flex flex-row gap-20">
  <img class="w-[15%] absolute bottom-0 left-0" src="{queenDoodle}" alt="doodle">
  {#each projects as project}
  <a href="#{createLink(project.name)}">
    <div class="relative flex justify-center hover:scale-105 duration-100">
      <ProjectCard projectName={project.name} projectImg={project.img}/>
      {#each project.doodles as doodle}
        <Sticker stickerImg={doodle.img} stickerOffset={doodle.offset}/>
      {/each}
    </div>
  </a>
  {/each}
</div>
