export interface ManagementMember {
  role: string;
  name: string;
  description: string;
}

export interface ProductHighlight {
  id: string;
  name: string;
  category: 'Green Beans' | 'Roast Beans';
  processes: string[];
  description: string;
  priceRange: string;
  keyNotes: string;
  specs: string[];
}

export const companyProfileData = {
  identity: {
    fullName: 'Koperasi Marangkai Sejahtera Bersama',
    shortName: 'Marangkai Cooperative',
    tagline: 'A Cup of Coffee, A Tale From Meratus',
    type: 'Agricultural & Plantation Producer Cooperative',
    domicile: 'Tapin Regency, South Kalimantan Province, Indonesia',
    legalAddress: 'Burakai Village, RT 02 / RW 01, Hatungun District, Tapin Regency, South Kalimantan 71181',
    contactEmail: 'marangkaisejahterabersama@gmail.com',
    phone1: '+62 896-9057-1731',
    phone2: '081223741112',
    phones: ['+62 896-9057-1731', '081223741112'],
    whatsapp: '+62 896-9057-1731 / 081223741112',
    primaryCommodity: 'Meratus Excelsa Coffee (Coffea liberica var. dewevrei)',
    cuppingScore: '83.25 - 83.75 (Anaerobic: 83.75, Honey: 83.45, Natural: 83.25)',
    elevation: '60 - 90 m ASL (Lowland Tropical Agroforestry)',
    shadeDensity: '60% - 90% Diverse Forest Canopy Shade',
    soilType: 'Ultisol (Low Nutrient, Deep Taproot Environment)',
    brixCount: '18 - 29° Brix Selective Ripe Cherry Harvest',
    seasonalCapacity: '2 Metric Tons Seasonal Processing Capacity',
    domesticRoasters: '12 Exclusive Domestic Specialty Roasters',
    microLotMinimum: '10 Kg Micro-Lot Minimum Batch',
    memberCount: '45+ Smallholder Coffee Farming Families',
    managedArea: '120+ Hectares of Meratus Mountain Agroforestry Canopy',
  },
  vision:
    'To establish Meratus Excelsa Coffee as a globally respected, world-class specialty origin that delivers fair prosperity to local smallholders while protecting the integrity of South Kalimantan’s tropical forest ecosystem.',
  missions: [
    'Build an independent, transparent, and democratic farmer cooperative economic institution.',
    'Pioneer adaptive agroforestry with 60%–90% natural canopy shade on low-nutrient Ultisol soil, fostering deep root systems and slow maturation without synthetic chemicals.',
    'Standardize precision post-harvest processing (Natural 83.25, Honey 83.45, and Anaerobic 83.75) meeting Specialty Coffee Association (SCA) quality benchmarks.',
    'Maintain an artisanal 2-ton seasonal capacity and direct trade distribution across 12 domestic specialty roasters and bilateral export corridors to Japan.',
    'Educate global coffee communities on the agronomic resilience, heritage, and unique tart-sweet flavor profile of Meratus Excelsa.',
  ],
  coreValues: [
    {
      title: 'Ecological Consent',
      description: 'Economic progress must first earn the consent of ecology. Coffee is grown within the forest canopy with 60%–90% shade density on Ultisol soil, never by clearing trees.',
    },
    {
      title: 'Fair Farmer Prosperity',
      description: 'Guaranteeing dignified farmgate prices for ripe red cherry pickings at 18–29° Brix, establishing independent prosperity for farming families.',
    },
    {
      title: 'Specialty Quality Dedication',
      description: 'Upholding strict sorting protocols from tree branch to drying beds, validated by official cupping scores up to 83.75 with end-to-end traceability.',
    },
    {
      title: 'Solidarity & Transparency',
      description: 'Cooperative enterprise governed with integrity, mutual cooperation (gotong royong), and shared dividends benefiting the community.',
    },
  ],
  productsOverview: [
    {
      id: 'green-beans',
      name: 'Meratus Excelsa Green Beans',
      category: 'Green Beans' as const,
      processes: [
        'Honey Process (IDR 180,000/Kg - Score 83.45)',
        'Natural Process (IDR 150,000/Kg - Score 83.25)',
        'Anaerobic Process (IDR 400,000/Kg - Score 83.75)'
      ],
      description: 'Raw specialty grade Excelsa coffee beans cultivated on low-nutrient Ultisol soil under 60%–90% forest shade in Burakai Village, Tapin. Carefully hand-picked at 18–29° Brix and sun-dried on raised bamboo beds.',
      priceRange: 'IDR 150,000 - IDR 400,000 / Kg',
      keyNotes: 'Brown sugar, caramel, black tea, hazelnut, spicy, dried plum & apple',
      specs: [
        'Micro-lot orders available starting from 10 Kg',
        'Seasonal processing capacity: 2 metric tons strictly quality controlled',
        'SCA Cupping Scores: Anaerobic 83.75 | Honey 83.45 | Natural 83.25',
        'Moisture content: 11 - 12% digitally verified',
        'Soil type: Ultisol with low nutrient, encouraging deep root systems',
        'Canopy shade density: 60% - 90% native polyculture cover',
        'Cherry ripeness standard: 18 - 29° Brix count',
        'Defect tolerance: Specialty Grade 1 export standard',
        'Packaging: GrainPro hermetic liner + burlap sacks (10 Kg, 30 Kg, or 60 Kg)',
        'Traceability: 100% single-origin Hatungun, Tapin, South Kalimantan',
      ],
    },
    {
      id: 'roasted-beans',
      name: 'Meratus Excelsa Roasted Beans',
      category: 'Roast Beans' as const,
      processes: [
        'Honey Process (IDR 350,000/Kg - Score 83.45)',
        'Natural Process (IDR 330,000/Kg - Score 83.25)'
      ],
      description: 'Artisanal medium roast crafted to amplify the exotic tart-sweet acidity and intense brown sugar body of native Meratus Excelsa. Supplied to an exclusive network of only 12 domestic specialty roasters nationwide.',
      priceRange: 'IDR 330,000 - IDR 350,000 / Kg',
      keyNotes: 'Caramelized sweetness, hazelnut aromatics, black tea clarity, and warm spice finish',
      specs: [
        'Exclusively distributed to 12 domestic specialty roasters',
        'Micro-lot orders starting from 10 Kg',
        'Roast Profile: Medium artisanal batch roast',
        'Degassing valve airtight packaging to preserve peak volatile aromatics',
        'Available in whole bean or customized grind profiles for cafes & retail',
        'Freshly roasted to order for maximum flavor vitality',
      ],
    },
  ],
  management: [
    {
      role: 'Chairman',
      name: 'Fery Setyawan',
      description: 'Coffee agroforestry pioneer and lead driving force of post-harvest value addition, cooperative empowerment, and international export trade.',
    },
    {
      role: 'Secretary',
      name: 'Nugraha Anthoni Najwa',
      description: 'Directs cooperative administrative governance, statutory legal affairs, institutional documentation, and traceability records.',
    },
    {
      role: 'Treasurer',
      name: 'Prawoto',
      description: 'Oversees financial controllership, member harvest disbursements, transparent cooperative capital funds, and economic reporting.',
    },
  ],
  certifications: [
    { title: 'Producer Cooperative Legal Entity', issuer: 'Ministry of Law and Human Rights RI' },
    { title: 'Official Cupping Benchmark (Anaerobic 83.75, Honey 83.45, Natural 83.25)', issuer: 'Specialty Coffee Association (SCA) Protocol Certified Lab' },
    { title: 'Bilateral Export Partnership MoU', issuer: 'Specialty Coffee Trade Partner, Japan' },
  ],
};
