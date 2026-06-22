import { useState, useMemo } from 'react';
import FilterControls from './components/FilterControls';
import Logo from './components/Logo';
import MapView from './components/MapView';
import DataTreasureHunt from './components/DataTreasureHunt';
import SidebarToggle from './components/SidebarToggle';
import LocationList from './components/LocationList';
import { locations, type Category, type LocationType } from './data/locations';

type ViewType = 'map' | 'data';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState<ViewType>('map');
  const [activeCategories, setActiveCategories] = useState<Category[]>(['administrative', 'police', 'health', 'pharmacy', 'transport']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);

  const toggleCategory = (category: Category) => {
    setActiveCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleLocationSelect = (location: LocationType) => {
    setSelectedLocation(location);
    // On mobile, close sidebar when a location is selected to show the map
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const filteredLocations = useMemo(() => {
    return locations.filter(loc => {
      const matchesCategory = activeCategories.includes(loc.category);
      const matchesSearch = searchQuery === '' || 
        loc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        loc.arTitle.includes(searchQuery);
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategories, searchQuery]);

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <SidebarToggle 
            isOpen={isSidebarOpen} 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          />
          <div className="logo-container">
            <Logo size={28} />
            <h1>Bouskoura Interactive Map</h1>
          </div>
        </div>
        <div className="header-right">
          <div className="view-toggle">
            <button 
              className={`view-btn ${currentView === 'map' ? 'active' : ''}`}
              onClick={() => setCurrentView('map')}
            >
              🗺️ Map
            </button>
            <button 
              className={`view-btn ${currentView === 'data' ? 'active' : ''}`}
              onClick={() => setCurrentView('data')}
            >
              📊 Data
            </button>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        {currentView === 'map' ? (
          <>
            <aside className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
              <div className="sidebar-content">
                <div className="sidebar-header-wrapper sidebar-header-mobile">
                  <h3>Layers & Places</h3>
                  <button className="close-sidebar-btn" onClick={() => setIsSidebarOpen(false)}>×</button>
                </div>
                
                <LocationList 
                  locations={filteredLocations}
                  onLocationSelect={handleLocationSelect}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />
                
                <div className="filter-section">
                  <FilterControls 
                    activeCategories={activeCategories} 
                    onToggleCategory={toggleCategory} 
                  />
                </div>
              </div>
            </aside>
            
            {isSidebarOpen && (
              <div 
                className="sidebar-overlay" 
                onClick={() => setIsSidebarOpen(false)}
              />
            )}
            
            <div className="map-container">
              <MapView 
                locations={filteredLocations} 
                selectedLocation={selectedLocation}
              />
            </div>
          </>
        ) : (
          <div className="data-view-container" style={{ width: '100%', overflow: 'auto' }}>
            <DataTreasureHunt />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
