import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import People from './components/PeopleInfo'
import Search from './components/Search'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import './App.css'

import { fetchData } from './utils/api';


function App() {

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData().then(response => setPeople(response));
    setLoading(false);
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
          <Route exact path='/'>
            <Home people={people} loading={loading}/>
          </Route>
            <Route exact path='/people'>
              <People people={people}/>
            </Route>
            <Route exact path='/search'>
              <Search people={people}/>
            </Route>
          </Switch>
        </Container>
      </Router>
      
    </>
  )
}

export default App
