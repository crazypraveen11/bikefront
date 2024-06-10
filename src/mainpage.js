import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Button, Nav, NavDropdown, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'


export let Homepage = () => {
    return (
        <>
            <Navbar className='container-fluid' expand='lg' variant='dark' bg='dark' >
                <div className='container'>
                    <NavbarBrand className='fw-bold'>Profile</NavbarBrand>
                    <NavbarToggle></NavbarToggle>
                    <NavbarCollapse>
                        <Nav>
                            <NavLink href='viewbikedata'>Bike Details</NavLink>
                            <NavDropdown title='Customer Details'>
                                <NavDropdown.Item href='gotocustomer'>New Customer</NavDropdown.Item>
                                <NavDropdown.Item href='viewcustomer'>Listall Customer</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='ms-auto d-flex align-items-center'>
                            <Button className='btn btn-success'
                                onClick={
                                    () => {
                                        sessionStorage.removeItem("loginuser");
                                        sessionStorage.removeItem("bikesec");
                                        window.location.assign("/");
                                    }}>
                                LOG OUT</Button>
                            <Button className='btn btn-danger ms-2'>DELETE CUSTOMER</Button>
                        </Nav>
                    </NavbarCollapse>
                </div>
            </Navbar>
        </>
    )
}