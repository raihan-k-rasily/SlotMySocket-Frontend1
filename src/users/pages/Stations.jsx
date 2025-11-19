import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import './Station.css'; // Import custom CSS

const stationsData = [
  { id: 1, name: 'Station A', distance: '1.2 km', status: 'Available' },
  { id: 2, name: 'Station B', distance: '2.5 km', status: 'Charging' },
  { id: 3, name: 'Station C', distance: '3.0 km', status: 'Occupied' },
  { id: 4, name: 'Station D', distance: '4.2 km', status: 'Available' },
  { id: 5, name: 'Station E', distance: '5.0 km', status: 'Available' },
  { id: 6, name: 'Station F', distance: '6.1 km', status: 'Charging' },
];

function Stations() {
  const [search, setSearch] = useState('');

  const filteredStations = stationsData.filter(station =>
    station.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="station-page">
      <Header />

      <main className="station-main">
        <h1 className="station-title">Find Nearby Charging Stations</h1>

        {/* Search Bar */}
        <div className="station-search">
          <input
            type="text"
            placeholder="From"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <input
            type="text"
            placeholder="To"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* Stations Grid */}
        <div className="station-grid">
          {filteredStations.length > 0 ? (
            filteredStations.map(station => (
              <div
                key={station.id}
                className={`station-card ${
                  station.status === 'Available'
                    ? 'available'
                    : station.status === 'Charging'
                    ? 'charging'
                    : 'occupied'
                }`}
              >
                <h2>{station.name}</h2>
                <p>Distance: {station.distance}</p>
                <p>Status: {station.status}</p>
              </div>
            ))
          ) : (
            <p className="no-stations">No stations found.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Stations;
