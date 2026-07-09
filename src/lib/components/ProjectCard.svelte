<script>
  let {projectImg, projectName, projectRotation = "0"} = $props();
  let projectLink = projectName.replace(/\s/g, '')
  projectLink = projectLink[0].toLowerCase() + projectLink.slice(1);
  // $inspect(projectName, projectLink);
</script>

<!-- <div class="{`rotate-${projectRotation}`} w-64 h-72 px-5 object-cover flex flex-col gap-5 justify-center items-center rounded-md bg-cream-100 hover:cursor-pointer hover:scale-105 text-center duration-100">
  <a href="#{projectLink}"><img src="{projectImg}" alt="project"></a>
  <p class="font-hand text-2xl">{projectName}</p>
</div> -->

<div class="w-64 h-72 px-5 flex flex-col gap-5 justify-center items-center bg-cream-100 hover:cursor-pointer hover:scale-105 text-center duration-100">
  <div class="w-full h-[70%]">
    <a href="#{projectLink}">
      <img class="w-full h-full object-cover block" src="{projectImg}" alt="project">
    </a>
  </div>
    <p class="font-hand font-medium text-2xl">{projectName}</p>
</div>