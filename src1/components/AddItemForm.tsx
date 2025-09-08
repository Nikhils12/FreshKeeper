import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { FoodCategory, StorageLocation } from '../types';

interface AddItemFormProps {
  onAddItem: (item: any) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: FoodCategory.VEGETABLES,
    expiryDate: '',
    quantity: 1,
    unit: 'pieces',
    location: StorageLocation.FRIDGE
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddItem({
      ...formData,
      expiryDate: new Date(formData.expiryDate)
    });
    setFormData({
      name: '',
      category: FoodCategory.VEGETABLES,
      expiryDate: '',
      quantity: 1,
      unit: 'pieces',
      location: StorageLocation.FRIDGE
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-gray-800">Add New Item</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              placeholder="e.g., Apples, Chicken, Bread"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <input
                type="number"
                required
                min="1"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
              <select
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              >
                <option value="pieces">Pieces</option>
                <option value="lbs">Pounds</option>
                <option value="oz">Ounces</option>
                <option value="kg">Kilograms</option>
                <option value="g">Grams</option>
                <option value="container">Container</option>
                <option value="bag">Bag</option>
                <option value="bottle">Bottle</option>
                <option value="can">Can</option>
                <option value="jar">Jar</option>
                <option value="loaf">Loaf</option>
                <option value="gallon">Gallon</option>
                <option value="cups">Cups</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as FoodCategory })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            >
              {Object.values(FoodCategory).map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Storage Location</label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value as StorageLocation })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            >
              {Object.values(StorageLocation).map(location => (
                <option key={location} value={location}>
                  {location.charAt(0).toUpperCase() + location.slice(1)}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
            <input
              type="date"
              required
              value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Plus size={16} />
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};