import React, { Component } from 'react'
import { Marker, Polygon } from 'react-leaflet'
import { Map, TileLayer, Popup } from 'react-leaflet'

class SimpleExample extends Component {
  state = {
    zoom: 5,
    currentpos:{
        lat: 20.5937,
        lng: 78.9629,
    },
    markerpos:{
        lat:17.3850,
        lng:78.4867,
    },
    lat: 20.5937,
    lng: 78.9629,
  }
  

  render() {
    const position = [this.state.currentpos.lat, this.state.currentpos.lng];
    const coords =[
        {lat: 24.9946436,lng: 87.20163200000002},
        {lat: 28.7041, lng: 77.1025},
        {lat: 23.4567, lng: 75.2345}
        
    ]
    
    return (
      <div>
        <Map center={position} zoom={this.state.zoom} >
        <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        <Marker position={position} zoom={this.state.zoom} >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Polygon color={'green'} positions={coords} />
           
        </Map>
      </div>
    )
  }
}

export default SimpleExample;