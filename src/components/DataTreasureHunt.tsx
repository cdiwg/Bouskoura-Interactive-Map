
import React, { useState } from 'react';
import { dthData } from '../data/dthData';

type RowData = Record<string, unknown>;

const DataTreasureHunt: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const renderTable = (title: string, data: RowData[], colorClass: string) => {
    if (!data || data.length === 0) return null;
    const headers = Object.keys(data[0]);

    return (
      <div className={`dth-section ${colorClass}`}>
        <h2 className="dth-title">{title}</h2>
        <div className="table-responsive">
          <table className="dth-table">
            <thead>
              <tr>
                {headers.map(header => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {headers.map(header => (
                    <td key={`${index}-${header}`}>{row[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="dth-container">
      <div className="dth-header">
        <h1>📊 Data Treasure Hunt (DTH) Model</h1>
        <p>Modèle conforme au cadre CDIWG pour Ville Verte / Bouskoura</p>
      </div>

      <div className="dth-tabs">
        <button 
          className={`dth-tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Sheets
        </button>
        <button 
          className={`dth-tab ${activeTab === 'metadata' ? 'active' : ''}`}
          onClick={() => setActiveTab('metadata')}
        >
          🟦 Metadata
        </button>
        <button 
          className={`dth-tab ${activeTab === 'sources' ? 'active' : ''}`}
          onClick={() => setActiveTab('sources')}
        >
          🟩 Sources
        </button>
        <button 
          className={`dth-tab ${activeTab === 'data' ? 'active' : ''}`}
          onClick={() => setActiveTab('data')}
        >
          🟨 Données Brutes
        </button>
        <button 
          className={`dth-tab ${activeTab === 'validation' ? 'active' : ''}`}
          onClick={() => setActiveTab('validation')}
        >
          🟥 Validation
        </button>
        <button 
          className={`dth-tab ${activeTab === 'conformity' ? 'active' : ''}`}
          onClick={() => setActiveTab('conformity')}
        >
          🟪 Conformité
        </button>
      </div>

      <div className="dth-content">
        {(activeTab === 'all' || activeTab === 'metadata') && 
          renderTable('Feuille 1 — METADATA_COLLECTE', dthData.metadata, 'blue-theme')}
        
        {(activeTab === 'all' || activeTab === 'sources') && 
          renderTable('Feuille 2 — SOURCES', dthData.sources, 'green-theme')}
        
        {(activeTab === 'all' || activeTab === 'data') && 
          renderTable('Feuille 3 — DONNEES_BRUTES', dthData.donneesBrutes, 'yellow-theme')}
        
        {(activeTab === 'all' || activeTab === 'validation') && 
          renderTable('Feuille 4 — VALIDATION', dthData.validation, 'red-theme')}
        
        {(activeTab === 'all' || activeTab === 'conformity') && 
          renderTable('Feuille 5 — CONFORMITE_CDIWG', dthData.conformite, 'purple-theme')}
      </div>

      <div className="dth-footer">
        <h3>✅ Bonnes pratiques</h3>
        <ul className="practices-list">
          <li>❌ Aucune donnée personnelle sensible</li>
          <li>❌ Aucun usage commercial</li>
          <li>✅ Source obligatoire ou mention “terrain”</li>
          <li>✅ Coordonnées GPS si possible</li>
          <li>✅ Une ligne = une entité</li>
        </ul>
      </div>
    </div>
  );
};

export default DataTreasureHunt;
