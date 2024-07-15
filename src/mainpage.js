import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Button, Nav, NavDropdown, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'
import { DeleteoneBike, Findbyonebrand } from './connect'
import { useEffect, useState } from 'react'


export let Homepage = () => {

    var [bikedata, setBikedata] = useState(
        {
            bikeChasisno: "",
            bikeBrand: "",
            bikeModel: "",
            bikePrice: 0,
            bikeCc: "",
            bikeVersion: "",
            bikeWeight: "",
            bikeMileage: "",
            bikeBrakesystem: "",
            password: ""
        }
    )

    const getvalues = async () => {
        const t = await Findbyonebrand();
        setBikedata(t.data);
    }

    useEffect(() => {
        getvalues()
    }, [])

    return (
        <>
            <Navbar className='container-fluid mt-2' expand='lg' variant='dark' bg='dark' style={{ width: '1350px' }}>
                <div className='container'>
                    <NavbarBrand className='fw-bold'>Ps Bike Showroom</NavbarBrand>
                    <NavbarToggle></NavbarToggle>
                    <NavbarCollapse>
                        <Nav>
                            <NavLink href='viewbikedata'>Bike Details</NavLink>
                            <NavLink href='updateinfo'>Edit Bike</NavLink>
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
                            <Button className='btn btn-danger ms-2'
                                onClick={
                                    async () => {
                                        await DeleteoneBike(bikedata.bikeBrand);
                                        sessionStorage.removeItem("loginuser");
                                        sessionStorage.removeItem("bikesec");
                                        window.location.assign("/");
                                    }
                                }>DELETE THE BRAND</Button>
                        </Nav>
                    </NavbarCollapse>
                </div>
            </Navbar>
        </>
    )
}