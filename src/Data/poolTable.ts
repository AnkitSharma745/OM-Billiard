import PremiumPoolTable from "../assets/Products/Premium Pool Table.jpg";
import PremiumPoolTable1 from "../assets/Products/Premium Pool Table.jpg";
import AmericanPoolTable from "../assets/Products/AmericanPoolTable.jpg";
import AmericanPoolTable1 from "../assets/Products/AmericanPoolTable1.jpg";
import AmericanPoolTable2 from "../assets/Products/AmericanPoolTable2.jpg";
import AmericanPoolTable3 from "../assets/Products/AmericanPoolTable3.jpg";
import RoyalePoolTable from "../assets/Products/Royale_Pool_Table.webp";
import ClubPoolTable from "../assets/Products/ClubPoolTable.webp";
import Tennis from "../assets/Products/TableTenniscumPoolTable.webp";
import SnookerPoolTable from "../assets/Products/Snooker(12x6).webp";

const PoolTableData = [
  {
    id: 1,
    category: "Pool Table",
    name: "Premium Pool Table",
    description:
      "A timeless design with durable hardwood construction for optimal play. Built to last, offering a premium gaming experience.",
    img: PremiumPoolTable,
    details: {
      title: "Premium Pool Table",
      images: [
        { original: PremiumPoolTable1.src, thumbnail: PremiumPoolTable1.src },
        { original: PremiumPoolTable1.src, thumbnail: PremiumPoolTable1.src },
        { original: PremiumPoolTable1.src, thumbnail: PremiumPoolTable1.src },
      ],
      size: ["8ft x 4ft"],
      price: {
        current: 49999,
        original: 80000,
      },
      discount: 30000,
      information: [
        "Size - L 12 Ft x W 6 Ft",
        "Room Size - L 22 Ft x W 16 Ft",
        "Best Quality Authentic Stone Slates Bed",
        "Solid Hard Wood Body with Star Design Legs in Melamine Finish",
        "Imported Standard Quality Cloth",
        "High Quality Rubber Cushions with Laminated Top",
        "Tournament Quality Imported Inner Leather Pockets",
        "1 Imported Standard Snooker Ball Set",
        "4 Premium Imported Ashwood Snooker Cues",
        "1 Long Rest with Spider",
        "1 Short Rest with Cross",
        "1 Long Cue",
        "1 Triangle",
        "1 Table Brush",
        "1 4 pc Standard Dome Light Set",
        "1 Cue Stand",
        "12 Pc Chalk Set",
        "12 Pcs Cue Tip Set",
        "1 Scoreboard",
        "6 Pcs Level Adjusters",
        "1 Table Dust Cover",
      ],
    },
  },
  {
    id: 2,
    category: "Pool Table",
    name: "American Pool Table",
    description:
      "Sleek and stylish, the Modern Pool Table brings a contemporary touch to your game room. A perfect balance of style and function.",
    img: AmericanPoolTable,
    details: {
      id: 1,
      title: "American Pool Table",
      images: [
        {
          original: AmericanPoolTable.src,
          thumbnail: AmericanPoolTable.src,
        },
        {
          original: AmericanPoolTable2.src,
          thumbnail: AmericanPoolTable2.src,
        },
        {
          original: AmericanPoolTable3.src,
          thumbnail: AmericanPoolTable3.src,
        },
        {
          original: AmericanPoolTable1.src,
          thumbnail: AmericanPoolTable1.src,
        },
      ],
      size: ["4ft x 8ft"],
      price: {
        current: "1.5 lakhs",
        original: 170000,
      },
      discount: 20000,
      information: [
        "Size - L 4 Ft x W 8 Ft",

        "Best Quality Authentic Stone Slates",
        "High Quality Automatic Ball return system with single point ball collection box",
        "High Quality Imported K55 Melin Rubber Cushion",
        "1 Premium Imported 2 1/4 ounce Pool Ball Set",
        "4 Premium Imported Pool Cues",
        "1 Pool Triangle",
        "1 Table Brush",
        "1 Cue Stand",
        "1 Imported 3 Pc Rod Dome Light Set",
        "12 Pc Chalk Set",
        "12 Pcs Cue Tip Set",
        "1 Pool Table Dust Cover",
      ],
    },
  },
  {
    id: 3,
    category: "Pool Table",
    name: "Royale Pool Table",
    description:
      "The epitome of luxury, this pool table combines craftsmanship with elegant design. Enjoy top-tier playability and aesthetics.",
    img: RoyalePoolTable,
    details: {
      title: "Royale Pool Table",
      images: [
        {
          original: RoyalePoolTable.src,
          thumbnail: RoyalePoolTable.src,
        },
        {
          original: RoyalePoolTable.src,
          thumbnail: RoyalePoolTable.src,
        },
        {
          original: RoyalePoolTable.src,
          thumbnail: RoyalePoolTable.src,
        },
      ],
      size: ["8ft x 4ft"],
      price: {
        current: "1.5 Lakhs",
        original: "1.6 Lakhs",
      },
      discount: 10000,
      information: [
        "Size - L 8 Ft x W 4 Ft",
        "Room Size - L 18 Ft x W 14 Ft",
        "Best Quality Authentic Stone Slates",
        "Solid Hard Wood Body with Premium V Design Legs",
        "Premium Duco with PU Polish finish completed with a coat of Lacquer in colour of choice",
        "Imported Premium American Style Pockets",
        "Latest Open Channel Ball Collection System",
        "High Quality Imported K55 Melin Rubber Cushion",
        "Professional Quality Imported Top Grade Speed Cloth (Red/Blue/Green/Black/Beige options available)",
        "1 Premium Imported 2 1/4 ounce Pool Ball Set",
        "4 Premium Imported Pool Cues",
        "1 Pool Triangle",
        "1 Table Brush",
        "1 Cue Stand",
        "1 Imported 3 Pc Rod Dome Light Set",
        "12 Pc Chalk Set",
        "12 Pcs Cue Tip Set",
        "1 Pool Table Dust Cover",
      ],
    },
  },
  {
    id: 4,
    category: "Pool Table",
    name: "Club Pool Table",
    description:
      "This pool table withstands all elements without compromising on quality. Play anywhere, anytime.",
    img: ClubPoolTable,
    details: {
      title: "Club Pool Table",
      images: [
        {
          original: ClubPoolTable.src,
          thumbnail: ClubPoolTable.src,
        },
        {
          original: ClubPoolTable.src,
          thumbnail: ClubPoolTable.src,
        },
      ],
      size: ["8ft x 4ft"],
      price: {
        current: 72000,
        original: 80000,
      },
      discount: 8000,
      information: [
        "Size - L 12 Ft x W 6 Ft",
        "Room Size - L 22 Ft x W 16 Ft",
        "Best Quality Authentic Stone Slates Bed",
        "Solid Hard Wood Body with Star Design Legs in Melamine Finish",
        "Imported Standard Quality Cloth",
        "High Quality Rubber Cushions with Laminated Top",
        "Tournament Quality Imported Inner Leather Pockets",
        "1 Imported Standard Snooker Ball Set",
        "4 Premium Imported Ashwood Snooker Cues",
        "1 Long Rest with Spider",
        "1 Short Rest with Cross",
        "1 Long Cue",
        "1 Triangle",
        "1 Table Brush",
        "1 4 pc Standard Dome Light Set",
        "1 Cue Stand",
        "12 Pc Chalk Set",
        "12 Pcs Cue Tip Set",
        "1 Scoreboard",
        "6 Pcs Level Adjusters",
        "1 Table Dust Cover",
      ],
    },
  },
  {
    id: 5,
    category: "Pool Table",
    name: "Snooker Pool Table",
    description:
      "This is our standard English Snooker table, crafted with best quality seasoned wood. The table is an excellent choice for all the players looking for high quality games.",
    img: SnookerPoolTable,
    details: {
      title: "Snooker Pool Table",
      images: [
        {
          original: SnookerPoolTable.src,
          thumbnail: SnookerPoolTable.src,
        },
        {
          original: SnookerPoolTable.src,
          thumbnail: SnookerPoolTable.src,
        },
      ],
      size: ["12ft x 6ft"],
      price: {
        current: "1.2 Lakhs",
        original: "1.3 Lakhs",
      },
      discount: 10000,
      information: [
        "Size - L 8 Ft x W 4 Ft",
        "Room Size - L 18 Ft x W 14 Ft",
        "Best Quality Authentic Stone Slates Bed",
        "Solid Hard Wood Body with Premium Designer Legs in Melamine Finish",
        "Standard Quality Imported British Style Cloth",
        "Premium Quality Rubber Cushions with Laminated Top",
        "Tournament Quality Imported Leather Inner Pocket Set",
        "1 Imported Pool Ball Set",
        "4 Imported Ashwood Pool Cues",
        "1 Pool Triangle",
        "1 Table Brush",
        "1 3 Pc Imported Premium 3 pc Dome Light Set",
        "1 Cue Stand",
        "12 Pc Chalk Set",
        "12 Pcs Cue Tip Set",
        "6 Pc Level Adjusters",
        "1 Pool Table Dust Cover",
      ],
    },
  },
  {
    id: 6,
    category: "Pool Table",
    name: "Premium Table Tennis",
    description:
      "The premium table tennis , one of the signature 3 in 1 Pool table offerings and it comes with sleek wooden finish ",
    img: Tennis,
    details: {
      title: "Snooker Pool Table",
      images: [
        {
          original: Tennis.src,
          thumbnail: Tennis.src,
        },
        {
          original: Tennis.src,
          thumbnail: Tennis.src,
        },
      ],
      size: ["8ft x 4ft"],
      price: {
        current: "17999",
        original: "21000",
      },
      discount: 10000,
      information: [
        "Size - L 8 Ft x W 4 Ft",
        "Room Size - L 18 Ft x W 14 Ft",
        "Best Quality Authentic Stone Slates Bed",
        "Solid Hard Wood Body with Designer Legs in Melamine Finish",
        "Standard Quality Imported Cloth",
        "Premium Quality Rubber Cushions with Laminated Top",
        "Tournament Quality Imported Leather Inner Pocket Set",
        "1 Imported Pool Ball Set",
        "4 Imported Premium Ashwood Pool Cues",
        "1 Pool Triangle",
        "1 Table Brush",
        "1 Premium Imported 3 pc Dome Light Set",
        "1 Cue Stand",
        "12 Pc Chalk Set",
        "12 Pcs Cue Tip Set",
        "6 Pcs Level Adjusters",
        "1 Pool Table Dust Cover",
        "1 Table Tennis cum Dining Wooden Laminated Top",
        "1 TT Net with Post and Clamp",
        "2 TT Tennis Racquets",
        "3 TT Balls",
        "Poker Top can be added at additional cost",
      ],
    },
  },
];

export default PoolTableData;
