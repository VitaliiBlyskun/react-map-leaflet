import React from "react";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Basemap from './Basemaps';
import GeojsonLayer from "./GeoJsonLayer";
import CoordInsert from './CoordInsert';
import "./MapGeojson.css"


// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
  state = {
    lat: 48.714329,
    lng: 23.181764,
    zoom: 10,
    basemap: 'osm',

    geojsonvisible: false,
    visibleModal: false,
  };

  onCoordInsertChange = (lat, long, z) => {
    this.setState({
      lat: lat,
      lng: long,
      zoom: z,
    });
  }

  onBMChange = (bm) => {
    this.setState({
      basemap: bm
    });
  }

  onGeojsonToggle = (e) => {
    
    this.setState({
      geojsonvisible: e.currentTarget.checked
    });
  }

  render() {
    var center = [this.state.lat, this.state.lng];
    var z = this.state.zoom;

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
      <MapContainer zoom={z} center={center}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={basemapsDict[this.state.basemap]}
        />
        <Basemap basemap={this.state.basemap} onChange={this.onBMChange} />

        <div className="geojson-toggle">
          <label htmlFor="layertoggle" className="modal-label">Позаказати дашо 
          <input type="checkbox"
            name="layertoggle" id="layertoggle" className="modal-string"
            value={this.state.geojsonvisible} onChange={this.onGeojsonToggle} />
          </label>
        </div>
        
        {this.state.geojsonvisible && 
          <GeojsonLayer url="geojson.json" />
        }
    
        <CoordInsert onllzChange={this.onCoordInsertChange} />

        <Marker position={center}>
          <Popup>
            Широта: {this.state.lat}<br/>
            Довгота: {this.state.lng}<br/>
            Масштаб: {this.state.zoom}
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
};

export default MapComponent;


