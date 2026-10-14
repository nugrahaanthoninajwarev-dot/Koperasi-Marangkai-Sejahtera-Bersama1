export interface Product {
  id: number;
  name: string;
  category: 'Green Beans' | 'Roast Beans' | 'Drip Bag';
  process: 'Natural Process' | 'Honey Process' | 'Anaerobic Process' | 'Specialty Blend';
  price: number;
  priceFormatted: string;
  weight: string;
  description: string;
  flavorNotes: string[];
  cuppingScore?: number;
  altitude?: string;
  variety: string;
  origin: string;
  image: string;
  inStock: boolean;
  slug: string;
  microLot?: string;
  brixCount?: string;
  soilType?: string;
  shadeDensity?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type PageId = 'home' | 'company-profile' | 'portfolio' | 'the-journey' | 'why-our-excelsa-special' | 'store' | 'contact-us';

export interface StoryChapter {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  image: string;
  tag?: string;
  moreDetails?: string[];
}
