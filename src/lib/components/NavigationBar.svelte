<script>
  import star from "$lib/assets/doodles/star.svg";
  import close from "$lib/assets/doodles/close.svg";
  import open from "$lib/assets/doodles/burgerMenu.svg";
  import { scrollToSection } from "$lib/helpers/pageFunctions";
  import { createLink } from "$lib/helpers/pageFunctions";
  import { articles } from "$lib/data/articles.svelte";
  import { fade } from "svelte/transition";
  
  let { activeSection } = $props();
  let isOpen = $state(false);

  const navLinks = [
    {id: 'home', label: 'Home'},
    {id: 'about', label: 'About Me'},
    {id: 'skills', label: 'Skills'},
    {id: 'projects', label: 'Projects'},
  ]

  const sectionStyles = {
    home: false,
    about: false,
    skills: false,
    projects: true,
  }

  const projectSections = articles.map((article) => ({
    id: createLink(article.title),
    dark: Boolean(article.darkStyle),
  }));

  projectSections.forEach((section) => {
    sectionStyles[section.id] = section.dark;
  });

  function isLinkActive(sectionId) {
    if (sectionId === "projects") {
      return isInProjectsContext();
    }
    return activeSection === sectionId;
  }

  function getLinkHighlight(sectionId, isBurger = false) {
    if (!isLinkActive(sectionId)) return "";
    if (isBurger) return "highlight";
    
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

  function handleNavClick(sectionId, isMobile = false) {
    if (isMobile && sectionId==='projects') {
      scrollToSection('pageBuilder')
    } else {
      scrollToSection(sectionId);
    }
    if (isMobile) isOpen = false;
  }

  $effect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  });
</script>

{#snippet cvLink()}
  <a class="flex flex-row items-center gap-x-1" target="_blank" href="cv/cv.pdf">
    <img class="h-4" src={star} alt="star"/>CV
    <img class="h-4" src={star} alt="star"/>
  </a>
{/snippet}

<nav class="hidden {activeSection === "footer" ? "hidden" : "md:flex"} w-full fixed z-50 text-2xl h-18 items-center justify-between px-32 pt-6 pb-2 font-light transitional duration-300  {isDarkSection(activeSection) ? "bg-coal-100 text-white" : "bg-cream-100 text-black"}">
  {#each navLinks as link}
    <button class="{getLinkHighlight(link.id)} cursor-pointer hover:scale-105 transitional" onclick={() => handleNavClick(link.id)}>
      {link.label}
    </button>
  {/each}
  {@render cvLink()}
</nav>

<div class="md:hidden">
  <button 
    class="{isOpen ? 'rounded-xl right-3' : "rounded-l-xl right-0"} hover:scale-105 transitional cursor-pointer shadow-lg fixed top-6 z-50 duration-300 {activeSection === "footer" ? "bg-coal-100" : "bg-lavander-100"} p-2 flex justify-center" 
    onclick={() => isOpen = !isOpen} 
    aria-label="toggle nav menu">
    <img class="size-10" src="{isOpen ? close : open}" alt="toggle"/>
  </button>

  {#if isOpen}
    <div class="fixed inset-0 h-full w-screen z-40 flex flex-col gap-8 px-20 axesCenter shadow-xl bg-cream-100 font-light text-2xl" 
      transition:fade={{duration: 200}}>
      {#each navLinks as link}
        <button class="{getLinkHighlight(link.id, true)} w-full text-center cursor-pointer hover:scale-105 transitional" onclick={() => handleNavClick(link.id, true)}>
          {link.label}
        </button>
      {/each}
      {@render cvLink()}
    </div>
  {/if}
</div>
