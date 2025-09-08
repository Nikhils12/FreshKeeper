import React from 'react';
import { Search, Filter } from 'lucide-react';
import { FoodCategory, StorageLocation } from '../types';

interface FilterBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: FoodCategory | 'all';
  onCategoryChange: (category: FoodCategory | 'all') => void;
  selectedLocation: StorageLocation | 'all';
  onLocationChange: (location: StorageLocation | 'all') => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLocation,
  onLocationChange
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search your inventory..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value as FoodCategory | 'all')}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            >
              <option value="all">All Categories</option>
              {Object.values(FoodCategory).map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value as StorageLocation | 'all')}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
          >
            <option value="all">All Locations</option>
            {Object.values(StorageLocation).map(location => (
              <option key={location} value={location}>
                {location.charAt(0).toUpperCase() + location.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};