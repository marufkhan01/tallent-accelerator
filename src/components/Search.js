import React, {useEffect, useState} from 'react'
import { Grid } from 'semantic-ui-react'
/*
const people = [
    "Luke Skywalker",
    "Darth Vader",
    "Leia Organa",
    "Owen Lars",
    "Beru Whitesun lars",
    "Darth Vader",
    "Leia Organa",
    "R5-D4",
    "Biggs Darklighter",
    "Obi-Wan Kenobi"
  ];*/

export default function Search({data}) {
  //console.log(data)

    const[search, setSearch] = useState('')
    const[filterName, setFilterName]= useState([])

    useEffect(() => {
        const results= 
            data.filter((person) => 
                person.toLowerCase().includes(search.toLowerCase())
                )
        setFilterName(results)
    },[search, data])
    
    return (
      <>
        <h1>Search Name List</h1>
            
        <input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)} />
      
        <ul>
          {filterName.map((name) => (
            <Grid>{name}</Grid>
          ))}
        </ul>
      </>
    )
}
