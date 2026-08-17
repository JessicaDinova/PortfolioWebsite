<script>
  import divider from "$lib/assets/doodles/dividerDoodle.svg";
  import queen from "$lib/assets/doodles/queenUp.svg";
  const currentYear = new Date().getFullYear();
</script>
<footer class="w-full h-screen bg-lavander-100 flex flex-col gap-10 md:gap-0 pt-20 pb-10 px-10 text-coal-100 uppercase">
  <div class="*:flex *:flex-col h-3/4 w-full flex flex-col gap-10 md:gap-0 md:flex-row md:justify-between md:px-30">
    <div>
      <h1 class="text-3xl md:text-5xl font-bold mb-2 md:mb-5">Check out</h1>
      <a class="text-xl md:text-3xl hover:scale-105 transitional" target="_blank" href="https://www.linkedin.com/in/jessica-diňová-0b182a27a">My LinkedIn</a>
      <a class="text-xl md:text-3xl hover:scale-105 transitional" target="_blank" href="https://github.com/JessicaDinova">My GitHub</a>
      <a class="text-xl md:text-3xl hover:scale-105 transitional" target="_blank" href="cv/cv.pdf">My CV</a>
    </div>
    <div>
      <h1 class="text-3xl md:text-5xl font-bold mb-2 md:mb-5">Let's Connect</h1>
      <a class="text-xl md:text-3xl hover:scale-105 transitional" target="_blank" href="mailto:jessicadiov@gmail.com">jessicadiov@gmail.com</a>
      <img src={queen} alt="doodle" class="h-30 mt-5 md:h-52 md:mt-15 md:animate-bounce">
    </div>
  </div>
  <img src={divider} alt="divider">
  <div class="w-full font-black text-center self-end">
    <h1 class="text-7xl lg:text-[10rem] leading-none mb-5 ">Jessica Dinova</h1>
    <p>Handmade with ❤️ © {currentYear}</p>
  </div>
</footer>