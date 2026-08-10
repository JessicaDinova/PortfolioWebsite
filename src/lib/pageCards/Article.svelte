<script>
  import githubLight from "$lib/assets/doodles/skills/github.svg";
  import githubDark from "$lib/assets/doodles/skills/githubDark.svg";
  import ImageCarousel from "$lib/components/ImageCarousel.svelte";
  import Sticker from "$lib/components/Sticker.svelte";
  import { highlightText } from "$lib/helpers/pageFunctions";

  let { article } = $props();

  const flexDirection = $derived(article.imgConfig.imgLeft ? "flex-row" : "flex-row-reverse");
  const justifyDirection = $derived(article.imgConfig.imgLeft ? "justify-start" : "justify-end");
  const darkModeText = $derived(article.darkStyle ? "text-cream-100" : "");
  const textHighlight = $derived(article.darkStyle? "highlightDark" : "highlight");
  const textSegments = $derived(highlightText(article.text));
  const githubTheme = $derived(article.darkStyle ? githubDark : githubLight);
</script>

<div class="main gap-32 overflow-hidden justify-center px-10 items-center flex {flexDirection} {darkModeText}">
  <div class="relative w-[40%] max-w-3xl flex flex-col gap-7">  
    {#each article.doodles as doodle}
      <Sticker sticker={doodle}/>
    {/each}
    <div class="flex flex-row gap-2 {justifyDirection}">
      <h1 class="text-4xl uppercase font-hand font-medium text-lavander-100 text-shadow-boldest">{article.title}</h1>
      {#if article.link}
        <a href={article.link} target="_blank">
          <img class="h-10 hover:scale-105 transitional" src={githubTheme} alt="github" />
        </a>
      {/if}
    </div>
    <article class="text-2xl font-light text-justify">
      {#each textSegments as segment}
        {#if segment.highlight}
          <span class="{textHighlight}">{segment.text}</span>
        {:else}
          {segment.text}
        {/if}
      {/each}
    </article>
    <div class="w-full justify-between py-2 whitespace-nowrap flex">
      {#each article.tech as tech}
        <div class="border-2 border-lavander-100 whitespace-nowrap bg-lavander-50 p-3 rounded-4xl hover:scale-105 transition ease-in-out cursor-default">
          <p>{tech}</p>
        </div>
      {/each}
    </div>
  </div>
  <div class="flex justify-center items-center">
    <ImageCarousel imgConfig={article.imgConfig}/>
  </div>
</div>
