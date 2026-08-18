<script>
  import { onMount } from "svelte";
  import NavigationBar from "$lib/components/NavigationBar.svelte";
  import Home from "$lib/pageCards/Home.svelte";
  import About from "$lib/pageCards/About.svelte";
  import Skills from "$lib/pageCards/Skills.svelte"
  import Projects from "$lib/pageCards/Projects.svelte"
  import Article from "$lib/pageCards/Article.svelte"
  import Footer from "$lib/pageCards/Footer.svelte";
  import { articles } from "$lib/data/articles.svelte";
  import { createLink } from "$lib/helpers/pageFunctions";
  import { scrollToSection } from "$lib/helpers/pageFunctions";

  let activeSection = $state('home');
  let observer;

  function setupObserver() {
    observer?.disconnect();
    const isMobile = window.innerWidth < 768;
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
        threshold: isMobile ? 0.4 : 0.7,
      }
    );
    sections.forEach((section) => observer.observe(section));
  }

  onMount(() => {
    setupObserver();
    return () => {
      observer.disconnect();
    }
  });
</script>

<NavigationBar activeSection={activeSection}/>

<div class="[&>.dark]:bg-coal-100 scrollbar-thin *:lg:snap-start flex flex-col md:w-screen h-screen lg:snap-y lg:snap-proximity lg:overflow-y-scroll scroll-smooth">
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
  <section id="footer">
    <Footer/>
  </section>
</div>

