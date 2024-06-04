import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export var Bikeformdesign = () => {
    return (
        <>
            <div className='container-fluid mt-2' style={{ width: '900px', color: 'white' }}>
                <div className='row justify-content-center'>
                    <div className=' col-lg-8 col-md-0 col-sm-12 shadow-lg p-2'>
                        <h1 className='text-center'>Create Your Bike Details</h1>
                        <div className='container'>
                            <div className='form-group mt-4 col-9 '>
                                <label className='form-label fw-bold'>Bike Chasis No</label>
                                <input type='text' name="bikeChasisno" className='form-control ms-5' placeholder='Enter Chasis no' />
                            </div>
                            <div className='form-group mt-3 col-9'>
                                <label className='form-label fw-bold'>Bike Brand</label>
                                <input type='text' name="bikeBrand" className='form-control ms-5' placeholder='Enter Brand' />
                            </div>
                            <div className='form-group mt-3 col-9'>
                                <label className='form-label fw-bold'>Bike Model</label>
                                <input type='text' name="bikeModel" className='form-control ms-5' placeholder='Enter Model' />
                            </div>
                            <div className='form-group mt-3 col-9'>
                                <label className='form-label fw-bold'>Bike Price</label>
                                <input type='number' name="bikePrice" className='form-control ms-5' placeholder='Enter Price' />
                            </div>
                            <div className='form-group mt-3 col-9'>
                                <label className='form-label fw-bold'>Bike CC</label>
                                <input type='text' name="bikeCc" className='form-control ms-5' placeholder='Enter your CC' />
                            </div>
                            <div className='form-group mt-3 col-9'>
                                <label className='form-label fw-bold'>Bike Version</label>
                                <input type='text' name="bikeVersion" className='form-control ms-5' placeholder='Enter your version' />
                            </div>
                            <div className='form-group mt-3 col-9'>
                                <label className='form-label fw-bold'>Bike Weight</label>
                                <input type='text' name="bikeWeight" className='form-control ms-5' placeholder='Enter Weight' />
                            </div>
                            <div className='form-group mt-3 col-9'>
                                <label className='form-label fw-bold'>Bike Mileage</label>
                                <input type='text' name="bikeMileage" className='form-control ms-5' placeholder='Enter Mileage' />
                            </div>
                            <div className='form-group mt-3 col-9'>
                                <label className='form-label fw-bold'>Bike Braking System</label>
                                <input type='text' name="bikeBrakesystem" className='form-control ms-5' placeholder='Enter Braking system' />
                            </div>
                            <div className='form-group mt-3 col-9'>
                                <label className='form-label fw-bold'>Password</label>
                                <input type='text' name="password" className='form-control ms-5' placeholder='Enter Your Password' />
                            </div>
                            <div className=' text-center mt-4 col-10 '>
                                <button className='col-3 ms-3 btn'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}