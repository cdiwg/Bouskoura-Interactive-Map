import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, GeoJSON, useMap } from 'react-leaflet';

import L from 'leaflet';
import type { LatLngExpression } from 'leaflet';
import { adminIcon, gendarmerieIcon, healthIcon, pharmacyIcon, defaultIcon, communeIcon, trainStationIcon, provinceNouaceurIcon, delegationSanteIcon, entraideIcon, tgrIcon, cnssIcon, ancfccIcon, crownIcon, forcesAuxiliairesIcon } from '../utils/mapIcons';
import type { LocationType } from '../data/locations';
import { bouskouraBoundary } from '../data/boundary';
import MarkerInfoCard from './MarkerInfoCard';

// Fix for default markers in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapViewProps {
  locations: LocationType[];
  selectedLocation?: LocationType | null;
}

// Component to handle map interactions like flyTo
const MapController = ({ selectedLocation }: { selectedLocation?: LocationType | null }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.flyTo(selectedLocation.position, 16, {
        animate: true,
        duration: 1.5
      });
    }
  }, [selectedLocation, map]);

  return null;
};

const MapView = ({ locations, selectedLocation }: MapViewProps) => {
  // Approximate coordinates for Bouskoura center
  const position: LatLngExpression = [33.45, -7.65]; 

  const getIcon = (location: LocationType) => {
    if (location.id === 'commune-bouskoura') {
      return communeIcon;
    }
    
    if (location.id === 'gare-bouskoura') {
      return trainStationIcon;
    }

    if (location.id === 'province-nouaceur') {
      return provinceNouaceurIcon;
    }

    if (location.id === 'delegation-sante-nouaceur') return delegationSanteIcon;
    if (location.id === 'entraide-nationale-nouaceur') return entraideIcon;
    if (location.id === 'tresorerie-nouaceur') return tgrIcon;
    if (location.id === 'cnss-bouskoura') return cnssIcon;
    if (location.id === 'ancfcc-nouaceur') return ancfccIcon;

    if (location.id === 'forces-auxiliaires-nouaceur') return forcesAuxiliairesIcon;

    if (location.id.includes('pachalik') || location.id.includes('annexe')) {
      return crownIcon;
    }

    switch (location.category) {
      case 'administrative':
        return adminIcon;
      case 'police': // Handle both just in case
        return gendarmerieIcon;
      case 'health':
        return healthIcon;
      case 'pharmacy':
        return pharmacyIcon;
      default:
        return defaultIcon;
    }
  };

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      scrollWheelZoom={true} 
      style={{ height: '100%', width: '100%' }}
    >
      <MapController selectedLocation={selectedLocation} />
      
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Plan (OpenStreetMap)">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        
        <LayersControl.BaseLayer name="Satellite (Esri World Imagery)">
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </LayersControl.BaseLayer>

        <LayersControl.Overlay checked name="Commune Boundary">
          <GeoJSON 
            data={bouskouraBoundary} 
            style={{ 
              color: '#3388ff', 
              weight: 3, 
              opacity: 0.7, 
              fillColor: '#3388ff', 
              fillOpacity: 0.1,
              dashArray: '5, 10'
            }} 
          />
        </LayersControl.Overlay>
      </LayersControl>
      
      {locations.map((loc) => (
        <Marker 
          key={loc.id} 
          position={loc.position} 
          icon={getIcon(loc)}
          ref={(ref) => {
            if (ref && selectedLocation && loc.id === selectedLocation.id) {
              setTimeout(() => ref.openPopup(), 1500); // Open popup after flyTo animation
            }
          }}
        >
          <Popup className="custom-popup" maxWidth={320} minWidth={280}>
            <MarkerInfoCard location={loc} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
