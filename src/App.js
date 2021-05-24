import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Advice from './components/Advice/Advice'
import Music from './components/Music/Music'
import Games from './components/Games/Games'
function App() {
  return (
    <>
    
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/advice' component={Advice}/>
            <Route exact path='/music' component={Music}/>
            <Route exact path='/games' component={Games} />
            {/* <Redirect to="/" /> */}
            
          </Switch>
      </Router>
      
    </>
  );
}

export default App;
