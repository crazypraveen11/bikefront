import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'
import { Findbyonebrand } from './connect'

export var Createbikedata = () => {

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

    const setvalues = async () =>{
        const t = await Findbyonebrand();
        setBikedata(t.data);
    }

    useEffect(()=>{
        setvalues();
    })

    return (
        <>
            <div className="container-fluid mt-2" style={{ width: '1340px' }}>
                <div className="row justify-content-center align-items-center">
                    <div className="table-responsive-md " style={{ overflowX: 'auto' }}>
                        <table className=" table text-center table-striped table-primary">
                            <thead>
                                <tr>
                                    <th>BikeChasisno</th>
                                    <th>Bike Brand</th>
                                    <th>Bike Model</th>
                                    <th>Bike Price</th>
                                    <th>Bike CC</th>
                                    <th>Bike Version</th>
                                    <th>Bike Weight</th>
                                    <th>Bike Mileage</th>
                                    <th>Brake System</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{bikedata.bikeChasisno}</td>
                                    <td>{bikedata.bikeBrand}</td>
                                    <td>{bikedata.bikeModel}</td>
                                    <td>{bikedata.bikePrice}</td>
                                    <td>{bikedata.bikeCc}</td>
                                    <td>{bikedata.bikeVersion}</td>
                                    <td>{bikedata.bikeWeight}</td>
                                    <td>{bikedata.bikeMileage}</td>
                                    <td>{bikedata.bikeBrakesystem}</td>
                                    <td>{bikedata.password}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
