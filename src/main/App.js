import React from 'react';

import 'bootswatch/dist/flatly/bootstrap.css'
import '../../src/custom.css'

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
