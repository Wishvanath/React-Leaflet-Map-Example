import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'

const DEFAULT_VIEWPORT = {
  center: [51.505, -0.09],
  zoom: 5,
}

export default class ViewportExample extends Component {
  state = {
    viewport: DEFAULT_VIEWPORT,
    title:"Map View Port Example"
  }

  onClickReset = () => {
    this.setState({ viewport: DEFAULT_VIEWPORT })
  }

  onViewportChanged = viewport => {
    this.setState({ viewport })
  }

  render() {
      let title= this.state.title;
    return (
      <div>
          <h2>{title}</h2>
        <Map
        onClick={this.onClickReset}
        onViewportChanged={this.onViewportChanged}
        viewport={this.state.viewport}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </Map>
      </div>
    )
}
}