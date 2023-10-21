import React from 'react';
import '../App.css';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';

function Map(){
return(
<div id="map">
<MapContainer center={[40.65621102966389, -74.00671116755453]} zoom={11} scrollWheelZoom={false}>
<TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={[40.65621102966389, -74.00671116755453]}>
<Popup>
Taro's Origami Studio
</Popup>
</Marker>
</MapContainer>
</div>
)}

export default Map;