import React, { useState } from 'react';
import { Plus, Leaf } from 'lucide-react';
import { useInventory } from './hooks/useInventory';
import { InventoryStats } from './components/InventoryStats';
import { FilterBar } from './components/FilterBar';
import { InventoryList } from './components/InventoryList';
import { ExpiryReminders } from './components/ExpiryReminders';
import { RecipeSuggestions } from './components/RecipeSuggestions';
import { AddItemForm } from './components/AddItemForm';

function App() {
  const {
    inventory,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    addItem,
    removeItem,
    inventoryStats,
    expiringItems
  } = useInventory();

  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">FreshKeeper</h1>
                <p className="text-xs text-gray-500">Smart Food Inventory</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsAddFormOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Plus size={16} />
              Add Item
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Dashboard */}
        <InventoryStats stats={inventoryStats} />
        
        {/* Filters */}
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Inventory */}
          <div className="lg:col-span-2">
            <InventoryList
              items={inventory}
              onRemoveItem={removeItem}
            />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <ExpiryReminders expiringItems={expiringItems} />
            <RecipeSuggestions expiringItems={expiringItems} />
          </div>
        </div>
      </main>

      {/* Add Item Modal */}
      <AddItemForm
        isOpen={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
        onAddItem={addItem}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              🌱 Help reduce food waste and save money with smart inventory tracking
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;