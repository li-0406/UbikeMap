import L, { LatLngExpression } from "leaflet";

//台北市座標
const taipei: LatLngExpression = [25.033, 121.5654];

//預設縮放等級
const zoom = 13;

const map = L.map("map");

map.setView(taipei, zoom);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
