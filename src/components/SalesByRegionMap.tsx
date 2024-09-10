// src/components/SalesByRegionMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const SalesByRegionMap = () => {
  return (
    <div className="w-full h-64">
      <MapContainer center={[51.505, -0.09]} zoom={2} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>London: $5000</Popup>
        </Marker>
        <Marker position={[34.0522, -118.2437]}>
          <Popup>Los Angeles: $8000</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SalesByRegionMap;
