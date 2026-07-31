import looneyFullImg from "$lib/assets/projectImages/looneyFull.png";
import pageBuilderFullImg from "$lib/assets/projectImages/pageBuilderFull.png";
import manageMeFullImg from "$lib/assets/projectImages/manageMeFull.png";
import dragon from "$lib/assets/doodles/dragonDoodle.svg";
import robot from "$lib/assets/doodles/robotDoodle.svg";
import cup from "$lib/assets/doodles/cupDoodle.svg";
import controller from "$lib/assets/doodles/controllerDoodle.svg";
import drag from "$lib/assets/doodles/dragDoodle.svg";
import puzzle from "$lib/assets/doodles/puzzleDoodle.svg";
import book from "$lib/assets/doodles/bookDoodle.svg";
import chart from "$lib/assets/doodles/chartDoodle.svg";
import stickerBottom from "$lib/assets/stickers/stickerBottom.svg";
import stickerLeft1 from "$lib/assets/stickers/stickerLeft1.svg";
import stickerLeft2 from "$lib/assets/stickers/stickerLeft2.svg";
import stickerRight1 from "$lib/assets/stickers/stickerRight1.svg";
import stickerRight2 from "$lib/assets/stickers/stickerRight2.svg";
import stickerTop from "$lib/assets/stickers/stickerTop.svg";
import curiousVillageImg from "$lib/assets/projectImages/curiousVillage.png";
import linkedIn from "$lib/assets/doodles/LinkedIn.svg";
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
      img: pageBuilderFullImg,
      size: "h-100",
      stickers: [
        { img: stickerRight1, styling: "", position:"-right-10 -top-10" },
        { img: stickerRight2, styling: "", position:"-left-10 -bottom-10" },
      ],
    },
    doodles: [
      { img: drag, styling: "w-29", position:"-top-16 right-8 -rotate-30" },
      { img: puzzle, styling: "w-76", position:"-bottom-28 -right-160" },
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
      img: looneyFullImg,
      size: "h-140",
      stickers: [
        { img: stickerBottom, styling:"", position: "-top-8" },
        { img: stickerTop, styling:"", position: "-bottom-20" }
      ],
    },
    doodles: [
      { img: robot, styling: "w-29", position:"-left-152 -top-12" },
      { img: dragon, styling: "w-47", position:"-bottom-32 -right-52" },
    ],
    tech: ["SvelteKit", "Tailwind", "Microservices", "Docker", "TypeScript"]
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
      img: curiousVillageImg,
      size: "h-90",
      stickers: [
        { img: stickerLeft1, styling:"", position: "-left-11 -top-11" },
        { img: stickerLeft2, styling:"", position: "-right-11 -bottom-11" },
      ],
    },
    doodles: [
      { img: cup, styling: "w-29", position:"-top-20 -right-32"},
      { img: controller, styling: "w-36", position:"-bottom-12 right-36" },
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
      img: manageMeFullImg,
      size: "h-100",
      stickers: [{ img: stickerTop, styling: "", position:"-top-8" }],
    },
    doodles: [
      { img: chart, styling: "w-29", position:"-top-16 left-56" },
      { img: book, styling: "w-32 -rotate-30", position:"-bottom-20 -left-36" },
    ],
    tech: ["SvelteKit", "Tailwind", "JavaScript", "MySQL", "D3.js"]
  }
]

export const aboutMeArticle = {
  text: `An **honours** graduate in software engineering, based in the **Netherlands**, to whom every
          **detail matters** (yes... I am the person who will notice your button is 2px off-center). 
          I am now on a hunt for a **junior** dev role. What I enjoy is creating and designing 
          **websites** and **web apps** while making sure they feel **nice to use** 
          (and I chase it in every project I create). Outside of code, you can find me 
          **working out my brain** with Japanese nonograms, crosswords, sudoku, or any other logical puzzle.`,
  links: [
    {img: gitHub, href: "https://github.com/JessicaDinova"},
    {img: linkedIn, href: "https://www.linkedin.com/in/jessica-diňová-0b182a27a"}
  ]
}
