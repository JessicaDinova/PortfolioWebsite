<script>
  import divider from "$lib/assets/doodles/dividerDoodle.svg";
  import queen from "$lib/assets/doodles/queenUp.svg";
  const currentYear = new Date().getFullYear();
</script>
<footer class="w-full h-screen bg-lavander-100 flex flex-col pt-20 pb-10 px-10 text-coal-100 uppercase">
  <div class="*:flex *:flex-col [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:mb-5 [&_a]:text-3xl [&_a]:hover:scale-105 h-3/4 **:transition-all **ease-in-out w-full flex justify-between px-30">
    <div>
      <h1>Check out</h1>
      <a target="_blank" href="https://www.linkedin.com/in/jessica-diňová-0b182a27a">My LinkedIn</a>
      <a target="_blank" href="https://github.com/JessicaDinova">My GitHub</a>
      <a target="_blank" href="cv/cv.pdf">My CV</a>
    </div>
    <div>
      <h1>Let's Connect</h1>
      <a target="_blank" href="mailto:jessicadiov@gmail.com">jessicadiov@gmail.com</a>
      <img src={queen} alt="doodle" class="h-52 mt-15 animate-bounce">
    </div>
  </div>
  <img src={divider} alt="divider">
  <div class="w-full font-black text-center self-end">
    <h1 class="text-[10rem] leading-none">Jessica Dinova</h1>
    <p>Handmade with ❤️ © {currentYear}</p>
  </div>
</footer>