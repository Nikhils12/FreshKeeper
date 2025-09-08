import React from 'react';
import { TrendingDown, AlertTriangle, CheckCircle, Package } from 'lucide-react';

interface InventoryStatsProps {
  stats: {
    fresh: number;
    expiringSoon: number;
    expired: number;
    totalItems: number;
  };
}

export const InventoryStats: React.FC<InventoryStatsProps> = ({ stats }) => {
  const wasteReductionPercentage = stats.totalItems > 0 
    ? Math.round((stats.fresh / stats.totalItems) * 100) 
    : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Items</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalItems}</p>
          </div>
          <Package className="h-8 w-8 text-blue-500" />
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Fresh Items</p>
            <p className="text-2xl font-bold text-green-600">{stats.fresh}</p>
          </div>
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
            <p className="text-2xl font-bold text-orange-600">{stats.expiringSoon}</p>
          </div>
          <AlertTriangle className="h-8 w-8 text-orange-500" />
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Waste Reduction</p>
            <p className="text-2xl font-bold text-emerald-600">{wasteReductionPercentage}%</p>
          </div>
          <TrendingDown className="h-8 w-8 text-emerald-500" />
        </div>
      </div>
    </div>
  );
};