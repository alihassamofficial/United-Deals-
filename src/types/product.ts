export type ColorOption = {
  name: string;
  value: string;
  hex: string;
};

export type Option = {
  label: string;
  value: string;
};

export type FlashDeal = {
  active: boolean;
  endsInHours: number;
  dealPrice: number;
  label: string;
};

export type Product = {
  id: number;
  slug: string;
  title: string;
  sku: string;
  availability: string;
  brand: string;
  category: string;
  rating: number;
  reviewsCount: number;
  price: number;
  mrp: number;
  discountPercent: number;
  colors: ColorOption[];
  memory: Option[];
  storage: Option[];
  description: string;
  features: string[];
  shipping: string;
  images: string[];
  flashDeal: FlashDeal;
};

export type CartItem = Product & {
  quantity: number;
  selectedColor?: string;
  selectedMemory?: string;
  selectedStorage?: string;
};
