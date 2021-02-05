import TwentyFour from "../Kit-images/24.png";
import TwentyFourBp from "../Kit-images/24-blueprint.jpeg";
import TwentyFourRoof from "../Kit-images/24-roof.jpeg";

import Thirty from "../Kit-images/30.png";
import ThirtyBp from "../Kit-images/30-blueprint.jpeg";
import ThirtyRoof from "../Kit-images/30-roof.jpeg";

import ThirtySix from "../Kit-images/36.png";
import ThirtySixBp from "../Kit-images/36-blueprint.png";
import ThirtySixRoof from "../Kit-images/36-roof.jpeg";

import Fourty from "../Kit-images/40.png";
import FourtyBp from "../Kit-images/40-blueprint.png";
import FourtyRoof from "../Kit-images/40-roof.jpeg";

import Fifty from "../Kit-images/50.jpeg";
import FiftyBp from "../Kit-images/50-blueprint.jpeg";
import FiftyRoof from "../Kit-images/50-roof.jpeg";

import Sixty from "../Kit-images/60.png";
import SixtyBp from "../Kit-images/60-blueprint.png";
import SixtyRoof from "../Kit-images/60-roof.jpeg";

const data = [
  {
    image: TwentyFour,
    Blueprint: TwentyFourBp,
    Roof: TwentyFourRoof,
    Title: `24' x 36' x 12' Kit`,
    constructedTitle: `24' x 36' x 12'`,
    RoofTitle: `24' x 36' x 12' Roof Only Kit`,
    KitPrice: `$9,300.00`,
    ConstructedPrice: `$19,900.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 10' Framed Door Opening`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    constructedMaterials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 10' Framed Door Opening`},
      {material4: `1 - 4' x 3' Slider Window`},
      {material5: 'Flat Girts'},
      {material6: 'Trusses'},
      {material7: 'Premium Trim Package'}
    ],
    labor: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
    ],
    Features: [
      {feature1: `2" Blanket Insulation in roof: +$464.00`},
      {feature2: `12" Overhang: +$478.00`},
      {feature3: `24" Polycarbonate on one side wall: +$200.00`},
    ],
    constructedFeatures: [
      { feature1: `2" Blanket Insulation in roof: +$464.00` },
      { feature2: `12" Overhang: +$478.00` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    constructedDisclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 1,
    constructedUrl: `/constructed-summary1`,
  },

  {
    image: Thirty,
    Blueprint: ThirtyBp,
    Roof: ThirtyRoof,
    Title: `30' x 36' x 12' Kit`,
    constructedTitle: `30' x 36' x 12'`,
    RoofTitle: `30' x 36' x 12' Roof Only Kit`,
    KitPrice: `$10,360.00`,
    ConstructedPrice: `$22,150.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 10' Overhead Doors`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    constructedMaterials: [
      {material1: 'Painted Steel'},
      {material2: `2" Blanket Insulation in roof`},
      {material3: '1 - Entry Door'},
      {material4: `1 - 10' x 10' Framed Door Opening`},
      {material5: `1 - 4' x 3' Slider Window`},
      {material6: 'Flat Girts'},
      {material7: 'Trusses'},
      {material8: `12" Overhangs`},
      {material9: 'Premium Trim Package'}
    ],
    labor: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$630.00` },
      { feature2: `12" Overhang: +$500.00` },
      { feature3: `24" Polycarbonate on one side wall: +$225.00` },
      { feature4: `4o3o Window: +$350` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    constructedDisclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 2,
    constructedUrl: `/constructed-summary2`,
  },

  {
    image: ThirtySix,
    Blueprint: ThirtySixBp,
    Roof: ThirtySixRoof,
    Title: `36' x 48' x 16' Kit`,
    constructedTitle: `36' x 48' x 16'`,
    RoofTitle: `36' x 48' x 16' Roof Only Kit`,
    KitPrice: `$16,150.00`,
    ConstructedPrice: `$32,400.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 10' Framed Door Opening`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    constructedMaterials: [
      {material1: 'Painted Steel'},
      {material2: `2" Blanket Insulation in roof`},
      {material3: '1 - Entry Door'},
      {material4: `3 - 10' x 14' Framed Door Opening`},
      {material5: 'Flat Girts'},
      {material6: 'Trusses'},
      {material7: `18" Overhangs`},
      {material8: `4" Wainscoting`},
      {material9: 'Premium Trim Package'}
    ],
    labor: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$900.00` },
      { feature2: `18" Overhang: +$726.00` },
      { feature3: `24" Polycarbonate on one side wall: +$300.00` },
      { feature4: `4o3o Window: +$350` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    constructedDisclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 3,
    constructedUrl: `/constructed-summary3`,
  },

  {
    image: Fourty,
    Blueprint: FourtyBp,
    Roof: FourtyRoof,
    Title: `40' x 60' x 16' Kit`,
    constructedTitle: `40' x 60' x 16'`,
    RoofTitle: `40' x 60' x 16' Roof Only Kit`,
    KitPrice: `$19,685.00`,
    ConstructedPrice: `$43,100.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 14' Overhead Doors`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    constructedMaterials: [
      {material1: 'Painted Steel'},
      {material2: `2" Blanket Insulation in roof`},
      {material3: '1 - Entry Door'},
      {material4: `2 - 10' x 14' Framed Door Opening`},
      {material8: `1 - 4' x 3' Slider Window`},
      {material5: 'Flat Girts'},
      {material6: 'Trusses'},
      {material7: `24" Overhangs`},
      {material9: 'Premium Trim Package'}
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$1,216.00` },
      { feature2: `24" Overhang: +$1,268.00` },
      { feature3: `4o3o Window: +$350` },
    ],
    labor: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    constructedDisclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 4,
    constructedUrl: `/constructed-summary4`,
  },

  {
    image: Fifty,
    Blueprint: FiftyBp,
    Roof: FiftyRoof,
    Title: `50' x 84' x 16' Kit`,
    constructedTitle: `50' x 84' x 16'`,
    RoofTitle: `50' x 84' x 16' Roof Only Kit`,
    KitPrice: `$29,915.00`,
    ConstructedPrice: `$67,650.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 14' Overhead Doors`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    constructedMaterials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `2 - 10' x 14' Overhead Doors`},
      {material4: `1 - 4' x 3' Slider Window`},
      {material5: 'Flat Girts'},
      {material6: 'Trusses'},
      {material7: `18" Overhangs`},
      {material8: 'Premium Trim Package'}
    ],
    labor: [
      { labor1: `Erection of all features listed above` },
      { labor2: `Layout of building` },
      { labor3: `Drilling of holes` },
      { labor4: `6" post footing` },
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$1,900.00` },
      { feature2: `18" Overhang: +$500.00` },
      { feature3: `Engineering: +$1,000.00` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    constructedDisclosure: `Price is for a building constructed within 50 miles of our location and no backfill, concrete slab, permit, or excavation is included in the price. Customer is to provide a level hazard free site.`,
    id: 5,
    constructedUrl: `/constructed-summary5`,
  },

  {
    image: Sixty,
    Blueprint: SixtyBp,
    Roof: SixtyRoof,
    Title: `60' x 120' x 16' Kit`,
    constructedTitle: `60' x 120' x 16'`,
    RoofTitle: `60' x 120' x 16' Roof Only Kit`,
    KitPrice: `$42,650.00`,
    ConstructedPrice: `$94,300.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 14' Overhead Doors`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    constructedMaterials: [
      {material1: 'Painted Steel'},
      {material2: `2" Blanket Insulation in roof`},
      {material3: '1 - Entry Door'},
      {material4: `2 - 10' x 14' Overhead Doors`},
      {material8: `1 - 4' x 3' Slider Window`},
      {material5: 'Flat Girts'},
      {material6: 'Trusses'},
      {material7: `18" Overhangs`},
      {material9: 'Premium Trim Package'}
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$3,500.00` },
      { feature2: `24" Overhang: +$1,260.00` },
      { feature3: `Engineering: +$1,260.00` },
    ],
    constructedFeatures: [
      { feature1: `2" Blanket Insulation in roof: +$3,500.00` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    id: 6,
  },
];

export default data;
