<script>
  import githubLight from "$lib/assets/doodles/skills/github.svg";
  import githubDark from "$lib/assets/doodles/skills/githubDark.svg";
  import ImageCarousel from "$lib/components/ImageCarousel.svelte";
  import Sticker from "$lib/components/Sticker.svelte";
  import { highlightText } from "$lib/helpers/pageFunctions";

  let { article } = $props();

  const flexDirection = $derived(article.imgConfig.imgLeft ? "md:flex-row" : "md:flex-row-reverse");
  const justifyDirection = $derived(article.imgConfig.imgLeft ? "md:justify-start" : "md:justify-end");
  const darkModeText = $derived(article.darkStyle ? "text-cream-100" : "");
  const textHighlight = $derived(article.darkStyle? "highlightDark" : "highlight");
  const textSegments = $derived(highlightText(article.text));
  const githubTheme = $derived(article.darkStyle ? githubDark : githubLight);
  const shouldSpan = (text) => text.length > 10;
</script>

<div class="pageShell gap-10 md:gap-32 overflow-hidden axesCenter py-15 px-8 flex flex-col {flexDirection} {darkModeText}">
  <div class="relative w-full md:w-[40%] md:max-w-3xl flex flex-col gap-7">  
    {#each article.doodles as doodle}
      <Sticker sticker={doodle}/>
    {/each}
    <div class="flex flex-row gap-2 justify-center items-center {justifyDirection}">
      <h1 class="text-[2.2rem] uppercase font-hand font-medium text-lavander-100 text-shadow-boldest">{article.title}</h1>
      {#if article.link}
        <a href={article.link} target="_blank">
          <img class="h-10 hover:scale-105 transitional" src={githubTheme} alt="github" />
        </a>
      {/if}
    </div>
    <article class="text-xl md:text-2xl font-light text-justify">
      {#each textSegments as segment}
        {#if segment.highlight}
          <span class="{textHighlight}">{segment.text}</span>
        {:else}
          {segment.text}
        {/if}
      {/each}
    </article>
    <div class="w-full py-2 grid grid-cols-3 gap-2 md:flex md:flex-nowrap md:justify-between md:gap-0">
      {#each article.tech as tech}
        {@const span = shouldSpan(tech) ? 'col-span-2' : 'col-span-1'}
          <div class="border-2 border-lavander-100 bg-lavander-50 p-3 rounded-4xl hover:scale-105 transitional cursor-default md:flex-none {span}">
          <p class="text-center text-sm md:text-base md:whitespace-nowrap wrap-break-word">{tech}</p>
        </div>
      {/each}
    </div>
  </div>
  <div class="flex axesCenter">
    <ImageCarousel imgConfig={article.imgConfig}/>
  </div>
</div>
