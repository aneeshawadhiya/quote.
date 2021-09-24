import Home from './components/Home';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Categories from './components/Categories';
import Theme from './components/Theme';
import About from './components/About';
import styled from 'styled-components'
import {RemoveScrollBar} from 'react-remove-scroll-bar';

const AppStyle = styled.div`

    background: linear-gradient(154deg, #595959, #000000);
    background-size: 140% 140%;

    -webkit-animation: animation 35s ease infinite;
    -moz-animation: animation 35s ease infinite;
    animation: animation 35s ease infinite;


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
  return (
    <AppStyle>
      <RemoveScrollBar />
        <Router>
            <NavMenu />
            <Switch>
              <Route path="/explore">
                <Categories />
              </Route>
              <Route path="/theme">
                <Theme />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
    </AppStyle>
  );
}

export default App;
