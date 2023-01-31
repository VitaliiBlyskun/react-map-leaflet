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
        <option value="osm" className="select-word">Основна</option>
          <option value="topo" className="select-word">Топографічна</option>
          <option value="ortho" className="select-word">Орто</option>
          <option value="lines" className="select-word">Лінійна</option>
          <option value="terrain" className="select-word">Рельєфна</option>
          <option value="hot" className="select-word">Фізична</option>
          <option value="dark" className="select-word">Чорна</option>
          <option value="geographic" className="select-word">Географічна</option>
        </select>
      </div>
    );
  }
};

export default Basemap;