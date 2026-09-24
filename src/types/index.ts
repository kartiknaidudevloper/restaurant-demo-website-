export type TabType = 'home' | 'menu' | 'gallery' | 'reservations' | 'contact';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'starters' | 'main-course' | 'chinese' | 'desserts' | 'beverages';
  categories: string[];
  description: string;
  image: string;
  alt: string;
  isVeg: boolean;
  spiceLevel?: 'Mild' | 'Medium Spicy' | 'Spicy' | 'Sweet' | 'Refreshing' | 'Chilled';
  badge?: 'Chef\'s Special' | 'Signature' | 'Bestseller' | 'Chef\'s Signature' | 'Dessert Star' | 'Refreshing' | 'Fusion' | 'Vegetarian' | 'Dessert';
  ingredients: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'dishes' | 'ambience' | 'private' | 'events';
  categoryLabel: string;
  image: string;
  alt: string;
  aspectRatio: 'aspect-[4/5]' | 'aspect-[4/3]';
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  image: string;
  rating: number;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface ReservationDetails {
  guests: number;
  date: string;
  time: string;
  seatingArea: string;
  occasion: string;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
  dietary?: string;
}
