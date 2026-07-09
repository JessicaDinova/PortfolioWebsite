<script>
  import { onMount } from "svelte";
  import star from "$lib/assets/stars/star1.png";
  import Home from "$lib/pageCards/Home.svelte";
  import About from "$lib/pageCards/About.svelte";
  import Skills from "$lib/pageCards/Skills.svelte"
  import Projects from "$lib/pageCards/Projects.svelte"

  let activeSection = $state('home');
  let darkSections = ["Projects", "PageBuilder", "ManageMe"]

  onMount(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }});
      },
      {
        threshold: 0.7,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  });
</script>

<nav class="w-full items-center fixed z-10 text-2xl justify-between flex px-16 pt-6 pb-2 font-light bg-cream-100 {``}">
  <a class="{activeSection === 'home' ? "highlight" : ""}" href="#home">Home</a>
  <a class="{activeSection === 'about' ? "highlight" : ""}" href="#about">About Me</a>
  <a class="{activeSection === 'skills' ? "highlight" : ""}" href="#skills">Skills</a>
  <a class="{activeSection === 'projects' ? "highlightDark" : ""}" href="#projects">Projects</a>
  <a class="flex flex-row items-center" target="_blank" href="/cv/cv.pdf">
    <img class="h-8" src={star} alt="star"/>CV
    <img class="h-8" src={star} alt="star"/>
  </a>
</nav>

<div class="[&>.dark]:bg-coal-100 *:snap-start flex flex-col w-screen h-screen snap-y snap-proximity overflow-y-scroll scroll-smooth">
  <section class="snap-start" id="home">
    <Home />
  </section>
  <section class="snap-start" id="about">
    <About />
  </section>
  <section class="snap-start" id="skills">
    <Skills />
  </section>
  <section class="dark snap-start" id="projects">
    <Projects />
  </section>
</div>
