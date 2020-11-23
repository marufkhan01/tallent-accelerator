import React from 'react'
import {Menu, Container} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const  Navbar =() => {
    return (
        <Menu inverted>
           <Container>
               <Link to='/'>
                <Menu.Item name="Name List" />
               </Link>
                <Link to='/PeopleInfo'>
                    <Menu.Item name="PeopleInfo" />
                </Link>
                <Link to='/Search'>
                    <Menu.Item name="Search" />
                </Link>
           </Container>

        </Menu>
    )
}
export default Navbar