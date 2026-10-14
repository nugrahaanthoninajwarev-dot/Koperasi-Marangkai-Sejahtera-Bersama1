import { siteImages } from '../assets/images';
import { StoryChapter } from '../types';

export const journeyChapters: StoryChapter[] = [
  {
    id: 'forgotten-coffee',
    title: 'THE FORGOTTEN COFFEE',
    subtitle: 'Introduced in the late 19th century and silent for decades',
    content: 'Introduced by the Dutch in the late 19th century, Excelsa found a home in the Meratus landscape and entered production, before its story fell silent for decades. It resurfaced in the 1970s through transmigration and local coffee cultivation, rose again around 2011, and declined each time markets failed to sustain it.',
    image: siteImages.harvestFarmers,
    tag: 'Historical Roots',
    moreDetails: [
      'Late 19th Century: Excelsa botanical specimens brought by colonial agronomists adapted naturally to the rugged tropical terrain and low-nutrient Ultisol soil of the Meratus mountain foothills.',
      '1970s Transmigration Era: Javanese and local Dayak farming communities integrated hardy Excelsa trees into diverse village backyard agroforestry plots.',
      '2011 Revival: Local coffee enthusiasts recognized the giant leaves and unique fruity bean aroma, yet fluctuating commercial commodity pricing stalled distribution.',
      'Today: Reclaiming botanical heritage with structured cooperative organization and sustainable market pathways.'
    ]
  },
  {
    id: 'gear-five-era',
    title: 'THE GEAR FIVE ERA OF EXCELSA',
    subtitle: 'Momentum, institution building, and large-scale agroforestry',
    content: 'The transformation of Indonesia’s coffee culture in 2018–2020 opened a new window of opportunity, but real momentum began in 2023, with stronger institutions, improved quality and production, and a new wave of large-scale planting through ecologically and economically adaptive agroforestry. Today, Excelsa is no longer simply surviving in Meratus, it is being rebuilt as an economy designed by Marangkai Cooperation to keep both livelihoods and the landscape alive.',
    image: siteImages.agroforestrySoil,
    tag: 'Cooperative Movement',
    moreDetails: [
      '2018-2020 Cultural Wave: Third-wave specialty coffee consumers in Jakarta, Bandung, and Yogyakarta started demanding unique origin profiles beyond standard commercial beans.',
      '2023 Cooperative Formation: Koperasi Marangkai Sejahtera Bersama was formalized in Tapin Regency to unite coffee growers, set quality benchmarks, and secure fair farmgate pricing.',
      'Selective Roaster Network: Partnering with an exclusive network of only 12 domestic specialty roasters across Indonesia, providing micro-lots from 10 Kg.',
      'Direct International Trade: Signing of historic Memorandum of Understanding (MoU) for export to Japanese artisanal roasters, bringing Tapin onto the global specialty coffee map.'
    ]
  },
  {
    id: 'ecological-concent',
    title: 'ECOLOGICAL CONCENT, ECONOMICAL SUSTAINE',
    subtitle: 'Economic growth must first earn the consent of ecology',
    content: 'We believe economic growth must first earn the consent of ecology. In Meratus, coffee is not cultivated against the landscape, but within it, through adaptive agroforestry that allows farmers, biodiversity, and production to grow together. The goal is simple: create an economy that gives value to the living landscape, sustains rural livelihoods, and keeps Meratus standing.',
    image: siteImages.hero,
    tag: 'Agroforestry Ethics',
    moreDetails: [
      '60% - 90% Natural Shade Density: Excelsa thrives in the understory beneath towering dipterocarp, durian, cempedak, and petai trees, preserving vital canopy coverage.',
      'Low-Nutrient Ultisol Soil: Deep root systems naturally seek deep subsoil moisture and nutrients, concentrating rich sugar esters in the cherries.',
      'Zero Harsh Agro-chemicals: Natural biological pest management, organic leaf mulch, and indigenous microorganism composting enhance living soil biology.',
      'Biodiversity Sanctuary: Bird species, native pollinators, and forest fauna move freely through the shaded multi-strata plantation belts.'
    ]
  },
  {
    id: 'sell-coffee-tell-story',
    title: 'sell the coffee, tell the story',
    subtitle: 'Cupping scores: Anaerobic 83.75, Honey 83.45, Natural 83.25',
    content: 'Excelsa from Meratus is more than an origin—it is a story of adaptation, persistence, and renewal, expressed in every cup. And the story speaks for itself: our cupping scores reach 83.25 for Natural, 83.45 for Honey, and 83.75 for Anaerobic, proving that a coffee rooted in its landscape can carry both a compelling story and genuine specialty quality.',
    image: siteImages.cupping,
    tag: 'Specialty Quality',
    moreDetails: [
      'Rigorous Cherry Selection: Only 100% physiologically ripe dark purple-red cherries with 18–29° Brix count are harvested.',
      'Specialty Cupping Scores: Certified by licensed Q-graders under SCA protocols — Anaerobic 83.75, Honey 83.45, and Natural 83.25.',
      '2-Ton Seasonal Processing Capacity: Small-batch artisanal focus ensuring meticulous care over every drying bed and fermentation vessel.',
      'Micro-Lot Accessibility: Micro-lot reservations open starting from 10 Kg for domestic and international roasteries.'
    ]
  }
];

export const whySpecialData = {
  constraintsSection: {
    title: 'Where Constraints Become Exceptional',
    description: 'Low altitude (60–90m ASL), harsh dry season, battered by wet seasons, and naturally low-nutrient Ultisol soil. Sheltered beneath 60%–90% agroforestry shade density and harvested at peak 18–29° Brix sugar density, native Excelsa from Tapin transforms environmental adversity into remarkable specialty cup quality.',
    naturalNotes: ['Black tea', 'Hazelnut', 'Spicy'],
    honeyNotes: ['Brown sugar', 'Caramel', 'Brown fruit'],
    anaerobicNotes: ['Brown sugar', 'Dried plum', 'Dried apple'],
    scores: {
      natural: '83.25 SCA',
      honey: '83.45 SCA',
      anaerobic: '83.75 SCA'
    }
  },
  farmerPillars: [
    {
      title: "THE FARMER WON'T GIVE UP ON EXCELSA EVEN WHEN NO ONE BUY IT",
      desc: 'Generations of farmers in Hatungun protected these magnificent trees through market downturns because they believed in the land and their ancestral plants.',
      image: siteImages.harvestFarmers
    },
    {
      title: "THE EXCELSA WON'T DISAPPEAR EVEN WHEN NO ONE TOOK CARE OF IT",
      desc: 'Its deep roots in low-nutrient Ultisol soil and thick foliage under 60%–90% shade density allowed Excelsa to survive in the wild forest borders of Meratus until our cooperative revived it.',
      image: siteImages.dryingPatio
    }
  ],
  movingForward: {
    title: 'WILLING TO MOVING FORWARD',
    desc: 'Not only encouraging our Excelsa farms, but we are also continuously advancing post-harvest protocols and micro-lot quality season by season.'
  },
  researchSection: {
    title: 'We do Our Homework!',
    subtitle: 'We do research to explain things!',
    intro: 'We study our agroecosystem to optimize Meratus Excelsa coffee — combining deep agroecological stewardship with scientific post-harvest precision.',
    details: 'Mastering naturally low-nutrient Ultisol soils, maintaining optimal 60%–90% forest shade density, calibrating 18–29° Brix cherry ripeness, and processing our 2-ton seasonal capacity for 12 exclusive domestic roaster partners and micro-lots starting from 10 Kg.'
  },
  prideSection: {
    title: 'our coffee our proud!',
    desc: 'Excelsa was planted as our own child. Stewarded to overcome natural limitations and deliver extraordinary specialty flavor.'
  }
};
