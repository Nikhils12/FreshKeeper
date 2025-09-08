import React from 'react';
import { Calendar, MapPin, Trash2, Package } from 'lucide-react';
import { FoodItem } from '../types';
import { getFreshnessStatus, formatExpiryDate, getDaysUntilExpiry } from '../utils/dateUtils';

interface ItemCardProps {
  item: FoodItem;
  onRemove: (id: string) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onRemove }) => {
  const freshnessStatus = getFreshnessStatus(item.expiryDate);
  const daysUntil = getDaysUntilExpiry(item.expiryDate);
  
  const getStatusColors = () => {
    switch (freshnessStatus) {
      case 'fresh':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'expiring_soon':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'expired':
        return 'bg-red-50 border-red-200 text-red-800';
    }
  };

  const getStatusBadge = () => {
    switch (freshnessStatus) {
      case 'fresh':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Fresh</span>;
      case 'expiring_soon':
        return <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">Use Soon</span>;
      case 'expired':
        return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">Expired</span>;
    }
  };

  const getLocationIcon = () => {
    switch (item.location) {
      case 'fridge':
        return '🧊';
      case 'freezer':
        return '❄️';
      case 'pantry':
        return '🏠';
      case 'counter':
        return '🍎';
    }
  };

  return (
    <div className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${getStatusColors()}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
          <div className="flex items-center gap-2 text-sm opacity-75 mb-2">
            <Package size={14} />
            <span>{item.quantity} {item.unit}</span>
            <span className="text-lg">{getLocationIcon()}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {getStatusBadge()}
          <button
            onClick={() => onRemove(item.id)}
            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-white rounded transition-colors duration-200"
            title="Remove item"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{formatExpiryDate(item.expiryDate)}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          <span className="capitalize">{item.location}</span>
        </div>
      </div>
      
      {freshnessStatus === 'expiring_soon' && (
        <div className="mt-3 p-2 bg-orange-100 rounded text-orange-800 text-sm">
          ⚡ Use within {daysUntil} day{daysUntil !== 1 ? 's' : ''} to avoid waste!
        </div>
      )}
      
      {freshnessStatus === 'expired' && (
        <div className="mt-3 p-2 bg-red-100 rounded text-red-800 text-sm">
          ⚠️ This item has expired and should be disposed of safely
        </div>
      )}
    </div>
  );
};