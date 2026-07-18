<script>
  import githubImg from "$lib/assets/doodles/github.png";
  let { articleImg, articleLink = "", articleText, articleTitle, articleDark=false} = $props();
</script>

<div class="w-full h-screen relative overflow-hidden justify-center items-center flex flex-row gap-20 {articleDark ? " text-cream-100" : ""}">
<div class="flex flex-col gap-10">  
  <div class="flex flex-row gap-2 items-center">
    <h1 class=" text-3xl uppercase">{articleTitle}</h1>
    {#if articleLink}
    <a href={articleLink}>
      <img class="h-10" src={githubImg} alt="github" />
    </a>
    {/if}
  </div>
  <article>{articleText}</article>
</div>
  <img src={articleImg} alt={articleTitle} />
</div>
