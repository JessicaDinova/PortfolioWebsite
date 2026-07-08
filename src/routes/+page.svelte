<script>
  import cv from "$lib/assets/cv/cv.pdf"
  import star from "$lib/assets/stars/starOne.png";
  import Home from "$lib/components/Home.svelte";
</script>

<nav class="w-full items-center fixed z-10 text-2xl justify-between flex px-16 py-6 font-light bg-cream-100">
  <a href="#home">Home</a>
  <a href="#about">About Me</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a class="flex flex-row items-center" target="_blank" href="{cv}">
    <img class="h-8" src={star} alt="star"/>CV
    <img class="h-8" src={star} alt="star"/>
  </a>
</nav>

<div class=" *:even:bg-coal-100 *:snap-start flex flex-col w-screen h-screen snap-y snap-proximity overflow-y-scroll">
  <div id="home">
    <Home />
  </div>
  <div id="about">
    <Home />
  </div>
  <div id="skills">
    <Home />
  </div>
  <div id="projects">
    <Home />
  </div>
</div>
