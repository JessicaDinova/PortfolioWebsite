<script>
  let {projectImg, projectName, projectRotation = "0"} = $props();
</script>

  <div class="w-64 h-72 p-3 flex flex-col bg-cream-100 hover:cursor-pointer shadow-2xl">
    <div class="w-full h-7/10">
      <img class="w-full h-full object-cover block" src="{projectImg}" alt="project">
    </div>
    <div class="w-full h-3/10 content-center text-center">
      <p class="font-hand font-medium text-3xl">{projectName}</p>
    </div>
  </div>
