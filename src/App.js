import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Quotes from './components/Quotes/Quotes'
import Music from './components/Music/Music'
import Games from './components/Games/Games'
function App() {
  return (
    <>
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/quotes' component={Quotes}/>
            <Route exact path='/music' component={Music}/>
            <Route exact path='/games' component={Games} />
            {/* <Redirect to="/" /> */}
            
          </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;
