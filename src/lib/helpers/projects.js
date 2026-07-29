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