import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Import components here
import Header from './components/Header';
import Banner from './components/Banner';

// Import pages here
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

function App () {
  return (
    <Container>
      <Router>
        <Header />
        <Banner />
        <Switch>
          <Route path ="/home" component={Home} />
          <Route path ="/products" component={Products} />
          <Route path ="/about" component={About} />
        </Switch>
      </Router>
    </Container>
  )
}

const Container = styled.div`
  background: #000000;
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0px 0px 100px 0px;
`;

export default App;