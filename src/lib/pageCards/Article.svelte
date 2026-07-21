<script>
  import githubImg from "$lib/assets/doodles/github.png";
  import Sticker from "$lib/components/Sticker.svelte";
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
    <article class="text-2xl font-light text-justify">{@html articleText}</article>
    <div class="w-full justify-between flex">
      {#each articleTech as tech}
        <div class="border-2 border-lavander-100 bg-lavander-50 p-3 rounded-4xl hover:scale-105 transition ease-in-out cursor-default">
          <p>{tech}</p>
        </div>
      {/each}
    </div>
  </div>
  <div class="relative flex justify-center items-center">
    {#each articleImg.doodles as doodle}
      <Sticker stickerStyling={doodle.styling} stickerImg={doodle.img}/>
    {/each}
    <img class="{articleImg.size} shadow-xl"  src={articleImg.img} alt={articleTitle} />
  </div>
</div>
