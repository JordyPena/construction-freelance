import TwentyFour from "../Kit-images/24.png";
import TwentyFourBp from "../Kit-images/24-blueprint.jpeg";


import Thirty from "../Kit-images/30.png";
import ThirtyBp from "../Kit-images/30-blueprint.jpeg";


import ThirtySix from "../Kit-images/36.png";
import ThirtySixBp from "../Kit-images/36-blueprint.png";


import Fourty from "../Kit-images/40.png";
import FourtyBp from "../Kit-images/40-blueprint.png";


import Fifty from "../Kit-images/50.jpeg";
import FiftyBp from "../Kit-images/50-blueprint.jpeg";


import Sixty from "../Kit-images/60.png";
import SixtyBp from "../Kit-images/60-blueprint.png";


const data = [
  {
    image: TwentyFour,
    Blueprint: TwentyFourBp,
    Title: `24' x 36' x 12'`,
    KitPrice: `$19,900.00`,
    Description: `Engineered Building`,
    Materials: [
      { material: "Painted Steel" },
      { material: "1 - Entry Door" },
      { material: `1 - 10' x 10' Framed Door Opening` },
      { material: `1 - 4' x 3' Slider Window` },
      { material: "Flat Girts" },
      { material: "Trusses" },
      { material: "Premium Trim Package" },
    ],
    labors: [
      { labor: `Erection of all features listed above` },
      { labor: `Layout of building` },
      { labor: `Drilling of holes` },
      { labor: `6" post footing` },
    ],
    Features: [
      { feature: `2" Blanket Insulation in roof: +$464.00` },
      { feature: `12" Overhang: +$478.00` },
    ],
    Disclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 1,
  },

  {
    image: Thirty,
    Blueprint: ThirtyBp,
    Title: `30' x 36' x 12'`,
    KitPrice: `$22,150.00`,
    Description: `Engineered Building`,
    Materials: [
      { material: "Painted Steel" },
      { material: `2" Blanket Insulation in roof` },
      { material: "1 - Entry Door" },
      { material: `1 - 10' x 10' Framed Door Opening` },
      { material: `1 - 4' x 3' Slider Window` },
      { material: "Flat Girts" },
      { material: "Trusses" },
      { material: `12" Overhangs` },
      { material: "Premium Trim Package" },
    ],
    labors: [
      { labor: `Erection of all features listed above` },
      { labor: `Layout of building` },
      { labor: `Drilling of holes` },
      { labor: `6" post footing` },
    ],
    Disclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 2,
  },

  {
    image: ThirtySix,
    Blueprint: ThirtySixBp,
    Title: `36' x 48' x 16'`,
    KitPrice: `$32,400.00`,
    Description: `Engineered Building`,
    Materials: [
      { material: "Painted Steel" },
      { material: `2" Blanket Insulation in roof` },
      { material: "1 - Entry Door" },
      { material: `3 - 10' x 14' Framed Door Opening` },
      { material: "Flat Girts" },
      { material: "Trusses" },
      { material: `18" Overhangs` },
      { material: `4" Wainscoting` },
      { material: "Premium Trim Package" },
    ],
    labors: [
      { labor: `Erection of all features listed above` },
      { labor: `Layout of building` },
      { labor: `Drilling of holes` },
      { labor: `6" post footing` },
    ],
    Disclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 3,
  },

  {
    image: Fourty,
    Blueprint: FourtyBp,
    Title: `40' x 60' x 16'`,
    KitPrice: `$43,100.00`,
    Description: `Engineered Building`,
    Materials: [
      { material: "Painted Steel" },
      { material: `2" Blanket Insulation in roof` },
      { material: "1 - Entry Door" },
      { material: `2 - 10' x 14' Framed Door Opening` },
      { material: `1 - 4' x 3' Slider Window` },
      { material: "Flat Girts" },
      { material: "Trusses" },
      { material: `24" Overhangs` },
      { material: "Premium Trim Package" },
    ],
    labors: [
      { labor: `Erection of all features listed above` },
      { labor: `Layout of building` },
      { labor: `Drilling of holes` },
      { labor: `6" post footing` },
    ],
    Disclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 4,
  },

  {
    image: Fifty,
    Blueprint: FiftyBp,
    Title: `50' x 84' x 16'`,
    KitPrice: `$67,650.00`,
    Description: `Engineered Building`,
    Materials: [
      { material: "Painted Steel" },
      { material: "1 - Entry Door" },
      { material: `2 - 10' x 14' Overhead Doors` },
      { material: `1 - 4' x 3' Slider Window` },
      { material: "Flat Girts" },
      { material: "Trusses" },
      { material: `18" Overhangs` },
      { material: "Premium Trim Package" },
    ],
    labors: [
      { labor: `Erection of all features listed above` },
      { labor: `Layout of building` },
      { labor: `Drilling of holes` },
      { labor: `6" post footing` },
    ],
    Disclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 5,
  },

  {
    image: Sixty,
    Blueprint: SixtyBp,
    Title: `60' x 120' x 16'`,
    KitPrice: `$94,300.00`,
    Description: `Engineered Building`,
    Materials: [
      { material: "Painted Steel" },
      { material: "1 - Entry Door" },
      { material: `2 - 10' x 14' Overhead Doors` },
      { material: `1 - 4' x 3' Slider Window` },
      { material: "Flat Girts" },
      { material: "Trusses" },
      { material: `18" Overhangs` },
      { material: "Premium Trim Package" },
    ],
    Features: [{ feature: `2" Blanket Insulation in roof: +$3,500.00` }],
    labors: [
      { labor: `Erection of all features listed above` },
      { labor: `Layout of building` },
      { labor: `Drilling of holes` },
      { labor: `6" post footing` },
    ],
    Disclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 6,
  },
];

export default data;
