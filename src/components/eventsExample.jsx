import React, { createRef, Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class EventsExample extends Component {
  state = {
    hasLocation: false,
    latlng: {
      lat: 28.7041,
      lng: 77.1025,
    },
    title:"Map with Event Handler"
  }

  mapRef = createRef()

  handleClick = () => {
    this.mapRef.current.leafletElement.locate()
  }

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng,
    })
  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Popup>
          <span>You are here</span>
        </Popup>
      </Marker>
    ) : null
    let title= this.state.title;
    return (
      <div>
         <h2>{title}</h2> 
        <Map
        center={this.state.latlng}
        length={4}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
        ref={this.mapRef}
        zoom={5}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </Map>
      </div>
    )
}
}