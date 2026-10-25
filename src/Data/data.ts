import PoolTable from "../assets/Product_Category/PoolTable.jpg";
import Balls from "../assets/Product_Category/Balls.jpg";
import PoolStick from "../assets/Product_Category/Pool Stick.jpg";
import img1 from "../assets/Carousel_Images/Img1.jpg";
import img2 from "../assets/Carousel_Images/Img2.jpg";
import img3 from "../assets/Carousel_Images/Img3.jpg";
import img4 from "../assets/Carousel_Images/Img4.jpg";
import img5 from "../assets/Carousel_Images/Img5.jpg";
import img6 from "../assets/Carousel_Images/Img6.jpg";
import TimmaBalls from "../assets/Balls/TimaPoolTableBall.jpg";
import JBB from "../assets/Balls/JBB.jpg";
import JBB2 from "../assets/Balls/JBB2.jpg";
import Club from "../assets/Balls/Club_147Snooker.webp";
import IRISS from "../assets/Balls/IRISPOOlTable.webp";
import Cue1 from "../assets/Cues/Master.jpeg";
import Cue2 from "../assets/Cues/Leadsuper Cue.jpeg";
import Cue3 from "../assets/Cues/Leadsuper half joint.jpeg";
import Cue4 from "../assets/Cues/Omin.jpeg";
import CueCase from "../assets/Accessories/CueCase.jpeg";
import CueTip from "../assets/Accessories/CueTip.jpeg";
import Chalk from "../assets/Accessories/ChalkBox.jpeg";
import Gloves from "../assets/Accessories/Gloves.jpeg";
import ChalkHolder from "../assets/Accessories/Chalk Holder.jpeg";
import BilliardCloth from "../assets/Accessories/Billiard Cloth.jpeg";

export const brands = [
  {
    name: "Brand A",
    description: "Leading manufacturer of premium pool tables.",
    logo: "brand_a_logo_url",
  },
  {
    name: "Brand B",
    description: "High-quality billiard accessories and sticks.",
    logo: "brand_b_logo_url",
  },
  {
    name: "Brand C",
    description: "Innovative designs for modern pool tables.",
    logo: "brand_c_logo_url",
  },
];

export const accessories = [
  {
    id: 1,
    name: "Cue Case",
    description: "Premium protective case for your cue.",
    img: CueCase,
    price: 1500,
  },
  {
    id: 2,
    name: "Cue Tip",
    description: "High-quality cue tips for better control.",
    img: CueTip,
    price: 200,
  },
  {
    id: 3,
    name: "Chalk Box",
    description: "12 pcs chalk set for enhanced precision.",
    img: Chalk,
    price: 300,
  },
  {
    id: 4,
    name: "Billiard Gloves",
    description: "Comfortable gloves for smooth cue handling.",
    img: Gloves,
    price: 500,
  },
  {
    id: 5,
    name: "Chalk Holder",
    description: "Keep your chalk handy during the game.",
    img: ChalkHolder,
    price: 250,
  },
  {
    id: 6,
    name: "Billiard Cloth",
    description: "Durable cloth for a smooth playing surface.",
    img: BilliardCloth,
    price: 2000,
  },
];
export const foosballTables = [
  {
    id: 1,
    name: "Deluxe Foosball Table",
    description:
      "A high-quality foosball table with smooth rods and durable players for fast-paced action and long-lasting gameplay.",
    img: "/assets/foosball/deluxe-foosball.jpg",
    price: 12000,
  },
  {
    id: 2,
    name: "Compact Foosball Table",
    description:
      "A compact, lightweight foosball table perfect for small spaces and casual games with friends.",
    img: "/assets/foosball/compact-foosball.jpg",
    price: 8000,
  },
  {
    id: 3,
    name: "Tournament Foosball Table",
    description:
      "Tournament-level foosball table with precision-balanced players, sturdy construction, and a sleek design.",
    img: "/assets/foosball/tournament-foosball.jpg",
    price: 15000,
  },
  {
    id: 4,
    name: "Outdoor Foosball Table",
    description:
      "Weatherproof design for outdoor use, with reinforced materials to withstand the elements.",
    img: "/assets/foosball/outdoor-foosball.jpg",
    price: 17000,
  },
];

export const cueSticks = [
  {
    id: 1,
    name: "Master 3/4 Cue for Snooker",
    description:
      "High-grade maple wood cue stick with an ergonomic grip and smooth finish for precision shots.",
    img: Cue1,
    price: 1100,
  },
  {
    id: 2,
    name: "Leadsuper 3/4 Joint Cue",
    description:
      "An ideal cue stick for new players, featuring a lightweight design and excellent balance for learning.",
    img: Cue2,
    price: 2250,
  },
  {
    id: 3,
    name: "Leadsuper Half Joint Cue 10mm ",
    description:
      "Stand out with this custom-designed cue stick, crafted from premium materials and featuring intricate designs.",
    img: Cue3,
    price: 1200,
  },
  {
    id: 4,
    name: "Omin Gunman Cue Stick",
    description:
      "High-grade maple wood cue stick with an ergonomic grip and smooth finish for precision shots.",
    img: Cue4,
    price: 20000,
  },
];
export const poolTableBalls = [
  {
    id: 1,
    name: "Xinkang",
    description:
      "A complete set of high-quality resin billiard balls with a smooth, durable finish. Ideal for tournament play.",
    img: TimmaBalls,
    price: 5000,
  },
  {
    id: 2,
    name: "Aramith Billiard Balls",
    description:
      "Enhance your game with this glow-in-the-dark set, perfect for playing under low light or for a unique experience.",
    img: JBB,
    price: 10000,
  },
  {
    id: 3,
    name: "American Pool Balls ",
    description:
      "A durable, standard-size billiard ball set for regular play. Built to withstand intense matches.",
    img: JBB2,
    price: 3500,
  },
  {
    id: 4,
    name: "Chinese Premium Balls",
    description:
      "Top-quality resin construction for superior performance. Perfect for professional or serious amateur players.",
    img: Club,
    price: 2500,
  },
  {
    id: 5,
    name: "Hong Tai",
    description:
      "Stylish and unique marble design billiard balls that combine aesthetics with quality playability.",
    img: IRISS,
    price: 1600,
  },
];

export const placeholderProduct = [
  {
    id: 1,
    name: "Premium tables",
    description:
      "Crafted for champions, these tables elevate your game to legendary status!",
    imageSrc: PoolTable,
    imageAlt: "Premium Pool tables",
    path: "/pool-table",
  },
  {
    id: 2,
    name: "Billiard Ball",
    description:
      "Vibrant colors and perfect weight for a flawless game.Get rolling!",
    imageSrc: Balls,
    imageAlt: "OM Billiard",
    path: "/billiard-balls",
  },
  {
    id: 3,
    name: "Cue Sticks",
    description:
      "Precision-engineered cues for the ultimate shot. Unleash your inner champion!",
    imageSrc: PoolStick,
    imageAlt: "OM Billiard",
    path: "/billiard-cue",
  },
];

export const images = [img1, img2, img3, img4, img5, img6];
