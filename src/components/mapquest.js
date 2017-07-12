import React, { Component } from 'react';
import './mapquest-js';
import './mapquest-js.css';

class MapQuest extends Component {
  render() {
    const mapStyle = {
      height: 500,
      width: 1000
    };
    return (
      <div id="map" style={mapStyle}>
        map here...
      </div>
    );
  }

  componentDidMount() {
    L.mapquest.key = '1RtKpE7XdjkrI8O9am0gFO217SObQRrZ';

    L.mapquest.map('map', {
      center: [37.7749, -122.4194],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
    });
  }
}

export default MapQuest
