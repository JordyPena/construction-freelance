import January from "../Special-images/january.png"
import JanuaryBp from "../Special-images/january-blueprint.jpeg"

import February from "../Special-images/february.jpeg"
import FebruaryBp from "../Special-images/february-blueprint.jpeg"

import March from "../Special-images/march.jpeg"
import MarchBp from "../Special-images/march-blueprint.jpeg"

import April from "../Special-images/april.jpeg"
import AprilBp from "../Special-images/april-blueprint.jpeg"

import May from "../Special-images/may.jpeg"
import MayBp from "../Special-images/may-blueprint.jpeg"

import June from "../Special-images/june.jpeg"
import JuneBp from "../Special-images/june-blueprint.jpeg"

const data = [
  {
    image: January,
    Blueprint: JanuaryBp,
    Title: `24' x 30' x 10'`,
    KitPrice: `$17,900.00`,
    Description: `Agricultural Building`,
    Materials: [
      { material1: "Painted Steel" },
      { material2: `2" Blanket Insulation in roof` },
      { material3: `1 - Entry Door` },
      { material4: `2 - 8' x 8' Overhead doors` },
      { material5: "Flat Girts" },
      { material6: "Trusses" },
      { material7: `12" Overhangs` },
      { material8: `24" Polycarbonate Panels on Sidewall` },
      { material9: "Premium Trim Package" },
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
    image: February,
    Blueprint: FebruaryBp,
    Title: `36' x 60' x 16'`,
    KitPrice: `$40,200.00`,
    Description: `Agricultural Building`,
    Materials: [
      { material1: "Painted Steel" },
      { material2: `2" Blanket Insulation in roof` },
      { material3: `1 - Entry Door` },
      { material4: `3 - 10' x 14' Overhead doors` },
      { material5: `2 - 4' x 3' Slider Windows`},
      { material6: "Flat Girts" },
      { material7: "Trusses" },
      { material8: `18" Overhangs` },
      { material9: "Premium Trim Package" },
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
    id: 2,
  },

  {
    image: March,
    Blueprint: MarchBp,
    Title: `30' x 30' x 14'`,
    KitPrice: `$18,200.00`,
    Description: `Agricultural Building`,
    Materials: [
      { material1: "Painted Steel" },
      { material2: `2" Blanket Insulation in roof` },
      { material3: `1 - Entry Door` },
      { material4: `1 - 12' x 12' Overhead doors` },
      { material5: `1 - 4' x 3' Slider Windows`},
      { material6: "Flat Girts" },
      { material7: "Trusses" },
      { material8: "Premium Trim Package" },
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
    image: April,
    Blueprint: AprilBp,
    Title: `24' x 36' x 14' with 12' x 36' Roof Only Shed`,
    KitPrice: `$24,000.00`,
    Description: `Agricultural Building`,
    Materials: [
      { material1: "Painted Steel" },
      { material2: `2" Blanket Insulation in roof` },
      { material3: `1 - Entry Door` },
      { material4: `1 - 10' x 12' Overhead doors` },
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
    Disclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 4,
  },

  {
    image: May,
    Blueprint: MayBp,
    Title: `36' x 40' x 16'`,
    KitPrice: `$35,800.00`,
    Description: `Agricultural Building`,
    Materials: [
      { material1: "Painted Steel" },
      { material2: `2" Blanket Insulation in roof` },
      { material3: `1 - Entry Door` },
      { material4: `1 - 3o3o Window`},
      { material5: `2 - 10' x 14' Overhead doors` },
      { material6: `1 - 10' x 10' Overhead door` },
      { material7: "Flat Girts" },
      { material8: "Trusses" },
      { material9: "Premium Trim Package" },
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
    image: June,
    Blueprint: JuneBp,
    Title: `40' x 70' x 16'`,
    KitPrice: `$48,800.00`,
    Description: `Agricultural Building`,
    Materials: [
      { material1: "Painted Steel" },
      { material2: `2" Blanket Insulation in roof` },
      { material3: `1 - Entry Door` },
      { material4: `1 - 20' x 15' Slider door`},
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
    Disclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 6,
  },
];

export default data;
