import React from 'react';
import { FoodItem } from '../types';
import { ItemCard } from './ItemCard';
import { sortByExpiry } from '../utils/dateUtils';

interface InventoryListProps {
  items: FoodItem[];
  onRemoveItem: (id: string) => void;
}

export const InventoryList: React.FC<InventoryListProps> = ({ items, onRemoveItem }) => {
  const sortedItems = sortByExpiry(items);
  
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🍎</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">No items found</h3>
          <p className="text-gray-600">Add some items to your inventory to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Your Inventory</h2>
        <span className="text-sm text-gray-500">{items.length} items</span>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onRemove={onRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};