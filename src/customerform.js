import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'

export let Customerform = () => {

  var [customerdata, setCustomerdata] = useState(
    {
      customerName: "",
      panNo: 0,
      customerContactno: 0,
      customerAccountno: 0,
      customerPlace: "",
      customerTransactiontype: "",
      transactionNumber: 0,
      transactionAmount: 0,
      transactionDate: ""
    }
  )

  var setter = (get) => {
    let { name, value } = get.target
    setCustomerdata(
      (mydata) => {
        return {
          ...mydata,
          [name]: value
        }
      }
    )
  }

  var Submit=()=>{
    alert("Created Successfully..!"+JSON.stringify(customerdata));
  }
  return (
    <>
      <div className='container-fluid mt-2' style={{ width: '900px', color: 'white' }}>
        <div className='row justify-content-center'>
          <div className=' col-lg-8 col-md-0 col-sm-12 shadow-lg p-2'>
            <h1 className='text-center'>Create Customer Details</h1>
            <div className='container'>
              <div className='form-group mt-4 col-9 '>
                <label className='form-label fw-bold'>Customer Name</label>
                <input type='text' name="customerName" value={customerdata.customerName}
                  className='form-control ms-5' placeholder='Enter Name' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9'>
                <label className='form-label fw-bold'>PAN Number</label>
                <input type='number' name="panNo" value={customerdata.panNo}
                  className='form-control ms-5' placeholder='Enter PAN Number' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9'>
                <label className='form-label fw-bold'>Customer Contact No</label>
                <input type='number' name="customerContactno" value={customerdata.customerContactno}
                  className='form-control ms-5' placeholder='Enter Contact No' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9'>
                <label className='form-label fw-bold'>Customer Account No</label>
                <input type='number' name="customerAccountno" value={customerdata.customerAccountno}
                  className='form-control ms-5' placeholder='Enter Account No' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Customer Place</label>
                <input type='text' name="customerPlace" value={customerdata.customerPlace}
                  className='form-control ms-5' placeholder='Enter Place' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Customer Transaction Type</label>
                <input type='text' name="customerTransactiontype" value={customerdata.customerTransactiontype}
                  className='form-control ms-5' placeholder='Enter Transaction Type' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Transaction Number</label>
                <input type='number' name="transactionNumber" value={customerdata.transactionNumber}
                  className='form-control ms-5' placeholder='Transaction Number' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Transaction Amount</label>
                <input type='number' name="transactionAmount" value={customerdata.transactionAmount}
                  className='form-control ms-5' placeholder='Transaction Amount' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Transaction Date</label>
                <input type='date' name="transactionDate" value={customerdata.transactionDate}
                  className='form-control ms-5' placeholder='Transaction Date' onChange={setter} />
              </div>
              <div className=' text-center mt-4 col-10 '>
                <button className='col-3 ms-3 btn btn-info' onClick={Submit}><a href='/'>SUBMIT</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}