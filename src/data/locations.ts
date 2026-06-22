import type { LatLngExpression } from 'leaflet';

import bskLogo from '../assets/logos/logo-bsk.png';
import gareTrainLogo from '../assets/logos/oncf.jpg'; // Changed to oncf.jpg as requested
import provinceNouaceurLogo from '../assets/logos/province-nouaceur-logo.png';
import santeProtectionLogo from '../assets/logos/sante_protectio_sociale_logo.png';
import taaounWataniLogo from '../assets/logos/taaoun_watani_logo.png';
import tgrLogo from '../assets/logos/TGR_logo.png';
import cnssLogo from '../assets/logos/cnss_logo.png';
import ancfccLogo from '../assets/logos/ancfcc_logo.png';
import forcesAuxiliairesLogo from '../assets/logos/Forces_Auxiliaires.png';
import crownMoroccoLogo from '../assets/logos/crown_morocco.png';
import gendarmerieLogo from '../assets/icons/Royal_Moroccan_gendarmery.png';

export type Category = 'administrative' | 'police' | 'health' | 'pharmacy'|'transport';

export interface LocationType {
  id: string;
  position: LatLngExpression;
  title: string;
  arTitle: string;
  category: Category;
  address?: string;
  phone?: string;
  openingHours?: string;
  website?: string;
  logo?: string;
}

export const locations: LocationType[] = [
  {
    id: 'hopital-mohammed-vi',
    position: [33.46903426694327, -7.642527577668765],
    title: "Hôpital Universitaire International Mohammed VI - Bouskoura",
    arTitle: "مستشفى الجامعي الدولي محمد السادس",
    category: 'health'
  },
  {
    id: 'hopital-approximite',
    position: [33.466257415283614, -7.642749825112459],
    title: "Hôpital d'approximité Bouskoura",
    arTitle: "مستشفى القرب بوسكورة",
    category: 'health',
    logo: santeProtectionLogo
  },
  {
    id: 'centre-hemodialyse',
    position: [33.46286258465699, -7.653740902861045],
    title: "Centre Al Amal d'hémodialyse",
    arTitle: "مركز الأمل لتصفية الدم",
    category: 'health',
    logo: santeProtectionLogo
  },
  {
    id: 'maison-accouchement',
    position: [33.46271937717141, -7.653789182620466],
    title: "Maison d'accouchement bouskoura",
    arTitle: "دار الولادة بوسكورة",
    category: 'health',
    logo: santeProtectionLogo
  },
  {
    id: 'centre-sante',
    position: [33.45297114264332, -7.651379185363033],
    title: "Centre de santé",
    arTitle: "مستوصف / المركز الصحي",
    category: 'health',
    logo: santeProtectionLogo
  },
  {
    id: 'centre-noor-reeducation',
    position: [33.47783961730804, -7.638730335905617],
    title: "Centre Hospitalier Noor de Rééducation",
    arTitle: "مركز نور للاستشفاء وإعادة التأهيل",
    category: 'health'
  },
  {
    id: 'commune-bouskoura',
    position: [33.448470435041294, -7.642474059536533],
    title: "Commune bouskoura",
    arTitle: "جماعة بوسكورة",
    category: 'administrative',
    logo: bskLogo
  },
  {
    id: 'annexe-bouskoura',
    position: [33.44566668988864, -7.648527977894329],
    title: "Annexe administrative de bouskoura",
    arTitle: "الملحقة الإدارية بوسكورة",
    category: 'administrative',
    logo: crownMoroccoLogo
  },
  {
    id: 'province-nouaceur',
    position: [33.46641869709208, -7.63983220522709],
    title: "Province de Nouaceur",
    arTitle: "عمالة اقليم النواصر",
    category: 'administrative',
    logo: provinceNouaceurLogo
  },
  {
    id: 'pachalik-bouskoura',
    position: [33.47156736753825, -7.638474326279948],
    title: "Pachalik de Bouskoura",
    arTitle: "باشوية بوسكورة",
    category: 'administrative',
    logo: crownMoroccoLogo
  },
  {
    id: 'annexe-ville-verte',
    position: [33.489854669206174, -7.6078250693094205],
    title: "Annexe administrative ville verte",
    arTitle: "الملحقة الإدارية المدينة الخضراء",
    category: 'administrative',
    logo: crownMoroccoLogo
  },
  {
    id: 'gendarmerie-ville-verte',
    position: [33.48988145543527, -7.608103743817183],
    title: "Gendarmerie royale Ville Vert",
    arTitle: "الدرك الملكي المدينة الخضراء",
    category: 'police',
    logo: gendarmerieLogo
  },
  {
    id: 'gendarmerie-bouskoura',
    position: [33.463857017121654, -7.641288508983166],
    title: "La gendarmerie royale",
    arTitle: "الدرك الملكي",
    category: 'police',
    logo: gendarmerieLogo
  },
  {
    id: 'delegation-sante-nouaceur',
    position: [33.44587497835771, -7.652542948972759],
    title: "Délégation provinciale de la santé et de la protection sociale Nouaceur",
    arTitle: "المندوبية الاقليمية للصحة والحماية الاجتماعية بإقليم النواصر",
    category: 'administrative',
    logo: santeProtectionLogo
  },
  {
    id: 'entraide-nationale-nouaceur',
    position: [33.4450700405064, -7.6509027288582505],
    title: "Délégation provinciale de l’entraide nationale de Nouaceur",
    arTitle: "المندوبية الإقليمية للتعاون الوطني بإقليم النواصر",
    category: 'administrative',
    logo: taaounWataniLogo
  },
  {
    id: 'tresorerie-nouaceur',
    position: [33.450479297489174, -7.645724782305162],
    title: "Trésorerie provincial de NOUACEUR-TGR",
    arTitle: "الخزينة الإقليمية للنواصر",
    category: 'administrative',
    logo: tgrLogo
  },
  {
    id: 'cnss-bouskoura',
    position: [33.45117753030732, -7.646368512422335],
    title: "CNSS Bouskoura",
    arTitle: "الصندوق الوطني للضمان الإجتماعي بوسكورة",
    category: 'administrative',
    logo: cnssLogo
  },
  {
    id: 'ancfcc-nouaceur',
    position: [33.461057369829135, -7.646012052159378],
    title: "ANCFCC, Agence Nouaceur",
    arTitle: "الوكالة الوطنية للمحافظة العقارية ، وكالة النواصر",
    category: 'administrative',
    logo: ancfccLogo
  },
  {
    id: 'forces-auxiliaires-nouaceur',
    position: [33.46706441419697, -7.639201086740625],
    title: "Commendement Provincial des Forces Auxiliares - Province nouaceur",
    arTitle: "القيادة الإقليمية للقوات المساعدة- عمالة إقليم النواصر",
    category: 'police',
    logo: forcesAuxiliairesLogo
  },
  {
    id: 'annexe-ouled-malek',
    position: [33.49113257063319, -7.662982813288534],
    title: "Annexe administrative de Ouled malek",
    arTitle: "الملحقة الإدارية أولاد مالك",
    category: 'administrative',
    logo: crownMoroccoLogo
  },
  {
    id: 'gare-bouskoura',
    position: [33.461133247601815, -7.651769137024993],
    title: "Gare BOUSKOURA",
    arTitle: "محطة القطار بوسكورة",
    category: 'transport',
    logo: gareTrainLogo
  },
  {
    id: 'pharmacie-cypres',
    position: [33.47607195786696, -7.6028331349931895],
    title: "Pharmacie Les Cyprès Ville Verte",
    arTitle: "صيدلية السرو المدينة الخضراء",
    category: 'pharmacy'
  },
  {
    id: 'pharmacie-golf-city',
    position: [33.475491196834156, -7.606902677969837],
    title: "Pharmacie Golf City",
    arTitle: "صيدلية جولف سيتي",
    category: 'pharmacy'
  },
  {
    id: 'pharmacie-greentown',
    position: [33.49356537811406, -7.602480476024891],
    title: "Pharmacie GREENTOWN Ville verte",
    arTitle: "صيدلية جرين تاون المدينة الخضراء",
    category: 'pharmacy'
  },
  {
    id: 'pharmacie-ijou',
    position: [33.49677655872283, -7.606399748085819],
    title: "PHARMACIE IJOU",
    arTitle: "صيدلية إيجو",
    category: 'pharmacy'
  },
  {
    id: 'pharmacie-coeur-bouskoura',
    position: [33.500006684889655, -7.6089257674707085],
    title: "Pharmacie Cœur de Bouskoura - Parapharmacie - VILLE VERTE",
    arTitle: "صيدلية قلب بوسكورة - المدينة الخضراء",
    category: 'pharmacy'
  },
  {
    id: 'pharmacie-la-foret',
    position: [33.48310376536093, -7.6244821718896505],
    title: "Pharmacie la Forêt Ville Verte",
    arTitle: "صيدلية الغابة المدينة الخضراء",
    category: 'pharmacy'
  },
  {
    id: 'pharmacie-garden',
    position: [33.486851441738075, -7.62300947682995],
    title: "Pharmacie Garden Bouskoura",
    arTitle: "صيدلية جاردن بوسكورة",
    category: 'pharmacy'
  },
  {
    id: 'pharmacie-laplaza',
    position: [33.48810700325669, -7.6184675570032026],
    title: "Pharmacie laplaza de bouskoura",
    arTitle: "صيدلية لابلازا بوسكورة",
    category: 'pharmacy'
  },
  {
    id: 'pharmacie-palmeraie',
    position: [33.48952906439674, -7.606964969517408],
    title: "Pharmacie palmeraie bouskoura",
    arTitle: "صيدلية بالمري بوسكورة",
    category: 'pharmacy'
  },
  {
    id: 'pharmacie-joyaux',
    position: [33.490951803692376, -7.618356874057871],
    title: "Pharmacie les Joyaux de Bouskoura",
    arTitle: "صيدلية جواهر بوسكورة",
    category: 'pharmacy'
  },
  {
    id: 'pharmacie-bo-village',
    position: [33.481041261668125, -7.6381649036693124],
    title: "Pharmacie & Parapharmacie Bô Village",
    arTitle: "صيدلية بو فيلاج",
    category: 'pharmacy'
  }
];
