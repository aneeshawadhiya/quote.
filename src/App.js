import Home from './components/Home';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
// import Categories from './components/Categories';
import Theme from './components/Theme';
import About from './components/About';
import styled from 'styled-components'
import UnderDevelopement from './components/UnderDevelopement';
import React, { useState } from 'react';
import AppContext from './components/AppContext';
import { Button } from '@mui/material';
import { exportComponentAsPNG } from 'react-component-export-image';
import './app.css';
import Fab from '@mui/material/Fab';
import { HiDownload } from 'react-icons/hi';

const AppStyle = styled.div`

    -webkit-animation: animation 25s ease infinite;
    -moz-animation: animation 25s ease infinite;
    animation: animation 25s ease infinite;

    @-webkit-keyframes animation {
        0%{background-position:27% 0%}
        50%{background-position:74% 100%}
        100%{background-position:27% 0%}
    }
    @-moz-keyframes animation {
        0%{background-position:27% 0%}
        50%{background-position:74% 100%}
        100%{background-position:27% 0%}
    }
    @keyframes animation {
        0%{background-position:27% 0%}
        50%{background-position:74% 100%}
        100%{background-position:27% 0%}
    }

    @media only screen and (max-width: 500px) {

      body{
        background-size: 110% 110%;
      }

    }
  
`;

function App() {


const homeRef = React.createRef();
const [background , setBackground] = useState('#414141'); 

  const styles = {
    background: `linear-gradient(154deg, ${background}, #000000)`,
    backgroundSize: '140% 140%', 
  }

  function exportImage(){
    exportComponentAsPNG(homeRef,{
      fileName:"quotes"
    })
  }

  
 
  return (
      <AppContext.Provider value={{background, setBackground}}>
        <AppStyle style={styles} ref={homeRef}>
            <Router>
                <NavMenu />
                <Switch>
                  <Route path="/explore">
                    {/* <Categories /> */}
                    <UnderDevelopement />
                  </Route>
                  <Route path="/theme">
                    <Theme />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/home">
                    <Home />
                    <div className="downdiv">
                        <Fab style={{backgroundColor: `${background}` , color:"white"}}  size="small" aria-label="download" className="down-fab" onClick={exportImage} >
                            <HiDownload />
                        </Fab>
                    </div>
                  </Route>
                  <Route path="/">
                    <Home />
                    <div className="downdiv">
                        <Fab style={{backgroundColor: `${background}` , color:"white"}}  size="small" aria-label="download" className="down-fab" onClick={exportImage} >
                            <HiDownload />
                        </Fab>
                    </div>
                  </Route>
                </Switch>
            </Router>
        </AppStyle>
      </AppContext.Provider>
  );
}

export default App;
