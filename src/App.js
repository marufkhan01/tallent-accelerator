import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import People from './components/People'
import Search from './components/Search'
import Info from './components/Info'
//import StoreProvider from './components/Store'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import './App.css'

function App() {

  const [people, setPeople] = useState([])

  useEffect(() => {
      async function fetchPeople(){
        //const urls = ["https://swapi.py4e.com/api/people/?format.json", "https://swapi.py4e.com/api/planets/?format.json", "https://swapi.py4e.com/api/films/?format.json"]

        //let res = await fetch(urls)

      let res = await fetch('https://swapi.py4e.com/api/people/?/search=a&page=1')
      let data = await res.json()
      setPeople(data.results)
      }
      fetchPeople()
  }, [])

  console.log('data', people)

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
          <Route exact path='/'>
            <Home data={people}/>
          </Route>
            <Route exact path='/people'>
              <People data={people}/>
            </Route>
            <Route exact path='/search'>
              <Search data={people}/>
            </Route>
            <Route exact path='/info'>
              <Info />
            </Route>
          </Switch>
        </Container>
      </Router>
      

    </>
  )
}

export default App
