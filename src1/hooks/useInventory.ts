import { useState, useEffect, useMemo } from 'react';
import { FoodItem, FoodCategory, StorageLocation } from '../types';
import { mockInventory } from '../data/mockData';
import { getFreshnessStatus, getDaysUntilExpiry } from '../utils/dateUtils';

export const useInventory = () => {
  const [inventory, setInventory] = useState<FoodItem[]>(mockInventory);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<StorageLocation | 'all'>('all');

  const addItem = (item: Omit<FoodItem, 'id' | 'addedDate'>) => {
    const newItem: FoodItem = {
      ...item,
      id: Date.now().toString(),
      addedDate: new Date()
    };
    setInventory(prev => [...prev, newItem]);
  };

  const removeItem = (id: string) => {
    setInventory(prev => prev.filter(item => item.id !== id));
  };

  const updateItem = (id: string, updates: Partial<FoodItem>) => {
    setInventory(prev => 
      prev.map(item => item.id === id ? { ...item, ...updates } : item)
    );
  };

  const filteredInventory = useMemo(() => {
    return inventory.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesLocation = selectedLocation === 'all' || item.location === selectedLocation;
      
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [inventory, searchTerm, selectedCategory, selectedLocation]);

  const inventoryStats = useMemo(() => {
    const fresh = inventory.filter(item => getFreshnessStatus(item.expiryDate) === 'fresh').length;
    const expiringSoon = inventory.filter(item => getFreshnessStatus(item.expiryDate) === 'expiring_soon').length;
    const expired = inventory.filter(item => getFreshnessStatus(item.expiryDate) === 'expired').length;
    const totalItems = inventory.length;

    return { fresh, expiringSoon, expired, totalItems };
  }, [inventory]);

  const expiringItems = useMemo(() => {
    return inventory
      .filter(item => {
        const status = getFreshnessStatus(item.expiryDate);
        return status === 'expiring_soon' || status === 'expired';
      })
      .sort((a, b) => getDaysUntilExpiry(a.expiryDate) - getDaysUntilExpiry(b.expiryDate));
  }, [inventory]);

  return {
    inventory: filteredInventory,
    allInventory: inventory,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    addItem,
    removeItem,
    updateItem,
    inventoryStats,
    expiringItems
  };
};