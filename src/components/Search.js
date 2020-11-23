import React, {useEffect, useState} from 'react'
import { Grid } from 'semantic-ui-react'

export default function Search({people}) {
  console.log(people)

    const[search, setSearch] = useState('')
    const[filterName, setFilterName]= useState([])

    useEffect(() => {
        const results= 
            people.filter((person) => 
                person.name.toLowerCase().includes(search.toLowerCase())
                )
        setFilterName(results)
    },[search,people])
    
    return (
      <>
        <h1>Search Name List</h1>
            
        <input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)} />
      
        <ul>
          {filterName.map((person,i) => (
            <Grid key={i}>{person.name}</Grid>
          ))}
        </ul>
      </>
    )
}
