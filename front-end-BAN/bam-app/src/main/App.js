import React from 'react';

import Routes from './Routes';

import NavBar from '../components/navbar';

import 'bootswatch/dist/flatly/bootstrap.css';

import '../custom.css';

class App extends React.Component{
  render (){
    return(
      <>
        <NavBar />
        <div>
            <Routes />
        </div>
      </>
    )
  }
}

export default App;
