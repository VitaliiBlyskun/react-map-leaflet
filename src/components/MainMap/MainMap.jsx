import { MapContainer, TileLayer } from 'react-leaflet';
import { MarkerPlace } from '../Marker/Marker';


export const MainMap = () => {
  return <MapContainer center={[48.715780, 23.189230]} zoom={18} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <MarkerPlace />
</MapContainer>
};
