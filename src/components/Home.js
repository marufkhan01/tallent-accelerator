import React from 'react'

export default function Home({people}) {

    return (
        <>
          <h1>Name List:</h1>
            
            {people.map((person,i) => {
              return(
                  <ul key={i}>
                      <h2>{person.name}</h2>
                  </ul>  
                   )
            })}
        </>
    )
}
