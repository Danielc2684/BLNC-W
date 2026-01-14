export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'shake' | 'tea' | 'booster' | 'addon';
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
}
