export const getDaysUntilExpiry = (expiryDate: Date): number => {
  const today = new Date();
  const expiry = new Date(expiryDate);
  const diffTime = expiry.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const getFreshnessStatus = (expiryDate: Date): 'fresh' | 'expiring_soon' | 'expired' => {
  const daysUntil = getDaysUntilExpiry(expiryDate);
  
  if (daysUntil < 0) return 'expired';
  if (daysUntil <= 3) return 'expiring_soon';
  return 'fresh';
};

export const formatExpiryDate = (date: Date): string => {
  const today = new Date();
  const expiry = new Date(date);
  const daysUntil = getDaysUntilExpiry(date);
  
  if (daysUntil === 0) return 'Expires today';
  if (daysUntil === 1) return 'Expires tomorrow';
  if (daysUntil < 0) return `Expired ${Math.abs(daysUntil)} days ago`;
  if (daysUntil <= 7) return `Expires in ${daysUntil} days`;
  
  return expiry.toLocaleDateString();
};

export const sortByExpiry = (items: any[]): any[] => {
  return [...items].sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime());
};