export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  options?: {
    sizes?: { label: string; price: number }[];
    addOns?: { label: string; price: number }[];
  };
};

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
}
