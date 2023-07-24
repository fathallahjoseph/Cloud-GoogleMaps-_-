import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';//imp GoogleMap && LoadScript 
const GoogleMaps = () => {
    const mapStyles = {
        height: '500px',
        width: '100%',
      }
      const defaultCenter = {
        lat: (35.824710),
        lng: (10.560740)
      };
  return (
  <div>
 <LoadScript googleMapsApiKey="AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg">
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
        {/* Add any additional components related to the map */}
      </GoogleMap>
    </LoadScript>
    </div>
  )
}

export default GoogleMaps;//exp GoolgeMap component