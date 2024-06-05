import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Bikeformdesign } from './bikeform'
import { Loginpage } from './loginpage'
import { Customerform } from './customerform'
export let Mainpage = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='gotobikeform' exact element={<Bikeformdesign />} />
                    <Route path='/' exact element={< Loginpage />} />
                    <Route path='gotocustomer' exact element={< Customerform />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}