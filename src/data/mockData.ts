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
    name: 'Banana Smoothie Bowl',
    description: 'A healthy and delicious breakfast bowl perfect for using ripe bananas',
    ingredients: ['bananas', 'yogurt', 'granola', 'honey'],
    cookTime: 10,
    difficulty: 'Easy'
  },
  {
    id: '2',
    name: 'Greek Yogurt Parfait',
    description: 'Layer yogurt with fresh fruits and granola for a nutritious treat',
    ingredients: ['greek yogurt', 'berries', 'granola', 'honey'],
    cookTime: 5,
    difficulty: 'Easy'
  },
  {
    id: '3',
    name: 'Tomato Spinach Pasta',
    description: 'Quick pasta dish using fresh tomatoes and spinach',
    ingredients: ['pasta', 'tomatoes', 'spinach', 'garlic', 'olive oil'],
    cookTime: 20,
    difficulty: 'Easy'
  },
  {
    id: '4',
    name: 'Spinach and Tomato Omelet',
    description: 'Fluffy omelet packed with fresh vegetables',
    ingredients: ['eggs', 'spinach', 'tomatoes', 'cheese', 'butter'],
    cookTime: 15,
    difficulty: 'Medium'
  },
  {
    id: '5',
    name: 'French Toast',
    description: 'Classic breakfast using day-old bread',
    ingredients: ['bread', 'eggs', 'milk', 'cinnamon', 'butter'],
    cookTime: 15,
    difficulty: 'Easy'
  }
];