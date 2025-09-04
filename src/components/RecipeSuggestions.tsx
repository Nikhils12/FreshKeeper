import React from 'react';
import { ChefHat, Clock, Star } from 'lucide-react';
import { FoodItem, Recipe } from '../types';
import { mockRecipes } from '../data/mockData';

interface RecipeSuggestionsProps {
  expiringItems: FoodItem[];
}

export const RecipeSuggestions: React.FC<RecipeSuggestionsProps> = ({ expiringItems }) => {
  const getSuggestedRecipes = (): Recipe[] => {
    if (expiringItems.length === 0) return [];
    
    const expiringIngredients = expiringItems.map(item => item.name.toLowerCase());
    
    return mockRecipes.filter(recipe => 
      recipe.ingredients.some(ingredient => 
        expiringIngredients.some(expiring => 
          expiring.includes(ingredient.toLowerCase()) || 
          ingredient.toLowerCase().includes(expiring)
        )
      )
    ).slice(0, 3);
  };

  const suggestedRecipes = getSuggestedRecipes();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (suggestedRecipes.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <ChefHat className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">Recipe Suggestions</h2>
        </div>
        <div className="text-center py-8">
          <ChefHat className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-600">No recipes suggested at the moment.</p>
          <p className="text-sm text-gray-500 mt-1">Add items to your inventory to get personalized suggestions!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <ChefHat className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">Recipe Suggestions</h2>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
          AI Powered
        </span>
      </div>
      
      <div className="space-y-4">
        {suggestedRecipes.map((recipe) => (
          <div 
            key={recipe.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-gray-800">{recipe.name}</h3>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                  {recipe.difficulty}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600">4.5</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">{recipe.description}</p>
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-gray-500">
                <Clock size={14} />
                <span>{recipe.cookTime} min</span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                  <span 
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${
                      expiringItems.some(item => 
                        item.name.toLowerCase().includes(ingredient.toLowerCase()) ||
                        ingredient.toLowerCase().includes(item.name.toLowerCase())
                      ) 
                        ? 'bg-orange-100 text-orange-800 font-medium' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {ingredient}
                  </span>
                ))}
                {recipe.ingredients.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{recipe.ingredients.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          💡 These recipes are suggested based on your items that are expiring soon. Cook them to reduce waste!
        </p>
      </div>
    </div>
  );
};