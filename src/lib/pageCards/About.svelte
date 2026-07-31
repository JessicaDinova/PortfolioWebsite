<script>
  import profilePic from "$lib/assets/myself/profilePic.png"
  import { aboutMeArticle } from "$lib/data/articles";
  import { highlightText } from "$lib/helpers/pageFunctions";
  const textSegments = $derived(highlightText(aboutMeArticle.text));
</script>

<div class="main font-light flex flex-row justify-center gap-[10%] items-center">
  <img class="w-112.5 drop-shadow-xl" src="{profilePic}" alt="profilePic">
  <div class="text-2xl text-justify w-[45%] max-w-3xl flex flex-col gap-5">
    <article>
      {#each textSegments as segment}
        {#if segment.highlight}
          <span class="highlight">{segment.text}</span>
        {:else}
          {segment.text}
        {/if}
      {/each}
    </article>
    <div class="flex flex-row-reverse gap-3">
      {#each aboutMeArticle.links as link}
        <a href="{link.href}" target="_blank">
          <img src="{link.img}" class="h-15 hover:scale-105 transitional" alt="doodle">
        </a>
      {/each}
    </div>
  </div>
</div>