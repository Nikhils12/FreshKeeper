import { FoodItem, FoodCategory, StorageLocation, Recipe } from '../types';

export const mockInventory: FoodItem[] = [
  {
    id: '1',
    name: 'Greek Yogurt',
    category: FoodCategory.DAIRY,
    expiryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days
    addedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    quantity: 1,
    unit: 'container',
    location: StorageLocation.FRIDGE
  },
  {
    id: '2',
    name: 'Bananas',
    category: FoodCategory.FRUITS,
    expiryDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
    addedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    quantity: 6,
    unit: 'pieces',
    location: StorageLocation.COUNTER
  },
  {
    id: '3',
    name: 'Chicken Breast',
    category: FoodCategory.MEAT,
    expiryDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // Expired 1 day ago
    addedDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
    quantity: 2,
    unit: 'lbs',
    location: StorageLocation.FRIDGE
  },
  {
    id: '4',
    name: 'Spinach',
    category: FoodCategory.VEGETABLES,
    expiryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days
    addedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    quantity: 1,
    unit: 'bag',
    location: StorageLocation.FRIDGE
  },
  {
    id: '5',
    name: 'Bread',
    category: FoodCategory.GRAINS,
    expiryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
    addedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    quantity: 1,
    unit: 'loaf',
    location: StorageLocation.PANTRY
  },
  {
    id: '6',
    name: 'Milk',
    category: FoodCategory.DAIRY,
    expiryDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days
    addedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    quantity: 1,
    unit: 'gallon',
    location: StorageLocation.FRIDGE
  },
  {
    id: '7',
    name: 'Tomatoes',
    category: FoodCategory.VEGETABLES,
    expiryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days
    addedDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    quantity: 4,
    unit: 'pieces',
    location: StorageLocation.COUNTER
  },
  {
    id: '8',
    name: 'Eggs',
    category: FoodCategory.DAIRY,
    expiryDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
    addedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    quantity: 12,
    unit: 'pieces',
    location: StorageLocation.FRIDGE
  }
];

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Fresh Garden Salad',
    cookTime: '15 mins',
    servings: 4,
    difficulty: 'easy',
    ingredients: [
      '2 cups mixed lettuce leaves',
      '1 large tomato, diced',
      '1 cucumber, sliced',
      '1/2 red onion, thinly sliced',
      '1/4 cup olive oil',
      '2 tbsp balsamic vinegar',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Wash and dry the lettuce leaves thoroughly',
      'Dice the tomato and slice the cucumber',
      'Thinly slice the red onion',
      'Combine all vegetables in a large bowl',
      'Whisk together olive oil and balsamic vinegar',
      'Drizzle dressing over salad and toss gently',
      'Season with salt and pepper to taste'
    ],
    usesItems: ['Lettuce', 'Tomatoes', 'Cucumber']
  },
  {
    id: '2',
    name: 'Banana Smoothie',
    cookTime: '5 mins',
    servings: 2,
    difficulty: 'easy',
    ingredients: [
      '2 ripe bananas',
      '1 cup milk of choice',
      '1/2 cup Greek yogurt',
      '1 tbsp honey',
      '1/2 tsp vanilla extract',
      '1/2 cup ice cubes',
      'Pinch of cinnamon (optional)'
    ],
    instructions: [
      'Peel and slice the bananas',
      'Add bananas, milk, and yogurt to blender',
      'Add honey and vanilla extract',
      'Blend until smooth and creamy',
      'Add ice cubes and blend again',
      'Taste and adjust sweetness if needed',
      'Pour into glasses and serve immediately'
    ],
    usesItems: ['Bananas']
  },
  {
    id: '3',
    name: 'Vegetable Stir Fry',
    cookTime: '20 mins',
    servings: 3,
    difficulty: 'medium',
    ingredients: [
      '2 cups mixed vegetables (broccoli, carrots, bell peppers)',
      '2 tbsp vegetable oil',
      '2 cloves garlic, minced',
      '1 tbsp fresh ginger, grated',
      '3 tbsp soy sauce',
      '1 tbsp oyster sauce',
      '1 tsp sesame oil',
      '2 green onions, chopped',
      'Cooked rice for serving'
    ],
    instructions: [
      'Prepare all vegetables by cutting into bite-sized pieces',
      'Heat vegetable oil in a large wok or skillet over high heat',
      'Add garlic and ginger, stir-fry for 30 seconds',
      'Add harder vegetables first (carrots, broccoli) and cook for 2-3 minutes',
      'Add softer vegetables (bell peppers) and cook for another 2 minutes',
      'Mix soy sauce, oyster sauce, and sesame oil in a small bowl',
      'Pour sauce over vegetables and toss to coat',
      'Garnish with green onions and serve over rice'
    ],
    usesItems: ['Broccoli', 'Carrots', 'Bell Peppers']
  }
];