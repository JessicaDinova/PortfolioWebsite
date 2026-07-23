import looneyImg from "$lib/assets/projectImages/looney.png";
import curiousVillageImg from "$lib/assets/projectImages/curiousVillage.png";
import manageMeImg from "$lib/assets/projectImages/manageMe.png";
import pageBuilderImg from "$lib/assets/projectImages/pageBuilder.png";
import stickerBottom from "$lib/assets/stickers/stickerBottom.png";
import stickerLeft1 from "$lib/assets/stickers/stickerLeft1.png";
import stickerLeft2 from "$lib/assets/stickers/stickerLeft2.png";
import stickerRight1 from "$lib/assets/stickers/stickerRight1.png";
import stickerRight2 from "$lib/assets/stickers/stickerRight2.png";
import stickerTop from "$lib/assets/stickers/stickerTop.png";
import arrow1 from "$lib/assets/arrows/arrow1.png";
import arrow2 from "$lib/assets/arrows/arrow2.png";
import arrow3 from "$lib/assets/arrows/arrow3.png";
import arrow4 from "$lib/assets/arrows/arrow4.png";
import looneyFullImg from "$lib/assets/projectImages/looneyFull.png";
import pageBuilderFullImg from "$lib/assets/projectImages/pageBuilderFull.png";
import manageMeFullImg from "$lib/assets/projectImages/manageMeFull.png";
import dragon from "$lib/assets/doodles/dragonDoodle.png";
import robot from "$lib/assets/doodles/robotDoodle.png";
import cup from "$lib/assets/doodles/cupDoodle.png";
import controller from "$lib/assets/doodles/controllerDoodle.png";
import drag from "$lib/assets/doodles/dragDoodle.png";
import puzzle from "$lib/assets/doodles/puzzleDoodle.png";
import book from "$lib/assets/doodles/bookDoodle.png";
import chart from "$lib/assets/doodles/chartDoodle.png";

export const projects = [
  {
    name: "Page Builder",
    img: pageBuilderImg,
    doodles: [{ img: stickerTop, styling: "-top-8" }],
    description: {
      img: arrow2,
      styling: "-top-25 -left-10",
      text: "ERP system",
    },
  },
  {
    name: "Looney",
    img: looneyImg,
    doodles: [
      { img: stickerLeft1, styling: "-left-14 -top-14" },
      { img: stickerLeft2, styling: "-right-14 -bottom-14" },
    ],
    description: {
      img: arrow1,
      styling: "flex-row-reverse -bottom-25 left-60",
      text: "Hand drawn",
    },
  },
  {
    name: "Curious Village",
    img: curiousVillageImg,
    doodles: [{ img: stickerBottom, styling: "-top-8" }],
    description: {
      img: arrow4,
      styling: "flex-col gap-10 -right-25 -top-17",
      text: "First game",
      rotation: "rotate-270",
    },
  },
  {
    name: "Manage Me",
    img: manageMeImg,
    doodles: [
      { img: stickerRight1, styling: "-right-14 -top-14" },
      { img: stickerRight2, styling: "-left-14 -bottom-14" },
    ],
    description: {
      img: arrow3,
      styling: "flex-col-reverse gap-10 -bottom-27 -right-25",
      text: "Internship",
      rotation: "rotate-280",
    },
  },
];

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
        { img: stickerRight1, styling: "-right-13 -top-13" },
        { img: stickerRight2, styling: "-left-13 -bottom-13" },
      ],
    },
    doodles: [
      { img: drag, styling: "w-29 -top-16 right-8 -rotate-30" },
      { img: puzzle, styling: "w-76 -bottom-28 -right-160" },
    ],
    tech: ["Angular", "TypeScript", "C#", "Anthropic API", "SCSS"]
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
        { img: stickerBottom, styling: "-top-8" },
        { img: stickerTop, styling: "-bottom-8" }
      ],
    },
    doodles: [
      { img: robot, styling: "w-29 -left-152 -top-12" },
      { img: dragon, styling: "w-47 -bottom-32 -right-52" },
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
        { img: stickerLeft1, styling: "-left-13 -top-14" },
        { img: stickerLeft2, styling: "-right-13 -bottom-14" },
      ],
    },
    doodles: [
      { img: cup, styling: "w-29 -top-20 -right-32" },
      { img: controller, styling: "w-36 -bottom-12 right-36" },
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
      stickers: [{ img: stickerTop, styling: "-top-8" }],
    },
    doodles: [
      { img: chart, styling: "w-29 -top-16 left-56" },
      { img: book, styling: "w-32 -bottom-20 -left-36 -rotate-30" },
    ],
    tech: ["SvelteKit", "Tailwind", "JavaScript", "MySQL", "D3.js"]
  }
]