import React from 'react';
import { type Category } from '../data/locations';

interface FilterControlsProps {
  activeCategories: Category[];
  onToggleCategory: (category: Category) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ activeCategories, onToggleCategory }) => {
  const categories: { id: Category; label: string; iconColor: string }[] = [
    { id: 'administrative', label: 'Administration', iconColor: '#607D8B' },
    { id: 'police', label: 'Security / Police', iconColor: '#1565C0' },
    { id: 'health', label: 'Health / Santé', iconColor: '#D32F2F' },
    { id: 'pharmacy', label: 'Pharmacy / Pharmacie', iconColor: '#4CAF50' },
    { id: 'transport', label: 'Transport / Transport', iconColor: '#FF9800' },
  ];

  return (
    <div className="filter-controls">
      <h4>Filter Layers</h4>
      <div className="filter-list">
        {categories.map((cat) => (
          <label key={cat.id} className="filter-item">
            <input
              type="checkbox"
              checked={activeCategories.includes(cat.id)}
              onChange={() => onToggleCategory(cat.id)}
            />
            <span className="color-dot" style={{ backgroundColor: cat.iconColor }}></span>
            <span className="filter-label">{cat.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterControls;
