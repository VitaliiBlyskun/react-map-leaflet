import React from 'react';
import '../App.css';

class Basemap extends React.Component {
  onChange = (e) => {
    const tileChange = e.currentTarget.value;

    if (this.props.onChange) {
      this.props.onChange(tileChange);
    }
  }

  render() {
    return (
      <div className="basemaps-container">
        <select className="select-word" value={this.props.basemap} onChange={this.onChange}>
          <option value="osm" className="select-word">OSM</option>
          <option value="topo" className="select-word">TOPO</option>
          <option value="ortho" className="select-word">ORTHO</option>
          <option value="lines" className="select-word">LINES</option>
          <option value="terrain" className="select-word">TERRAIN</option>
          <option value="hot" className="select-word">OSM HOT</option>
          <option value="dark" className="select-word">DARK</option>
          <option value="geographic" className="select-word">GEOGRAPHIC</option>
        </select>
      </div>
    );
  }
};

export default Basemap;