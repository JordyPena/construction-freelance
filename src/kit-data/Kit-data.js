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
    RoofTitle: `24' x 36' x 12' Roof Only Kit`,
    KitPrice: `$9,300.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 10' Framed Door Opening`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    Features: [
      {feature1: `2" Blanket Insulation in roof: +$464.00`},
      {feature2: `12" Overhang: +$478.00`},
      {feature3: `24" Polycarbonate on one side wall: +$200.00`},
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    Url: `/kit-summary1`,
  },

  {
    image: Thirty,
    Blueprint: ThirtyBp,
    Roof: ThirtyRoof,
    Title: `30' x 36' x 12' Kit`,
    RoofTitle: `30' x 36' x 12' Roof Only Kit`,
    KitPrice: `$10,360.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 10' Overhead Doors`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$630.00` },
      { feature2: `12" Overhang: +$500.00` },
      { feature3: `24" Polycarbonate on one side wall: +$225.00` },
      { feature4: `4o3o Window: +$350` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    Url: `/kit-summary2`,
  },

  {
    image: ThirtySix,
    Blueprint: ThirtySixBp,
    Roof: ThirtySixRoof,
    Title: `36' x 48' x 16' Kit`,
    RoofTitle: `36' x 48' x 16' Roof Only Kit`,
    KitPrice: `$16,150.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 10' Framed Door Opening`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$900.00` },
      { feature2: `18" Overhang: +$726.00` },
      { feature3: `24" Polycarbonate on one side wall: +$300.00` },
      { feature4: `4o3o Window: +$350` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    Url: `/kit-summary3`,
  },

  {
    image: Fourty,
    Blueprint: FourtyBp,
    Roof: FourtyRoof,
    Title: `40' x 60' x 16' Kit`,
    RoofTitle: `40' x 60' x 16' Roof Only Kit`,
    KitPrice: `$19,685.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 14' Overhead Doors`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$1,216.00` },
      { feature2: `24" Overhang: +$1,268.00` },
      { feature3: `4o3o Window: +$350` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    Url: `/kit-summary4`,
  },

  {
    image: Fifty,
    Blueprint: FiftyBp,
    Roof: FiftyRoof,
    Title: `50' x 84' x 16' Kit`,
    RoofTitle: `50' x 84' x 16' Roof Only Kit`,
    KitPrice: `$29,915.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 14' Overhead Doors`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$1,900.00` },
      { feature2: `18" Overhang: +$500.00` },
      { feature3: `Engineering: +$1,000.00` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    Url: `/kit-summary5`,
  },

  {
    image: Sixty,
    Blueprint: SixtyBp,
    Roof: SixtyRoof,
    Title: `60' x 120' x 16' Kit`,
    RoofTitle: `60' x 120' x 16' Roof Only Kit`,
    KitPrice: `$42,650.00`,
    Description: `Engineered Building`,
    Materials: [
      {material1: 'Painted Steel'},
      {material2: '1 - Entry Door'},
      {material3: `1 - 10' x 14' Overhead Doors`},
      {material4: 'Flat Girts'},
      {material5: 'Trusses'},
      {material6: 'Premium Trim Package'}
    ],
    Features: [
      { feature1: `2" Blanket Insulation in roof: +$3,500.00` },
      { feature2: `24" Overhang: +$1,260.00` },
      { feature3: `Engineering: +$1,260.00` },
    ],
    Disclosure: `Price is for a kit to be delivered within 50 miles of our location`,
    Url: `/kit-summary6`,
  },
];

export default data;
