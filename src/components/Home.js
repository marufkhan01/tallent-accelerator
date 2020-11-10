import React from 'react'

export default function Home({data}) {

    return (
        <>
          <h1>Name List:</h1>
            
            {data.map((people) => {
              return(
                  <ul>
                     <h3>{people.name}</h3>
                  </ul>  
                   )
            })}
        </>
    )
}
