import { MenuItem, MembershipTier, SubscriptionPlan, Event, Testimonial } from './types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Chocolate Dream Shake',
    description: '24g protein, rich chocolate flavor with almond butter',
    price: 8.50,
    category: 'shake',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Berry Blast Shake',
    description: 'Mixed berries, vanilla protein, antioxidant boost',
    price: 8.50,
    category: 'shake',
    image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Peanut Butter Power',
    description: 'Peanut butter, banana, 26g protein',
    price: 9.00,
    category: 'shake',
    image: 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Green Machine',
    description: 'Spinach, mango, pineapple, protein',
    price: 8.50,
    category: 'shake',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '5',
    name: 'Tropical Thunder Tea',
    description: 'Energizing tea with mango and pineapple',
    price: 6.00,
    category: 'tea',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '6',
    name: 'Peach Fusion Tea',
    description: 'Refreshing peach tea with natural energy boost',
    price: 6.00,
    category: 'tea',
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '7',
    name: 'Berry Energy Tea',
    description: 'Mixed berry tea with metabolism support',
    price: 6.50,
    category: 'tea',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '8',
    name: 'Immune Boost Shot',
    description: 'Vitamin C and zinc wellness shot',
    price: 4.00,
    category: 'booster',
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '9',
    name: 'Energy Plus',
    description: 'Natural caffeine and B-vitamin boost',
    price: 3.50,
    category: 'addon',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '10',
    name: 'Collagen Beauty',
    description: 'Collagen peptides for skin and hair',
    price: 4.50,
    category: 'addon',
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const membershipTiers: MembershipTier[] = [
  {
    id: 'starter',
    name: 'Starter Wellness',
    price: 49,
    benefits: [
      '10% off all menu items',
      'Free wellness consultation',
      'Member-only events access',
      'Birthday reward'
    ]
  },
  {
    id: 'active',
    name: 'Active Lifestyle',
    price: 89,
    popular: true,
    benefits: [
      '15% off all menu items',
      '2 free shakes per month',
      'Priority event registration',
      'Free wellness consultation',
      'Exclusive member workshops',
      'Birthday reward'
    ]
  },
  {
    id: 'elite',
    name: 'Elite Nutrition',
    price: 139,
    benefits: [
      '20% off all menu items',
      '4 free shakes per month',
      '2 free energy teas per month',
      'VIP event access',
      'Monthly nutrition coaching',
      'Free wellness consultation',
      'Bring a friend free once/month',
      'Birthday reward'
    ]
  }
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'weekly-shake',
    name: 'Weekly Shake Plan',
    description: 'Get your favorite shakes delivered weekly',
    price: 65,
    frequency: 'per week',
    items: ['5 protein shakes of your choice', 'Free delivery', 'Flexible scheduling']
  },
  {
    id: 'monthly-tea',
    name: 'Monthly Energy Tea Plan',
    description: 'Stay energized all month long',
    price: 120,
    frequency: 'per month',
    items: ['20 energy teas', 'Mix and match flavors', 'Free boosters', 'Priority pickup']
  }
];

export const events: Event[] = [
  {
    id: '1',
    name: 'Nutrition 101 Workshop',
    date: '2024-01-15',
    time: '6:00 PM',
    description: 'Learn the basics of balanced nutrition and meal planning with our certified nutritionist.',
    spots: 15
  },
  {
    id: '2',
    name: 'Morning Workout & Shake',
    date: '2024-01-20',
    time: '7:00 AM',
    description: 'Join us for a community workout session followed by a complimentary protein shake.',
    spots: 20
  },
  {
    id: '3',
    name: 'Wellness Goal Setting',
    date: '2024-01-25',
    time: '5:30 PM',
    description: 'Set and achieve your wellness goals with guidance from our wellness coaches.',
    spots: 12
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    text: 'Best Life has transformed my daily routine! The shakes are delicious and keep me energized all day.',
    role: 'Active Member'
  },
  {
    id: '2',
    name: 'James Patterson',
    text: 'The community here is amazing. It\'s not just about the nutrition - it\'s about the lifestyle.',
    role: 'Elite Member'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    text: 'I love the convenience of ordering ahead and picking up on my way to work. Game changer!',
    role: 'Starter Member'
  }
];
