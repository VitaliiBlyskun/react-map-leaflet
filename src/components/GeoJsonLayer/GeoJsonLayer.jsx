import React from 'react';
import { GeoJSON, FeatureGroup, Popup } from 'react-leaflet';
import "./GeoJsonLayer"

export default class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    console.log('contructor');
  }

  myStyle = () => {
    return {
      color: "green",
      weight: 3,
      opacity: 1,
      fillColor: "red",
      dashArray: '8 5'
    }
  }

  componentDidMount() {
    if (this.props.url) {
      this.fetchData(this.props.url);
    }
    console.log('did mount');
  }

  componentWillUnmount() {
    console.log('will unmount');

  }

  fetchData(url) {
    const request = fetch(url);

    request
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: [...data, data.features]
        });
      }, (error) => {
        console.error(error);
      });
  }


  render() {
    console.log('render');

    console.info(this.state.data);
    return (
      <FeatureGroup>
        {this.state.data.map(item => {
          return <GeoJSON key={item.properties.id} data={item} style={this.myStyle}>
             <Popup>{item.properties.name}</Popup>
          </GeoJSON>
        })}
      </FeatureGroup>
    );
  }
}