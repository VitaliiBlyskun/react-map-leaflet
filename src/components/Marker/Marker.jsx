import { Marker, Popup } from 'react-leaflet';

export const MarkerPlace = () => {
  return (
  <Marker position={[48.715780, 23.189230]}>
    <Popup>
      Center of Volovets. <br /> by pretty boy.
    </Popup>
  </Marker>
  )
};