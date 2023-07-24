import React from 'react'
import GoogleMaps from './GoogleMap'//imp GoogleMaps
import 'bootstrap/dist/css/bootstrap.min.css';//imp css to bootstrap
import './App.css'//imp css
const App = () => {
  return (
    
<div className="container mt-4">
      <h1 className="mb-4" >Welcome to My Google Maps Landing Page!</h1>
      <GoogleMaps/>
    </div>
  )
}

export default App//exp app.js