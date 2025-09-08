export interface FoodItem {
  id: string;
  name: string;
  category: FoodCategory;
  expiryDate: Date;
  addedDate: Date;
  quantity: number;
  unit: string;
  location: StorageLocation;
  image?: string;
}

export enum FoodCategory {
  FRUITS = 'fruits',
  VEGETABLES = 'vegetables',
  DAIRY = 'dairy',
  MEAT = 'meat',
  GRAINS = 'grains',
  BEVERAGES = 'beverages',
  CONDIMENTS = 'condiments',
  FROZEN = 'frozen',
  PANTRY = 'pantry'
}

export enum StorageLocation {
  FRIDGE = 'fridge',
  FREEZER = 'freezer',
  PANTRY = 'pantry',
  COUNTER = 'counter'
}

export enum FreshnessStatus {
  FRESH = 'fresh',
  EXPIRING_SOON = 'expiring_soon',
  EXPIRED = 'expired'
}

export interface Recipe {
  id: string;
  name: string;
  cookTime: string;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: string[];
  instructions: string[];
  ingredients: string[];
  cookTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image?: string;
}