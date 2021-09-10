import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListClientComponent from './components/ListClientComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Switch> 
                <Route path = "/" component = {ListClientComponent}></Route>
                <Route path = "/client" component = {ListClientComponent}></Route>
                <ListClientComponent/>
              </Switch>
            </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
