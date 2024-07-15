import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'
import { Createnewbike, Findbyonebrand } from './connect'

export var Updatebike = () => {
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

    const gettingvalues = async () =>
    {
        const t = await Findbyonebrand();
        setBikedata(t.data);
    }

    useEffect(()=>{
        gettingvalues();
    },[])

    let setter = (get) => {
        const { name, value } = get.target

        setBikedata((mydata) => {
            return {
                ...mydata,
                [name]: value
            }
        })
    }

    let Update = async () => {
        alert("Details Updated Successfully...!" + JSON.stringify(bikedata));
        const temp = await Createnewbike(bikedata);
        const twovalues = bikedata.bikeBrand + ":" + bikedata.password;
        const totalvalue = btoa(twovalues);
        sessionStorage.setItem("bikesecurity", bikedata.bikeBrand);
        sessionStorage.setItem("loginuser", totalvalue);
        window.location.assign("/")
    }

    return (
        <>
            <div className='container-fluid mt-2' style={{ width: '900px', color: 'white' }}>
                <div className='row justify-content-center'>
                    <div className=' col-lg-8 col-md-0 col-sm-12 shadow-lg p-2'>
                        <h1 className='text-center'>Edit Your Bike Details</h1>
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
                                <input type='text' name="password" value={bikedata.password}
                                    className='form-control ms-5' onChange={setter}
                                    placeholder='Enter Your Password' />
                            </div>
                            <div className=' text-center mt-4 col-10 '>
                                <button className='col-3 ms-3 btn btn-info'
                                    onClick={
                                        Update
                                    }>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}