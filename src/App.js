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


// let bg = "";


// const bgColors = {
//   teal: false,
//   pine:false,
//   rose:false,
//   dark:false,
//   cider:true,
//   pride:false
// };


// function setBack(){
//   if(bgColors.dark){
//     bg = "#595959";
//   }else if(bgColors.pine){
//     bg = "#02a388";
//   }else if(bgColors.rose){
//     bg = "#b02e0c";
//   }else if(bgColors.teal){
//     bg = "#537895";
//   }else if(bgColors.cider){
//     bg = "#f2a65a";
//   }else if(bgColors.pride){
//     bg = "#02a388";
//   }
// }


const AppStyle = styled.div`

    /* background-size: 140% 140%;
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
 */


    @media only screen and (max-width: 500px) {

      body{
        background-size: 110% 110%;
      }

    }
  
`;



function App() {

  const [background , setBackground] = useState('#414141');

  return (
      <AppContext.Provider value={{background, setBackground}}>
    <AppStyle style={{
      background: `linear-gradient(154deg, ${background}, #000000)`}}>
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
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
    </AppStyle>
      </AppContext.Provider>
  );
}

export default App;
