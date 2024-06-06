import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'



export var Bikeformdesign = () => {
    var [nextpage, setNextpage] = useState(false);
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

    let setter = (get) => {
        const { name, value } = get.target

        setBikedata(
            (mydata) => {
                return {
                    ...mydata,
                    [name]: value
                }
            }
        )
    }

    let Submit = () => {
        alert("Details Submitted Successfully...!" + JSON.stringify(bikedata));
        setNextpage(false);
    }
    return (
        <>
            {
                (nextpage) ?
                    <>
                        
                    </>
                    :
                    <>
                        <div className='container-fluid mt-2' style={{ width: '900px', color: 'white' }}>
                            <div className='row justify-content-center'>
                                <div className=' col-lg-8 col-md-0 col-sm-12 shadow-lg p-2'>
                                    <h1 className='text-center'>Create Your Bike Details</h1>
                                    <div className='container'>
                                        <div className='form-group mt-4 col-9 '>
                                            <label className='form-label fw-bold'>Bike Chasis No</label>
                                            <input type='text' name="bikeChasisno" value={bikedata.bikeChasisno}
                                                className='form-control ms-5' onChange={setter}
                                                placeholder='Enter Chasis no' />
                                        </div>
                                        <div className='form-group mt-3 col-9'>
                                            <label className='form-label fw-bold'>Bike Brand</label>
                                            <input type='text' name="bikeBrand" value={bikedata.bikeBrand}
                                                className='form-control ms-5' onChange={setter}
                                                placeholder='Enter Brand' />
                                        </div>
                                        <div className='form-group mt-3 col-9'>
                                            <label className='form-label fw-bold'>Bike Model</label>
                                            <input type='text' name="bikeModel" value={bikedata.bikeModel}
                                                className='form-control ms-5' onChange={setter}
                                                placeholder='Enter Model' />
                                        </div>
                                        <div className='form-group mt-3 col-9'>
                                            <label className='form-label fw-bold'>Bike Price</label>
                                            <input type='number' name="bikePrice" value={bikedata.bikePrice}
                                                className='form-control ms-5' onChange={setter}
                                                placeholder='Enter Price' />
                                        </div>
                                        <div className='form-group mt-3 col-9'>
                                            <label className='form-label fw-bold'>Bike CC</label>
                                            <input type='text' name="bikeCc" value={bikedata.bikeCc}
                                                className='form-control ms-5' onChange={setter}
                                                placeholder='Enter your CC' />
                                        </div>
                                        <div className='form-group mt-3 col-9'>
                                            <label className='form-label fw-bold'>Bike Version</label>
                                            <input type='text' name="bikeVersion" value={bikedata.bikeVersion}
                                                className='form-control ms-5' onChange={setter}
                                                placeholder='Enter your version' />
                                        </div>
                                        <div className='form-group mt-3 col-9'>
                                            <label className='form-label fw-bold'>Bike Weight</label>
                                            <input type='text' name="bikeWeight" value={bikedata.bikeWeight}
                                                className='form-control ms-5' onChange={setter}
                                                placeholder='Enter Weight' />
                                        </div>
                                        <div className='form-group mt-3 col-9'>
                                            <label className='form-label fw-bold'>Bike Mileage</label>
                                            <input type='text' name="bikeMileage" value={bikedata.bikeMileage}
                                                className='form-control ms-5' onChange={setter}
                                                placeholder='Enter Mileage' />
                                        </div>
                                        <div className='form-group mt-3 col-9'>
                                            <label className='form-label fw-bold'>Bike Braking System</label>
                                            <input type='text' name="bikeBrakesystem" value={bikedata.bikeBrakesystem}
                                                className='form-control ms-5' onChange={setter}
                                                placeholder='Enter Braking system' />
                                        </div>
                                        <div className='form-group mt-3 col-9'>
                                            <label className='form-label fw-bold'>Password</label>
                                            <input type='password' name="password" value={bikedata.password}
                                                className='form-control ms-5' onChange={setter}
                                                placeholder='Enter Your Password' />
                                        </div>
                                        <div className=' text-center mt-4 col-10 '>
                                            <button className='col-3 ms-3 btn btn-info'
                                                onClick={
                                                    Submit
                                                }><a href='/'>Submit</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}