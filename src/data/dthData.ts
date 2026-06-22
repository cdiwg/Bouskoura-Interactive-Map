
export interface MetaDataCollecte {
  DTH_ID: string;
  Zone: string;
  Collecteur: string;
  Date_Collecte: string;
  Methode: string;
  Type_Source: string;
  Usage_Presume: string;
  Consentement: string;
  Commentaires: string;
}

export interface Source {
  Source_ID: string;
  Nom_Source: string;
  Type_Source: string;
  URL_Source: string;
  Contact_Source: string;
  Statut_Source: string;
  Derniere_MAJ: string;
}

export interface DonneeBrute {
  Data_ID: string;
  Categorie: string;
  Nom_Entite: string;
  Adresse: string;
  Quartier: string;
  Latitude: number;
  Longitude: number;
  Telephone: string;
  Horaires: string;
  Garde: string;
  URL_Reference: string;
  Fiabilite: string;
  Observations: string;
}

export interface Validation {
  Data_ID: string;
  Validateur: string;
  Date_Validation: string;
  Statut: string;
  Commentaires: string;
}

export interface ConformiteCDIWG {
  Champ: string;
  Valeur: string;
}

export const dthData = {
  metadata: [
    {
      DTH_ID: "DTH-BSK-2026-001",
      Zone: "Ville Verte",
      Collecteur: "YF",
      Date_Collecte: "2026-01-06",
      Methode: "Terrain",
      Type_Source: "Institutionnelle",
      Usage_Presume: "Information publique",
      Consentement: "Oui",
      Commentaires: "Collecte initiale sur le boulevard principal"
    }
  ] as MetaDataCollecte[],
  
  sources: [
    {
      Source_ID: "SRC-001",
      Nom_Source: "Commune Bouskoura",
      Type_Source: "Commune",
      URL_Source: "https://bouskoura.ma",
      Contact_Source: "contact@bouskoura.ma",
      Statut_Source: "Officiel",
      Derniere_MAJ: "2025-12-01"
    },
    {
      Source_ID: "SRC-002",
      Nom_Source: "Syndicat Pharmaciens",
      Type_Source: "Association",
      URL_Source: "N/A",
      Contact_Source: "+212522000000",
      Statut_Source: "À vérifier",
      Derniere_MAJ: "2026-01-05"
    }
  ] as Source[],

  donneesBrutes: [
    {
      Data_ID: "PH-GARDE-012",
      Categorie: "Pharmacie",
      Nom_Entite: "Pharmacie Al Amal",
      Adresse: "Av. X, Ville Verte",
      Quartier: "Ville Verte",
      Latitude: 33.4501,
      Longitude: -7.6392,
      Telephone: "0522xxxx",
      Horaires: "24h",
      Garde: "Oui",
      URL_Reference: "—",
      Fiabilite: "Haute",
      Observations: "Confirmé sur place"
    },
    {
      Data_ID: "ADM-005",
      Categorie: "Administration",
      Nom_Entite: "Annexe Administrative",
      Adresse: "Rue des Lilas",
      Quartier: "Bouskoura Centre",
      Latitude: 33.4480,
      Longitude: -7.6400,
      Telephone: "0522123456",
      Horaires: "08:30 - 16:30",
      Garde: "N/A",
      URL_Reference: "https://gov.ma",
      Fiabilite: "Moyenne",
      Observations: "En travaux"
    }
  ] as DonneeBrute[],

  validation: [
    {
      Data_ID: "PH-GARDE-012",
      Validateur: "Admin_01",
      Date_Validation: "2026-01-07",
      Statut: "Validé",
      Commentaires: "RAS"
    }
  ] as Validation[],

  conformite: [
    { Champ: "Collecte_Commerciale", Valeur: "NON" },
    { Champ: "Données_Personnelles", Valeur: "NON" },
    { Champ: "Finalité", Valeur: "Intérêt général" },
    { Champ: "Licence_Présumée", Valeur: "CC BY / Open Data" },
    { Champ: "Projet", Valeur: "Bouskoura.online" },
    { Champ: "Organisation", Valeur: "CDIWG" }
  ] as ConformiteCDIWG[]
};
