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
      { material1: "Painted Steel" },
      { material2: "1 - Entry Door" },
      { material3: `1 - 10' x 10' Framed Door Opening` },
      { material4: `1 - 4' x 3' Slider Window` },
      { material5: "Flat Girts" },
      { material6: "Trusses" },
      { material7: "Premium Trim Package" },
    ],
    labors: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$464.00` },
      { feature2: `12" Overhang: +$478.00` },
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
      { material1: "Painted Steel" },
      { material2: `2" Blanket Insulation in roof` },
      { material3: "1 - Entry Door" },
      { material4: `1 - 10' x 10' Framed Door Opening` },
      { material5: `1 - 4' x 3' Slider Window` },
      { material6: "Flat Girts" },
      { material7: "Trusses" },
      { material8: `12" Overhangs` },
      { material9: "Premium Trim Package" },
    ],
    labors: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
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
      { material1: "Painted Steel" },
      { material2: `2" Blanket Insulation in roof` },
      { material3: "1 - Entry Door" },
      { material4: `3 - 10' x 14' Framed Door Opening` },
      { material5: "Flat Girts" },
      { material6: "Trusses" },
      { material7: `18" Overhangs` },
      { material8: `4" Wainscoting` },
      { material9: "Premium Trim Package" },
    ],
    labors: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
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
      { material1: "Painted Steel" },
      { material2: `2" Blanket Insulation in roof` },
      { material3: "1 - Entry Door" },
      { material4: `2 - 10' x 14' Framed Door Opening` },
      { material8: `1 - 4' x 3' Slider Window` },
      { material5: "Flat Girts" },
      { material6: "Trusses" },
      { material7: `24" Overhangs` },
      { material9: "Premium Trim Package" },
    ],
    labors: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
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
      { material1: "Painted Steel" },
      { material2: "1 - Entry Door" },
      { material3: `2 - 10' x 14' Overhead Doors` },
      { material4: `1 - 4' x 3' Slider Window` },
      { material5: "Flat Girts" },
      { material6: "Trusses" },
      { material7: `18" Overhangs` },
      { material8: "Premium Trim Package" },
    ],
    labors: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
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
      { material1: "Painted Steel" },
      { material2: "1 - Entry Door" },
      { material3: `2 - 10' x 14' Overhead Doors` },
      { material4: `1 - 4' x 3' Slider Window` },
      { material5: "Flat Girts" },
      { material6: "Trusses" },
      { material7: `18" Overhangs` },
      { material8: "Premium Trim Package" },
    ],
    Features: [{ feature1: `2" Blanket Insulation in roof: +$3,500.00` }],
    labors: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
    ],
    Disclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 6,
  },
];

export default data;
