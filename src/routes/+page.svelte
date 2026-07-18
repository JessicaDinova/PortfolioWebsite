<script>
  import { onMount } from "svelte";
  import star from "$lib/assets/stars/star1.png";
  import Home from "$lib/pageCards/Home.svelte";
  import About from "$lib/pageCards/About.svelte";
  import Skills from "$lib/pageCards/Skills.svelte"
  import Projects from "$lib/pageCards/Projects.svelte"
  import Article from "$lib/pageCards/Article.svelte"
  import { articles } from "$lib/helpers/projects";
  import { createLink } from "$lib/helpers/pageFunctions";

  let activeSection = $state('home');
  let darkSections = ["projects", "pageBuilder", "manageMe"]

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

<nav class="w-full items-center fixed z-10 text-2xl justify-between flex px-16 pt-6 pb-2 font-light transition-all duration-500 ease-in-out {darkSections.includes(activeSection) ? "bg-coal-100 text-white" : "bg-cream-100 text-black"}">
  <a class="{activeSection === 'home' ? "highlight" : ""}" href="#home">Home</a>
  <a class="{activeSection === 'about' ? "highlight" : ""}" href="#about">About Me</a>
  <a class="{activeSection === 'skills' ? "highlight" : ""}" href="#skills">Skills</a>
  <a class="{activeSection === 'projects' ? "highlightDark" : ""}" href="#projects">Projects</a>
  <a class="flex flex-row items-center" target="_blank" href="/cv/cv.pdf">
    <img class="h-8" src={star} alt="star"/>CV
    <img class="h-8" src={star} alt="star"/>
  </a>
</nav>

<div class="[&>.dark]:bg-coal-100 scrollbar-thin *:snap-start flex flex-col w-screen h-screen snap-y snap-proximity overflow-y-scroll scroll-smooth">
  <section id="home">
    <Home />
  </section>
  <section id="about">
    <About />
  </section>
  <section id="skills">
    <Skills />
  </section>
  <section class="dark" id="projects">
    <Projects />
  </section>
  {#each articles as article}
    <section class="{article.darkStyle ? "dark" : ""}" id="{createLink(article.title)}">
      <Article articleImg={article.img} articleLink={article.link} articleText={article.text} articleTitle={article.title} articleDark={article.darkStyle}/>
    </section>
  {/each}
</div>
