import React from 'react';
import type { LocationType } from '../data/locations';

interface MarkerInfoCardProps {
  location: LocationType;
}

const MarkerInfoCard: React.FC<MarkerInfoCardProps> = ({ location }) => {
  const { title, arTitle, category, address, phone, openingHours } = location;

  const handleLocate = () => {
    let lat, lng;
    if (Array.isArray(location.position)) {
        [lat, lng] = location.position;
    } else {
        const pos = location.position as { lat: number; lng: number };
        lat = pos.lat;
        lng = pos.lng;
    }
    
    // Open in Google Maps
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  const handleShare = async () => {
    let lat, lng;
    if (Array.isArray(location.position)) {
        [lat, lng] = location.position;
    } else {
        const pos = location.position as { lat: number; lng: number };
        lat = pos.lat;
        lng = pos.lng;
    }

    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    const shareData = {
      title: title,
      text: `${title} - ${arTitle}`,
      url: url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert('Location link copied to clipboard!');
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
        case 'administrative': return '#607D8B';
        case 'police': return '#1565C0';
        case 'health': return '#D32F2F';
        case 'pharmacy': return '#4CAF50';
        default: return '#333';
    }
  };

  const getCategoryLabel = (cat: string) => {
      switch (cat) {
          case 'administrative': return 'Administration';
          case 'police': return 'Security';
          case 'health': return 'Health';
          case 'pharmacy': return 'Pharmacy';
          default: return 'Location';
      }
  };

  return (
    <div className="marker-info-card">
      <div className="card-header" style={{ borderLeft: `4px solid ${getCategoryColor(category)}` }}>
        {location.logo && (
            <div className="logo-container" style={{ textAlign: 'center', marginBottom: '10px' }}>
                <img 
                    src={location.logo} 
                    alt={`${title} logo`} 
                    style={{ maxHeight: '80px', maxWidth: '100%', objectFit: 'contain' }} 
                />
            </div>
        )}
        <span className="category-badge" style={{ backgroundColor: getCategoryColor(category) }}>
            {getCategoryLabel(category)}
        </span>
        <h3 className="card-title">{title}</h3>
        <h4 className="card-subtitle">{arTitle}</h4>
      </div>
      
      <div className="card-body">
        {address && (
            <div className="info-row">
                <span className="icon">📍</span>
                <span className="text">{address}</span>
            </div>
        )}
        {phone && (
            <div className="info-row">
                <span className="icon">📞</span>
                <a href={`tel:${phone}`} className="link">{phone}</a>
            </div>
        )}
        {openingHours && (
            <div className="info-row">
                <span className="icon">🕒</span>
                <span className="text">{openingHours}</span>
            </div>
        )}
        {!address && !phone && !openingHours && (
            <div className="info-placeholder">
                <small>Tap 'Locate' to view details in map app.</small>
            </div>
        )}
      </div>

      <div className="card-actions">
        <button onClick={handleLocate} className="action-btn locate-btn">
            <span className="btn-icon">🗺️</span> Locate
        </button>
        <button onClick={handleShare} className="action-btn share-btn">
            <span className="btn-icon">📤</span> Share
        </button>
      </div>
    </div>
  );
};

export default MarkerInfoCard;
