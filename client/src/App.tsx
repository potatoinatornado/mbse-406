import './App.css';
import Layout from "./layout/Layout";

import {Container} from 'react-bootstrap'
import {Route, Switch} from 'react-router-dom'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RepairingPlanes from "./pages/RepairingPlanes";
import Activity from "./pages/Activity";


function App() {

  return (
      <Layout>
        <Container>
          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route path='/login'><Login/></Route>
            <Route path='/register'><Register/></Route>
            <Route path='/repairing' component={RepairingPlanes}/>
            <Route path='/activity'><Activity/></Route>
          </Switch>
        </Container>
      </Layout>
  );
}

export default App;
