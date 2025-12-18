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

export interface MembershipTier {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  popular?: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  frequency: string;
  items: string[];
}

export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  spots: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  role: string;
}
