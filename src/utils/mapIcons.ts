
import L from 'leaflet';

// ===================================================================================
// 🎨 MARKER ICON CONFIGURATION
// ===================================================================================
// To modify icons:
// 1. COLORS: Change the hex codes in the 'createCustomIcon' calls at the bottom.
// 2. SHAPES: Replace the 'd' attribute string in the path variables below.
//    (You can get new paths from sites like icons.getbootstrap.com or materialdesignicons.com)
// ===================================================================================

// Function to create a custom SVG icon
const createCustomIcon = (color: string, path: string) => {
  const svg = `
  <svg width="36" height="46" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Pin Shape -->
    <path d="M16 0C7.16344 0 0 7.16344 0 16C0 26.5 16 42 16 42C16 42 32 26.5 32 16C32 7.16344 24.8366 0 16 0Z" fill="${color}" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.3))"/>
    
    <!-- White Circle Background -->
    <circle cx="16" cy="16" r="10" fill="white"/>
    
    <!-- Inner Icon Symbol -->
    <path transform="translate(8, 8) scale(0.65)" d="${path}" fill="${color}"/>
  </svg>`;

  return L.divIcon({
    className: 'custom-pin-icon',
    html: svg,
    iconSize: [36, 46], // Slightly larger for better visibility
    iconAnchor: [18, 46],
    popupAnchor: [0, -46],
  });
};

// 🛡️ Security/Police (Shield with Star) - Google Maps Style
const policePath = "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z M12 7l1.7 4.1h4.3l-3.3 2.6 1 4.3-3.7-2.6-3.7 2.6 1-4.3-3.3-2.6h4.3L12 7z";

// 🏥 Health (Medical Cross/H)
// const hospitalPath = "M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z";

// ===================================================================================
// 🚀 EXPORTED ICONS
// ===================================================================================

// Administrative: Gray (Official/Government) - Custom SVG provided by user
const adminSvg = `
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.3))"> 
   <!-- Pin --> 
   <path 
     d="M32 2C20.4 2 11 11.4 11 23c0 14.6 21 39 21 39s21-24.4 21-39C53 11.4 43.6 2 32 2z" 
     fill="#6b7280" 
   /> 
  
   <!-- Inner white circle --> 
   <circle cx="32" cy="24" r="13" fill="#ffffff"/> 
  
   <!-- Smaller building icon, moved up --> 
   <svg x="20" y="10" width="24" height="24" viewBox="0 0 640 640" xmlns="http://www.w3.org/2000/svg"> 
     <path fill="#6b7280" d="M335.9 84.2C326.1 78.6 314 78.6 304.1 84.2L80.1 212.2C67.5 219.4 61.3 234.2 65 248.2C68.7 262.2 81.5 272 96 272L128 272L128 480L128 480L76.8 518.4C68.7 524.4 64 533.9 64 544C64 561.7 78.3 576 96 576L544 576C561.7 576 576 561.7 576 544C576 533.9 571.3 524.4 563.2 518.4L512 480L512 272L544 272C558.5 272 571.2 262.2 574.9 248.2C578.6 234.2 572.4 219.4 559.8 212.2L335.8 84.2zM464 272L464 480L400 480L400 272L464 272zM352 272L352 480L288 480L288 272L352 272zM240 272L240 480L176 480L176 272L240 272zM320 160C337.7 160 352 174.3 352 192C352 209.7 337.7 224 320 224C302.3 224 288 209.7 288 192C288 174.3 302.3 160 320 160z"/> 
   </svg> 
</svg>`;

export const adminIcon = L.divIcon({
    className: 'custom-pin-icon',
    html: adminSvg,
    iconSize: [40, 40],
    iconAnchor: [20, 39],
    popupAnchor: [0, -39],
});

import gendarmeriePng from '../assets/icons/Royal_Moroccan_gendarmery.png';
import bskLogoPng from '../assets/logos/logo-bsk.png';
import gareTrainPng from '../assets/logos/oncf.jpg';
import provinceNouaceurPng from '../assets/logos/province-nouaceur-logo.png';
import santeProtectionSocialePng from '../assets/logos/sante_protectio_sociale_logo.png';
import taaounWataniPng from '../assets/logos/taaoun_watani_logo.png';
import tgrPng from '../assets/logos/TGR_logo.png';
import cnssPng from '../assets/logos/cnss_logo.png';
import ancfccPng from '../assets/logos/ancfcc_logo.png';
import crownMoroccoPng from '../assets/logos/crown_morocco.png';
import forcesAuxiliairesPng from '../assets/logos/Forces_Auxiliaires.png';

export const gendarmerieIcon = L.icon({
    iconUrl: gendarmeriePng,
    iconSize: [40, 40], // Adjust size as needed
    iconAnchor: [20, 20], // Center anchor if it's a round logo, or adjust for pin shape
    popupAnchor: [0, -20],
    className: 'custom-png-icon' // Optional class for extra styling
});

export const communeIcon = L.icon({
    iconUrl: bskLogoPng,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'custom-png-icon'
});

export const trainStationIcon = L.icon({
    iconUrl: gareTrainPng,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'custom-png-icon'
});

export const provinceNouaceurIcon = L.icon({
    iconUrl: provinceNouaceurPng,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'custom-png-icon'
});

export const delegationSanteIcon = L.icon({
    iconUrl: santeProtectionSocialePng,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'custom-png-icon'
});

export const entraideIcon = L.icon({
    iconUrl: taaounWataniPng,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'custom-png-icon'
});

export const tgrIcon = L.icon({
    iconUrl: tgrPng,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'custom-png-icon'
});

export const cnssIcon = L.icon({
    iconUrl: cnssPng,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'custom-png-icon'
});

export const ancfccIcon = L.icon({
    iconUrl: ancfccPng,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'custom-png-icon'
});

export const crownIcon = L.icon({
    iconUrl: crownMoroccoPng,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'custom-png-icon'
});

export const forcesAuxiliairesIcon = L.icon({
    iconUrl: forcesAuxiliairesPng,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
    className: 'custom-png-icon'
});

// Security: Dark Blue (Police/Gendarmerie)
export const securityIcon = createCustomIcon('#1565C0', policePath);

// Health: Red (Hospital/Emergency) - Custom SVG provided by user
const healthSvg = `
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.3))">
   <!-- Pin -->
   <path 
     d="M32 2C20.4 2 11 11.4 11 23c0 14.6 21 39 21 39s21-24.4 21-39C53 11.4 43.6 2 32 2z" 
     fill="#e11d48" 
   />
   <!-- Inner circle -->
   <circle cx="32" cy="24" r="12" fill="#ffffff"/>
   <!-- H letter -->
   <rect x="26" y="18" width="3" height="12" fill="#e11d48"/>
   <rect x="35" y="18" width="3" height="12" fill="#e11d48"/>
   <rect x="26" y="23" width="12" height="3" fill="#e11d48"/>
</svg>`;

export const healthIcon = L.divIcon({
    className: 'custom-pin-icon',
    html: healthSvg,
    iconSize: [40, 40],
    iconAnchor: [20, 39],
    popupAnchor: [0, -39],
});

// 💊 Pharmacy (Mortar & Pestle / Cross) - Standard Medical Cross
// const pharmacyPath = "M10.5 2h3v8h8v3h-8v8h-3v-8h-8v-3h8v-8z";

// Pharmacy: Green (Medical/Pharmacy) - Custom SVG provided by user
const pharmacySvg = `
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.3))">
   <!-- Pin -->
   <path 
     d="M32 2C20.4 2 11 11.4 11 23c0 14.6 21 39 21 39s21-24.4 21-39C53 11.4 43.6 2 32 2z" 
     fill="#16a34a" 
   />
  
   <!-- Inner white circle -->
   <circle cx="32" cy="24" r="13" fill="#ffffff"/>
  
   <!-- Smaller green crescent -->
   <circle cx="30.5" cy="24" r="6.5" fill="#16a34a"/>
   <circle cx="33.8" cy="24" r="5" fill="#ffffff"/>
  
   <!-- Medical cross -->
   <rect x="34" y="20" width="2.5" height="8" fill="#16a34a"/>
   <rect x="31" y="23" width="8" height="2.5" fill="#16a34a"/>
</svg>`;

export const pharmacyIcon = L.divIcon({
    className: 'custom-pin-icon',
    html: pharmacySvg,
    iconSize: [40, 40],
    iconAnchor: [20, 39],
    popupAnchor: [0, -39],
});

// Default Marker Fallback
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export const defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
