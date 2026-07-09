<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import queenDoodle from "$lib/assets/doodles/queen.png";
  import looneyImg from "$lib/assets/projectImages/Looney.png";
  import curiousVillageImg from "$lib/assets/projectImages/Curious Village.png";
  import manageMeImg from "$lib/assets/projectImages/Manage Me.png";
  import pageBuilderImg from "$lib/assets/projectImages/Page Builder.png";

  const projects = [
    {name: "Page Builder", img: pageBuilderImg},
    {name: "Looney", img: looneyImg},
    {name: "Courious Village", img: curiousVillageImg},
    {name: "Manage Me", img: manageMeImg},
  ];
</script>
<div class="w-full h-screen relative overflow-hidden justify-center items-center flex flex-row gap-20">
  <img class="w-[15%] absolute bottom-0 left-0" src="{queenDoodle}" alt="doodle">
  {#each projects as project}
    <ProjectCard projectName={project.name} projectImg={project.img}/>
  {/each}
</div>
