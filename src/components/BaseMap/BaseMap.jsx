import React from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Basemap from './BaseMapDisplay';

// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
    
  state = {
    lat: 48.715780,
    lng: 23.189230,
    zoom: 20,
    basemap: 'osm'
  };

  onTileChange = (tile) => {
    // console.log(this);
    this.setState({
      basemap: tile
    });
  }

  render() {
    const center = [this.state.lat, this.state.lng];

    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      topo: "https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png",
      ortho: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      lines: "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
      terrain: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      geographic: "http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png",
    }

    return (
      <MapContainer zoom={this.state.zoom} center={center}>
        <TileLayer
          // attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={basemapsDict[this.state.basemap]}
        />
        <Basemap basemap={this.state.basemap} onChange={this.onTileChange}/>
        <Marker position={center}>
          <Popup>Вибрана тема {this.state.basemap}</Popup>
        </Marker>
      </MapContainer>
    );
  }
};

export default MapComponent;