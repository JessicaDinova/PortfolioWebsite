<script>
  import { onMount, tick } from "svelte";
  import star from "$lib/assets/doodles/star.svg";
  import Home from "$lib/pageCards/Home.svelte";
  import About from "$lib/pageCards/About.svelte";
  import Skills from "$lib/pageCards/Skills.svelte"
  import Projects from "$lib/pageCards/Projects.svelte"
  import Article from "$lib/pageCards/Article.svelte"
  import Status from "$lib/pageCards/Status.svelte";
  import { articles } from "$lib/data/articles";
  import { createLink } from "$lib/helpers/pageFunctions";

  let activeSection = $state('home');
  let showStatus = $state(false);
  let observer;
  const minWidth = 1024;
  const minHeight = 570;

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  $effect(() => {
    if (!showStatus) {
      let cancelled = false;
      const run = async () => {
        await tick();
        if (!cancelled) setupObserver();
      };
      run();
      return () => { cancelled = true; };
    }
    observer?.disconnect();
  });
  
  const projectSections = articles.map((article) => ({
    id: createLink(article.title),
    dark: Boolean(article.darkStyle),
  }));

  const sectionStyles = {
    home: false,
    about: false,
    skills: false,
    projects: true,
  }

  projectSections.forEach((section) => {
    sectionStyles[section.id] = section.dark;
  });

  function isDarkSection(sectionId) {
    return sectionStyles[sectionId] === true;
  }

  function isInProjectsContext() {
    return activeSection === "projects" || 
    projectSections.some((section) => section.id === activeSection);
  }

  function isLinkActive(sectionId) {
    if (sectionId === "projects") {
      return isInProjectsContext();
    }
    return activeSection === sectionId;
  }

  function getLinkHighlight(sectionId) {
    if (!isLinkActive(sectionId)) return "";
    
    const isDark = isDarkSection(activeSection);
    return isDark ? "highlightDark" : "highlight";
  }

  function updateSize() {
    showStatus = 
      window.innerWidth <= minWidth ||
      window.innerHeight <= minHeight;
  }

  function setupObserver() {
    observer?.disconnect();
    const sections = document.querySelectorAll('section[id]');
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
            console.log(window.innerHeight, window.innerWidth);
          }
        });
      },
      {
        threshold: 0.7,
      }
    );
    sections.forEach((section) => observer.observe(section));
  }

  onMount(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    if (!showStatus) tick().then(setupObserver);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateSize);
    }
  });
</script>

<nav class="w-full {showStatus ? "hidden" : ""} [&>button]:cursor-pointer **:hover:scale-105 **:transition-all **:ease-in-out items-center fixed z-50 text-2xl h-18 justify-between flex px-16 pt-6 pb-2 font-light {isDarkSection(activeSection) ? "bg-coal-100 text-white" : "bg-cream-100 text-black"}">
  <button class="{getLinkHighlight("home")}" onclick={() => scrollToSection('home')}>Home</button>
  <button class="{getLinkHighlight("about")}" onclick={() => scrollToSection('about')}>About Me</button>
  <button class="{getLinkHighlight("skills")}" onclick={() => scrollToSection('skills')}>Skills</button>
  <button class="{getLinkHighlight("projects")}" onclick={() => scrollToSection('projects')}>Projects</button>
  <a class="flex flex-row items-center" target="_blank" href="cv/cv.pdf">
    <img class="h-4" src={star} alt="star"/>CV
    <img class="h-4" src={star} alt="star"/>
  </a>
</nav>

<div class="{showStatus ? "hidden" : ""} [&>.dark]:bg-coal-100 scrollbar-thin *:snap-start flex flex-col w-screen h-screen snap-y snap-proximity overflow-y-scroll scroll-smooth">
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
    <Projects {scrollToSection}/>
  </section>
  {#each articles as article}
    <section class="{article.darkStyle ? "dark" : ""}" id="{createLink(article.title)}">
      <Article article={article}/>
    </section>
  {/each}
</div>

{#if showStatus}
  <div class="h-screen w-full">
    <Status />
  </div>
{/if}
