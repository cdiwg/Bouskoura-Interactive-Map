import React from 'react';
import type { LocationType } from '../data/locations';

interface LocationListProps {
  locations: LocationType[];
  onLocationSelect: (location: LocationType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const LocationList: React.FC<LocationListProps> = ({ 
  locations, 
  onLocationSelect, 
  searchQuery, 
  onSearchChange 
}) => {
  return (
    <div className="location-list-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search places..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="locations-scroll-area">
        {locations.length === 0 ? (
          <div className="no-results">No places found</div>
        ) : (
          locations.map((loc) => (
            <div 
              key={loc.id} 
              className="location-item"
              onClick={() => onLocationSelect(loc)}
            >
              <div className="location-item-header">
                <span className="location-title">{loc.title}</span>
                <span className={`category-dot ${loc.category}`}></span>
              </div>
              <div className="location-subtitle">{loc.arTitle}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LocationList;
