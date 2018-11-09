import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import './index.css';

export class component extends React.Component {
  render() {
    const { events } = this.props;
    if (!events || events.length === 0) {
      return 'No events';
    }
    const GoogleMapExample = withGoogleMap(props => {
      const barcelonaCoords = { lat: 41.3851, lng: 2.1734 };
      const defaultCenter =
        events.length === 1
          ? { lat: events[0].coords[0], lng: events[0].coords[1] }
          : barcelonaCoords;
      return (
        <GoogleMap defaultZoom={13} defaultCenter={defaultCenter}>
          {events.map(el => {
            return (
              <Marker
                key={el.id}
                position={{ lat: el.coords[0], lng: el.coords[1] }}
              />
            );
          })}
        </GoogleMap>
      );
    });
    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `400px`, width: '500px' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
