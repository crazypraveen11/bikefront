import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Bikeformdesign } from './bikeform'
import { Loginpage } from './loginpage'
import { Customerform } from './customerform'
import { Viewcustomer } from './viewcustomer'
import { Createbikedata } from './createbikeinfo'

export let Mainpage = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='gotobikeform' exact element={<Bikeformdesign />} />
                    <Route path='/' exact element={< Loginpage />} />
                    <Route path='gotocustomer' exact element={< Customerform />} />
                    <Route path='viewcustomer' exact element={< Viewcustomer />} />
                    <Route path='viewbikedata' exact element={< Createbikedata />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}