<script>
  import { onMount, tick } from "svelte";
  import NavigationBar from "$lib/components/NavigationBar.svelte";
  import Home from "$lib/pageCards/Home.svelte";
  import About from "$lib/pageCards/About.svelte";
  import Skills from "$lib/pageCards/Skills.svelte"
  import Projects from "$lib/pageCards/Projects.svelte"
  import Article from "$lib/pageCards/Article.svelte"
  import Status from "$lib/pageCards/Status.svelte";
  import { articles } from "$lib/data/articles.svelte";
  import { createLink } from "$lib/helpers/pageFunctions";
  import { scrollToSection } from "$lib/helpers/pageFunctions";

  let activeSection = $state('home');
  let showStatus = $state(false);
  let observer;
  // const minWidth = 1024;
  // const minHeight = 570;

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

  // function updateSize() {
  //   showStatus = 
  //     window.innerWidth <= minWidth ||
  //     window.innerHeight <= minHeight;
  // }

  function setupObserver() {
    observer?.disconnect();
    const sections = document.querySelectorAll('section[id]');
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
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
    // updateSize();
    // window.addEventListener('resize', updateSize);
    // if (!showStatus) tick().then(setupObserver);
    setupObserver();
    return () => {
      observer.disconnect();
      // window.removeEventListener('resize', updateSize);
    }
  });
</script>

<NavigationBar showStatus={showStatus} activeSection={activeSection}/>

<div class="{showStatus ? "hidden" : ""} [&>.dark]:bg-coal-100 scrollbar-thin *:md:snap-start flex flex-col w-screen h-screen md:snap-y md:snap-proximity md:overflow-y-scroll scroll-smooth">
  <section id="home">
    <Home />
  </section>
  <section id="about">
    <About />
  </section>
  <section id="skills">
    <Skills />
  </section>
  <section class="hidden md:flex dark" id="projects">
    <Projects {scrollToSection}/>
  </section>
  {#each articles as article}
    <section class="{article.darkStyle ? "dark" : ""}" id="{createLink(article.title)}">
      <Article article={article}/>
    </section>
  {/each}
</div>

<!-- {#if showStatus}
  <div class="h-screen w-full">
    <Status />
  </div>
{/if} -->
