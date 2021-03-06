import React from 'react'
import {Card, Grid } from 'semantic-ui-react'

export default function People({people}) {

    return (
        <>
            <h1>People</h1>
            <Grid columns={3} >
               {people.map((person, i) => {
                   return(
                       <Grid.Column key={i}>
                           <Card>
                               <Card.Content>
                                <Card.Header>{person.name}</Card.Header>
                                <Card.Description>
                                   <strong>Height</strong>
                                    <p>{person.height}</p>
                                    <strong>Gender</strong>
                                    <p>{person.gender}</p>
                                    <strong>Mass</strong>
                                    <p>{person.mass}</p>
                                    <strong>Skin Color</strong>
                                    <p>{person.skin_color}</p>
                                </Card.Description>
                               </Card.Content>
                           </Card>
                       </Grid.Column>
                   )
               })}
            </Grid>
        </>
    )
}
