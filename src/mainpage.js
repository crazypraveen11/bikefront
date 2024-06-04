import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { Button, Nav, NavDropdown, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'
import { Customerform } from './customerform'

export let Mainpage = () => {
    var [nextpage, setNextpage] = useState(false);
    return (
        <>
            {
                (nextpage) ?
                    <>
                        <Navbar expand='lg' variant='dark' bg='dark' style={{ width: '1340px' }}>
                            <div className='container'>
                                <NavbarBrand className='fw-bold'>Profile</NavbarBrand>
                                <NavbarToggle></NavbarToggle>
                                <NavbarCollapse>
                                    <Nav>
                                        <NavLink href='#!'>Bike Details</NavLink>
                                        <NavDropdown title='Customer Details'>
                                            <NavDropdown.Item href='#!'>New Customer</NavDropdown.Item>
                                            <NavDropdown.Item href='#!'>Listall Customer</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Nav className='ms-auto d-flex align-items-center'>
                                        <Button className='btn btn-success'>LOG OUT</Button>
                                        <Button className='btn btn-danger ms-2'>DELETE CUSTOMER</Button>
                                    </Nav>
                                </NavbarCollapse>
                            </div>
                        </Navbar>
                        <Customerform />
                    </>
                    :
                    <>
                        <div>
                            <h2 className='fw-bold' style={{ color: 'whitesmoke' }}>Welcome to our Bike Showroom</h2>
                        </div>
                        <div>
                            <div class="wrapper col-md-6 col-lg-5" style={{ width: '490px' }}>
                                <form action="">
                                    <h1 className='log fw-bold'>Login <span style={{ color: '#23aec0' }}>Page</span></h1>
                                    <div class="input-box">
                                        <input type="text" placeholder="Username" required />
                                        <i class='bi bi-person-circle'></i>
                                    </div>
                                    <div class="input-box">
                                        <input type="password" placeholder="Password" required />
                                        <i class='bi bi-lock-fill' ></i>
                                    </div>
                                    <div class="remember-forgot mt-1">
                                        <label><input type="checkbox" className='checkbox' /> Remember Me</label>
                                        <a href="#!">Forgot Password</a>
                                    </div>
                                    <button type="submit" class="btn" onClick={() => {
                                        setNextpage(true)
                                    }} >Login</button>
                                    <div class="register-link">
                                        <p>Don't have an account? <a href="#!" className='ms-2'>Register</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}