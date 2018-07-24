import React, { Component } from 'react';
import SimpleExample from './components/sampleMap';
import EventsExample from './components/eventsExample';
import ViewportExample from './components/viewPort';
class App extends Component {
  render() {
    return (
      <div>
        <h2>React Leaflet Map Example</h2>
        <SimpleExample />
        <EventsExample/>
        <ViewportExample />
      </div>
    );
  }
}

export default App;
