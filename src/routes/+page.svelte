<script>
  import star from "$lib/assets/stars/starOne.png";
  import Home from "$lib/components/Home.svelte";
</script>

<nav
  class="w-full items-center fixed z-10 text-3xl justify-between flex px-16 py-7 font-light"
>
  <a href="#home">Home</a>
  <a href="#about">About Me</a>
  <a href="#skills">Skills</a>
  <a href="#projects">Projects</a>
  <a class="flex flex-row items-center" href="/">
    <img class="h-8" src={star} alt="star"/>CV
    <img class="h-8" src={star} alt="star"/></a
  >
</nav>

<div class="flex flex-col">
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
