import { MenuItem, Testimonial } from './types';

export const menuItems: MenuItem[] = [
  // Shake items
  ...[
    { image: 'banana-nuts.png', name: 'Banana Nuts', description: '24g protein, rich chocolate flavor with almond butter', price: 8.50 },
    { image: 'banana-split.png', name: 'Banana Split', description: 'Classic banana split with a protein twist', price: 8.50 },
    { image: 'birthday-cake.png', name: 'Birthday Cake', description: 'Cake flavored shake with sprinkles', price: 9.00 },
    { image: 'captin-crunch.png', name: 'Captain Crunch', description: 'Crunchy cereal, banana, and protein blend', price: 8.50 },
    { image: 'churro.png', name: 'Churro Shake', description: 'Cinnamon, sugar, and protein goodness', price: 8.50 },
    { image: 'coco-choco.png', name: 'Coco Choco', description: 'Chocolate and coconut fusion shake', price: 8.50 },
    { image: 'fruity-pebbles.png', name: 'Fruity Pebbles', description: 'Fruit cereal with a high-protein twist', price: 9.00 },
    { image: 'key-west.png', name: 'Key West', description: 'Tropical mango, coconut, and protein mix', price: 8.50 },
    { image: 'mango-pina.png', name: 'Mango Pina', description: 'Mango, pineapple, and coconut protein shake', price: 8.50 },
    { image: 'minty-goddess.png', name: 'Minty Goddess', description: 'Peppermint, chocolate, and a protein boost', price: 8.50 },
    { image: 'oreo-explosion.png', name: 'Oreo Explosion', description: 'Cookies and cream shake with a protein kick', price: 9.00 },
    { image: 'pistachio-pale.png', name: 'Pistachio Pale', description: 'Pistachio-flavored protein shake', price: 8.50 },
    { image: 'pumpkin-banana.png', name: 'Pumpkin Banana', description: 'Pumpkin and banana blend with 24g protein', price: 8.50 },
    { image: 'rainbow.png', name: 'Rainbow Shake', description: 'Vibrant flavors with a high-protein base', price: 8.50 },
    { image: 'strawberry-cheesecake.png', name: 'Strawberry Cheesecake', description: 'A fruity and creamy shake with 22g protein', price: 8.50 },
    { image: 'vanillia-bean.png', name: 'Vanilla Bean', description: 'Rich vanilla shake with added protein', price: 8.50 }
  ].map((item, index) => ({
    id: `${index + 1}`,
    name: item.name,
    description: item.description,
    price: item.price,
    category: 'shake',
    image: `/src/assets/blnc_protein_shakes/${item.image}`,
  })),
  
  // Tea items
  ...[
    { image: 'smurf-up.png', name: 'Smurf Up', description: 'Blueberry and citrus energizing tea', price: 6.00 },
    { image: 'captain-america.png', name: 'Captain America', description: 'Refreshing tea with lemon and ginger', price: 6.50 },
    { image: 'cucumberita.png', name: 'Cucumberita', description: 'Cucumber and lime herbal tea', price: 5.50 },
    { image: 'dragon-slayer.png', name: 'Dragon Slayer', description: 'Spicy ginger and lemon tea with antioxidants', price: 6.00 },
    { image: 'fruitrollup.png', name: 'Fruit Roll-Up', description: 'Berry tea with a sweet, tangy twist', price: 6.00 },
    { image: 'passion-fruit.png', name: 'Passion Fruit', description: 'Tropical passion fruit tea', price: 6.00 },
    { image: 'sex-on-the-beach.png', name: 'Sex On The Beach', description: 'Sweet and tangy fruit tea blend', price: 6.50 }
  ].map((item, index) => ({
    id: `${index + 18}`,
    name: item.name,
    description: item.description,
    price: item.price,
    category: 'tea',
    image: `/src/assets/blnc_lit_teas/${item.image}`,
  })),

  // Food items
  ...[
    { image: 'cotton-candy.png', name: 'Cotton Candy', description: 'Sugar-free cotton candy with protein', price: 5.00 },
    { image: 'protein-cookies.png', name: 'Protein Cookies', description: 'High-protein cookies with a sweet taste', price: 5.00 },
    { image: 'protein-waffles.png', name: 'Protein Waffles', description: 'Waffles packed with protein and flavor', price: 5.00 }
  ].map((item, index) => ({
    id: `${index + 26}`,
    name: item.name,
    description: item.description,
    price: item.price,
    category: 'food',
    image: `/src/assets/blnc_food/${item.image}`,
  }))
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Katherine Laks',
    text: 'I stumbled across this health spot, and I’m so glad I did! The health shakes are fantastic, and you can taste the quality of the ingredients. The lit te is amazing the peach please is wow. Tasty! It\'s nice to find a place that genuinely cares about healthy eating.'
  },
  {
    id: '2',
    name: 'Chané Scholtz',
    text: 'I stopped by Best Life Nutrition Club today and tried the Oreo Explosion Shake—absolutely delicious! The flavor was rich, creamy, and super satisfying. The two ladies working were incredibly friendly and had my order ready in no time. The shop is clean, welcoming, and has such a great vibe. I’ll definitely be coming back to try more of their menu. Highly recommend!'
  },
  {
    id: '3',
    name: 'Isaac Cruz',
    text: 'OVERALL 10/10 100% if you’re about a healthy lifestyle or you’re trying to get educated on how to live a healthier lifestyle this spot is definitely the place to be! Tea’s! SHAKES! guilt free delights!'
  }
];
