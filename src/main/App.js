import React from 'react';

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../../src/custom.css'
import 'toastr/build/toastr.css'

import Routes from './routes'
import Navbar from '../components/navbar'

class App extends React.Component {

  render(){ 
    return (
      <>
        <Navbar/>
        <div className="container">
          <Routes />
        </div>
      </>
    )
  }
}

export default App;
