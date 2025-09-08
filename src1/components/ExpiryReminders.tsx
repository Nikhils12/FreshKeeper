import React from 'react';
import { Bell, Clock, AlertCircle } from 'lucide-react';
import { FoodItem } from '../types';
import { getDaysUntilExpiry, formatExpiryDate } from '../utils/dateUtils';

interface ExpiryRemindersProps {
  expiringItems: FoodItem[];
}

export const ExpiryReminders: React.FC<ExpiryRemindersProps> = ({ expiringItems }) => {
  if (expiringItems.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="h-5 w-5 text-green-600" />
          <h2 className="text-lg font-semibold text-gray-800">Expiry Reminders</h2>
        </div>
        <div className="text-center py-8">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
          <p className="text-gray-600">All your items are fresh! No urgent reminders.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-4">
        <Bell className="h-5 w-5 text-orange-600" />
        <h2 className="text-lg font-semibold text-gray-800">Expiry Reminders</h2>
        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full font-medium">
          {expiringItems.length}
        </span>
      </div>
      
      <div className="space-y-3">
        {expiringItems.slice(0, 5).map((item) => {
          const daysUntil = getDaysUntilExpiry(item.expiryDate);
          const isExpired = daysUntil < 0;
          
          return (
            <div 
              key={item.id}
              className={`p-3 rounded-lg border-l-4 ${
                isExpired 
                  ? 'bg-red-50 border-red-400' 
                  : 'bg-orange-50 border-orange-400'
              } transition-all duration-200 hover:shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {isExpired ? (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  ) : (
                    <Clock className="h-4 w-4 text-orange-500" />
                  )}
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity} {item.unit} • {item.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    isExpired ? 'text-red-600' : 'text-orange-600'
                  }`}>
                    {formatExpiryDate(item.expiryDate)}
                  </p>
                  {!isExpired && (
                    <p className="text-xs text-gray-500">{daysUntil} day{daysUntil !== 1 ? 's' : ''} left</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        
        {expiringItems.length > 5 && (
          <div className="text-center pt-2">
            <p className="text-sm text-gray-500">
              +{expiringItems.length - 5} more items need attention
            </p>
          </div>
        )}
      </div>
    </div>
  );
};