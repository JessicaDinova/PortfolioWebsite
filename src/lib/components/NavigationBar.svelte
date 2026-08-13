<script>
  import star from "$lib/assets/doodles/star.svg";
  import { scrollToSection } from "$lib/helpers/pageFunctions";
  import { createLink } from "$lib/helpers/pageFunctions";
  import { articles } from "$lib/data/articles.svelte";
  let { showStatus, activeSection, } = $props();

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

    function isDarkSection(sectionId) {
    return sectionStyles[sectionId] === true;
  }

  function isInProjectsContext() {
    return activeSection === "projects" || 
    projectSections.some((section) => section.id === activeSection);
  }
</script>

<nav class="hidden w-full [&>button]:cursor-pointer **:hover:scale-105 **:transition-all **:ease-in-out items-center fixed z-50 text-2xl h-18 justify-between md:flex px-32 pt-6 pb-2 font-light {isDarkSection(activeSection) ? "bg-coal-100 text-white" : "bg-cream-100 text-black"}">
  <button class="{getLinkHighlight("home")}" onclick={() => scrollToSection('home')}>Home</button>
  <button class="{getLinkHighlight("about")}" onclick={() => scrollToSection('about')}>About Me</button>
  <button class="{getLinkHighlight("skills")}" onclick={() => scrollToSection('skills')}>Skills</button>
  <button class="{getLinkHighlight("projects")}" onclick={() => scrollToSection('projects')}>Projects</button>
  <a class="flex flex-row items-center" target="_blank" href="cv/cv.pdf">
    <img class="h-4" src={star} alt="star"/>CV
    <img class="h-4" src={star} alt="star"/>
  </a>
</nav>