import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListClientComponent from './components/ListClientComponent';
import CreateClientComponent from './components/CreateClientComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch> 
                <Route path = "/" exact component = {ListClientComponent}></Route>
                <Route path = "/client" component = {ListClientComponent}></Route>
                <Route path = "/create-client" component = {CreateClientComponent}></Route>
                <ListClientComponent/>
              </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
