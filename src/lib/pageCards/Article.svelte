<script>
  import githubImg from "$lib/assets/doodles/github.png";
  let { articleImg={}, articleLink = "", articleText, articleTitle, articleDark=false, articleTech=[]} = $props();

  const flexDirection = $derived(articleImg.imgLeft ? "flex-row" : "flex-row-reverse");
  const justifyDirection = $derived(articleImg.imgLeft ? "justify-start" : "justify-end");
  const textDirection = $derived(articleImg.imgLeft ? "text-left" : "text-right")
</script>

<div class="main relative gap-[10%] overflow-hidden justify-center items-center flex {flexDirection} {articleDark ? " text-cream-100" : ""}">
  <div class="w-[40%] flex flex-col gap-7">  
    <div class="flex flex-row gap-2 {justifyDirection}">
      <h1 class="text-4xl uppercase font-hand font-medium text-lavander-100 text-shadow-boldest">{articleTitle}</h1>
      {#if articleLink}
        <a href={articleLink}>
          <img class="h-10" src={githubImg} alt="github" />
        </a>
      {/if}
    </div>
    <article class="text-2xl font-light {textDirection}">{articleText}</article>
    <div class="w-full justify-between flex">
      {#each articleTech as tech}
        <div class="border-2 border-lavander-100 p-3 rounded-3xl hover:scale-105 transition ease-in-out cursor-default">
          <p>{tech}</p>
        </div>
      {/each}
    </div>
  </div>
  <div class="h-[80%] flex justify-center items-center">
    <img class="{articleImg.size}"  src={articleImg.img} alt={articleTitle} />
  </div>
</div>
