import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export let Customerform = () => {
  return (
    <>
      <div className='container-fluid mt-2' style={{ width: '900px', color: 'white' }}>
        <div className='row justify-content-center'>
          <div className=' col-lg-8 col-md-0 col-sm-12 shadow-lg p-2'>
            <h1 className='text-center'>Create Customer Details</h1>
            <div className='container'>
              <div className='form-group mt-4 col-9 '>
                <label className='form-label fw-bold'>Customer Name</label>
                <input type='text' name="customerName" className='form-control ms-5' placeholder='Enter Name' />
              </div>
              <div className='form-group mt-3 col-9'>
                <label className='form-label fw-bold'>PAN Number</label>
                <input type='number' name="panNo" className='form-control ms-5' placeholder='Enter PAN Number' />
              </div>
              <div className='form-group mt-3 col-9'>
                <label className='form-label fw-bold'>Customer Contact No</label>
                <input type='number' name="customerContactno" className='form-control ms-5' placeholder='Enter Contact No' />
              </div>
              <div className='form-group mt-3 col-9'>
                <label className='form-label fw-bold'>Customer Account No</label>
                <input type='number' name="customerAccountno" className='form-control ms-5' placeholder='Enter Account No' />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Customer Place</label>
                <input type='text' name="customerPlace" className='form-control ms-5' placeholder='Enter Place' />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Customer Transaction Type</label>
                <input type='text' name="customerTransactiontype" className='form-control ms-5' placeholder='Enter Transaction Type' />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Transaction Number</label>
                <input type='number' name="transactionNumber" className='form-control ms-5' placeholder='Transaction Number' />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Transaction Amount</label>
                <input type='number' name="transactionAmount" className='form-control ms-5' placeholder='Transaction Amount' />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Transaction Date</label>
                <input type='date' name="transactionDate" className='form-control ms-5' placeholder='Transaction Date' />
              </div>
              <div className=' text-center mt-4 col-10 '>
                <button className='col-3 ms-3 btn btn-primary'>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}