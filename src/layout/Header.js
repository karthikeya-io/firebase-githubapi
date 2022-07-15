import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavbarText, NavbarToggler, NavItem, Collapse, NavLink } from 'reactstrap'
import { UserContext } from '../context/UserContext'


const Header = () => {

    const context = useContext(UserContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)


    return (
        <Navbar color='info' light expand="md">
            <NavLink  to="/" className='text-white'>LCO gitfire app</NavLink>
            <NavbarText className='text-white'>{
                context.user?.email ? context.user?.email : ""
            }
            </NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ms-auto' navbar>
                    {
                        context.user ? (<NavItem>
                            <NavLink onClick={() => {context.setUser(null)}} className='text-white'>
                                Logout
                            </NavLink>
                        </NavItem>) : (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/signup" className='text-white'>
                                        Signup
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/signin" className='text-white'>
                                        Signin
                                    </NavLink>
                                </NavItem>
                            </>
                        )
                    }


                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header