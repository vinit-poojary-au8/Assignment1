import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function Header() {
	return (
		<Navbar expand='lg' bg='light' variant='light'>
			<Container>
				<Navbar.Brand href='#home'>Omega</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto'>
						<NavDropdown
							title='Demos'
							id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>
								SaaS Landing
							</NavDropdown.Item>
							<DropdownButton
								key='end'
								id='dropdown-button-drop-end'
								drop='end'
								variant='secondary'
								title='Startup Landing'>
								<Dropdown.Item eventKey='1'>
									Action
								</Dropdown.Item>
								<Dropdown.Item eventKey='2'>
									Another
									action
								</Dropdown.Item>
								<Dropdown.Item eventKey='3'>
									Something
									else here
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item eventKey='4'>
									Separated
									link
								</Dropdown.Item>
							</DropdownButton>
							<NavDropdown.Item href='#action/3.3'>
								App Landing
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.4'>
								DesktopLanding
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link>Pages</Nav.Link>
						<Nav.Link>Support</Nav.Link>
						<Button>Get Started</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
