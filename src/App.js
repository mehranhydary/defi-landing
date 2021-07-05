import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// Import components here
import Header from './components/Header';

// Import pages here
import Home from './pages/Home';

function App () {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path ="/home" component={Home} />
        </Switch>
      </Router>
    </Container>
  )
}

const Container = styled.div`
  background: #000000;
  position: relative;
`;

export default App;