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
<MapContainer center={[41.84034974524639, -73.42960649317374]} zoom={13} scrollWheelZoom={false}>
<TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={[41.84034974524639, -73.42960649317374]}>
<Popup>
Taro's Origami Studio
</Popup>
</Marker>
</MapContainer>
</div>
)}

export default Map;