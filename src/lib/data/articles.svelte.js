import looney1 from "$lib/assets/projectImages/articleImages/looney1.png";
import looney2 from "$lib/assets/projectImages/articleImages/looney2.png";
import looney3 from "$lib/assets/projectImages/articleImages/looney3.png";
import pageBuilder from "$lib/assets/projectImages/articleImages/pageBuilder.png";
import manageMe1 from "$lib/assets/projectImages/articleImages/manageMe1.png";
import manageMe2 from "$lib/assets/projectImages/articleImages/manageMe2.png";
import manageMe3 from "$lib/assets/projectImages/articleImages/manageMe3.png";
import curiousVillage1 from "$lib/assets/projectImages/articleImages/curiousVillage1.png";
import curiousVillage2 from "$lib/assets/projectImages/articleImages/curiousVillage2.png";
import curiousVillage3 from "$lib/assets/projectImages/articleImages/curiousVillage3.png";
import sunLay1 from "$lib/assets/projectImages/articleImages/sunLay1.png";
import sunLay2 from "$lib/assets/projectImages/articleImages/sunLay2.png";
import sunLay3 from "$lib/assets/projectImages/articleImages/sunLay3.png";
import dragon from "$lib/assets/doodles/dragonDoodle.svg";
import robot from "$lib/assets/doodles/robotDoodle.svg";
import cup from "$lib/assets/doodles/cupDoodle.svg";
import controller from "$lib/assets/doodles/controllerDoodle.svg";
import drag from "$lib/assets/doodles/dragDoodle.svg";
import puzzle from "$lib/assets/doodles/puzzleDoodle.svg";
import book from "$lib/assets/doodles/bookDoodle.svg";
import chart from "$lib/assets/doodles/chartDoodle.svg";
import energy from "$lib/assets/doodles/energyDoodle.svg";
import sun from "$lib/assets/doodles/sunDoodle.svg";
import stickerBottom from "$lib/assets/stickers/stickerBottom.svg";
import stickerLeft1 from "$lib/assets/stickers/stickerLeft1.svg";
import stickerLeft2 from "$lib/assets/stickers/stickerLeft2.svg";
import stickerRight1 from "$lib/assets/stickers/stickerRight1.svg";
import stickerRight2 from "$lib/assets/stickers/stickerRight2.svg";
import stickerTop from "$lib/assets/stickers/stickerTop.svg";
import linkedIn from "$lib/assets/doodles/linkedIn.svg";
import gitHub from "$lib/assets/doodles/skills/github.svg";

export const articles = [
  {
    title: "Page Builder",
    text: `During my graduation **internship at Syntess**, I designed and built a 
            custom page builder that lets users **drag, drop, and design** ERP system 
            pages without writing a single line of a JSON page definition file. 
            For the days when even dragging feels like too much, I added an 
            **Anthropic AI** **chatbot** that generates entire page definitions from a single 
            prompt. No more guessing whether that **JSON is valid!** Just describe the 
            page and watch it appear.`,
    darkStyle: true,
    imgConfig: {
      imgLeft: true,
      images: [pageBuilder],
      size: "w-85 md:w-165",  
      stickers: [
        { img: stickerRight1, styling: "", position:"-right-5 -top-7 md:-right-10 md:-top-10" },
        { img: stickerRight2, styling: "", position:"-left-7 -bottom-7 md:-left-10 md:-bottom-10" },
      ],
    },
    doodles: [
      { img: drag, styling: "w-15 md:w-29", position:"-top-10 -right-5 md:-top-16 md:right-8 -rotate-30" },
      { img: puzzle, styling: "w-30 md:w-50", position:"-bottom-5 right-10 md:-bottom-135 lg:-bottom-20 lg:-right-200" },
    ],
    tech: ["Angular", "TypeScript", "JSON", "C#", "Anthropic API", "SCSS"]
  },
  {
    title: "Looney",
    text: `A **school project** that grew into something we were genuinely proud of. 
            A **web app** where users track routines, log emotions, and share their thoughts 
            on an **interactive map**. I created and designed Looney (a mascot), who celebrates 
            finished routines. We pitched the project at a **"Shark Tank"** style school 
            competition and walked away with the **best project!** Did I mention there is 
            also a **robot** connected to the app?`,
    link: "https://github.com/Team-07-Looney/looney-general",
    darkStyle: false,
    imgConfig: {
      imgLeft: false,
      images: [looney1, looney2, looney3],
      size: "h-80 md:h-120",
      stickers: [
        { img: stickerBottom, styling:"", position: "-top-5 md:-top-8" },
        { img: stickerTop, styling:"", position: "-bottom-12 md:-bottom-20" }
      ],
    },
    doodles: [
      { img: robot, styling: "w-15 md:w-29", position:"-left-5 -top-5 lg:-left-152 md:-top-12" },
      { img: dragon, styling: "w-25 md:w-47", position:"-bottom-115 -right-6 lg:-bottom-20 lg:-right-55" },
    ],
    tech: ["SvelteKit", "Tailwind", "JavaScript", "Microservices", "Docker"]
  },
  {
    title: "Curious Village",
    text: `My first **school project** was an **educational game** teaching 
            kids not to share personal info online. We designed and built everything 
            ourselves, from **animations** to **game mechanics**. Players befriend animals 
            and complete quests. But each animal starts asking suspicious questions 
            along the way. Based on the choices, you get a **"hacked"** or **"thanks for playing"** 
            screen. A little scary but effective, the kids loved it so much they voted it 
            the **best project** in class.`,
    link: "https://github.com/HZ-2223/oop-team22",
    darkStyle: false,
    imgConfig: {
      imgLeft: true,
      images: [curiousVillage1, curiousVillage2, curiousVillage3],
      size: "h-60 md:h-90",
      stickers: [
        { img: stickerLeft1, styling:"", position: "-left-7 -top-7 md:-left-11 md:-top-11" },
        { img: stickerLeft2, styling:"", position: "-right-7 -bottom-7 md:-right-11 md:-bottom-11" },
      ],
    },
    doodles: [
      { img: cup, styling: "w-20 md:w-29", position:"-bottom-95 right-0 md:-top-20 lg:-right-32"},
      { img: controller, styling: "w-25 lg:w-36", position:"-bottom-5 right-5 lg:-bottom-12 md:right-36" },
    ],
    tech: ["TypeScript"]
  },
  {
    title: "Manage Me",
    text: `For my **first internship**, I designed and built a **web app** "ManageMe" for an HZ teacher, 
            replacing hand-drawn models with an interactive tool. Users can create, edit, and 
            export two complex **management models**: a DNA Diagnosis Wheel and an Ecosystemic 
            Mind Map (based on a book). The app supports **drag-and-drop**, **undo/redo**, color picker, 
            Dutch and English, and more! The app is **online** and ready to use.`,
    darkStyle: true,
    imgConfig: {
      imgLeft: false,
      images: [manageMe1, manageMe2, manageMe3],
      size: "w-85 md:w-170",
      stickers: [{ img: stickerTop, styling: "", position:"-top-5 md:-top-8" }],
    },
    doodles: [
      { img: chart, styling: "w-15 md:w-29", position:"-top-10 lg:-top-20 md:left-15" },
      { img: book, styling: "w-18 md:w-32", position:"-bottom-5 right-5 md:-bottom-145 lg:-bottom-18 lg:-left-200" },
    ],
    tech: ["SvelteKit", "Tailwind", "JavaScript", "MySQL", "D3.js"]
  },
  {
    title: "SunLay",
    text: `For a **school project** with Delta Power, we created a **3D solar panel optimizer**. Pick your city, 
            drag in your energy profile, and the app figures out the perfect placement, angle, and quantity 
            to **maximize production**. If you've already searched a nearby city, it's smart enough to **reuse that solar data**. 
            The results? A 3D visualization of the building with optimally positioned panels, 
            detailed energy metrics, and a downloadable **PDF report** showing everything from production to grid impact.`,
    link: `https://github.com/ComplexProject/3D-solar-panel-visualization`,
    darkStyle: true,
    imgConfig: {
      imgLeft: true,
      images: [sunLay1, sunLay2, sunLay3],
      size: "w-85 md:w-170",
      stickers: [
        { img: stickerLeft1, styling: "", position:"-right-5 -bottom-7 md:-right-10 md:-bottom-10" },
        { img: stickerLeft2, styling: "", position:"-left-7 -top-7 md:-left-10 md:-top-10" },
      ],
    },
    doodles: [
      { img: sun, styling: "w-20 md:w-29", position:"-top-15 right-5 md:-top-22 lg:-right-185" },
      { img: energy, styling: "w-7 md:w-14", position:"-bottom-80 right-5 md:-bottom-140 lg:-bottom-5 lg:-right-30" },
    ],
    tech: ["React", "TypeScript", "Python", "Blender", "Three.js"]
  }
]

export const aboutMeArticle = {
  text: `An **honours** graduate in software engineering, based in the **Netherlands**, to whom every
          **detail matters** (yes... I am the person who will notice your button is 2px off-center). 
          I am now on a hunt for a **junior** dev role. What I enjoy is creating and designing 
          **websites** and **web apps** while making sure they feel **nice to use** 
          (and I chase it in every project I create). Outside of code, you can find me 
          **working out my brain** with Japanese nonogram, crosswords, sudoku, or any other logical puzzle.`,
  links: [
    { img: gitHub, href: "https://github.com/JessicaDinova"},
    { img: linkedIn, href: "https://www.linkedin.com/in/jessica-diňová-0b182a27a"}
  ]
}
