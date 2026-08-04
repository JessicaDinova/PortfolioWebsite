import looneyImg from "$lib/assets/projectImages/looney.png";
import curiousVillageImg from "$lib/assets/projectImages/curiousVillage.png";
import manageMeImg from "$lib/assets/projectImages/manageMe.png";
import pageBuilderImg from "$lib/assets/projectImages/pageBuilder.png";
import stickerBottom from "$lib/assets/stickers/stickerBottom.svg";
import solarPanelImg from "$lib/assets/projectImages/solarPanel.png";
import stickerLeft1 from "$lib/assets/stickers/stickerLeft1.svg";
import stickerLeft2 from "$lib/assets/stickers/stickerLeft2.svg";
import stickerRight1 from "$lib/assets/stickers/stickerRight1.svg";
import stickerRight2 from "$lib/assets/stickers/stickerRight2.svg";
import stickerTop from "$lib/assets/stickers/stickerTop.svg";
import arrow1 from "$lib/assets/arrows/arrow1.svg";
import arrow2 from "$lib/assets/arrows/arrow2.svg";
import arrow3 from "$lib/assets/arrows/arrow3.svg";
import arrow4 from "$lib/assets/arrows/arrow4.svg";

export const projects = [
  {
    name: "Page Builder",
    img: pageBuilderImg,
    stickers: [{ img: stickerTop, styling: "", position:"-top-8" }],
    description: {
      img: arrow2,
      styling: "-top-25 -left-10",
      text: "ERP system",
    },
  },
  {
    name: "Looney",
    img: looneyImg,
    stickers: [
      { img: stickerLeft1, styling: "", position:"-left-10 -top-10" },
      { img: stickerLeft2, styling: "", position:"-right-10 -bottom-10" },
    ],
    description: {
      img: arrow1,
      styling: "flex-row-reverse -bottom-25 left-50",
      text: "Hand drawn",
    },
  },
  {
    name: "Curious Village",
    img: curiousVillageImg,
    stickers: [{ img: stickerBottom, styling: "", position:"-top-8" }],
    description: {
      img: arrow4,
      styling: "flex-col gap-10 -right-24 -top-17",
      text: "First game",
      rotation: "rotate-270",
    },
  },
  {
    name: "Manage Me",
    img: manageMeImg,
    stickers: [
      { img: stickerRight1, styling: "", position:"-right-10 -top-10" },
      { img: stickerRight2, styling: "", position:"-left-10 -bottom-10" },
    ],
    description: {
      img: arrow3,
      styling: "flex-col-reverse gap-10 -bottom-27 -right-20",
      text: "Internship",
      rotation: "rotate-280",
    },
  },
  {
    name: "Sun-Lay",
    img: solarPanelImg,
    stickers: [{ img: stickerBottom, styling: "", position:"-top-8" }],
    description: {
      img: arrow1,
      styling: "-top-25 right-40",
      text: "Cost cut",
      rotation: "rotate-180",
    },
  }
];