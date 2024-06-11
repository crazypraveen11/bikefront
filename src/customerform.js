import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'
import { Createcustomerdetails, Findbyonebrand } from './connect'
import { useNavigate } from 'react-router'

export let Customerform = () => {

  const navigate = useNavigate();
  var [newcustomer, setNewcustomer] = useState(
    {
      customerName: "",
      panNo: 0,
      customerContactno: 0,
      customerAccountno: 0,
      customerPlace: "",
      customerTransactiontype: "",
      transactionNumber: 0,
      transactionAmount: 0.0,
      transactionDate: "",
      bike: {}
    }
  )

  var [bike, setBike] = useState(
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

  const setbikedetails = async () => {
    const temp = await Findbyonebrand();
    newcustomer.bike = temp.data;
  }

  var setter = (get) => {
    let { name, value } = get.target
    setNewcustomer((mydata) => {
      return {
        ...mydata,
        [name]: value
      }
    })
  }

  useEffect(() => {
    setbikedetails();
  })


  return (
    <>
      <div className='container-fluid mt-2' style={{ width: '900px', color: 'white' }}>
        <div className='row justify-content-center'>
          <div className=' col-lg-8 col-md-0 col-sm-12 shadow-lg p-2'>
            <h1 className='text-center'>Create Customer Details</h1>
            <div className='container'>
              <div className='form-group mt-4 col-9 '>
                <label className='form-label fw-bold'>Customer Name</label>
                <input type='text' name="customerName" value={newcustomer.customerName}
                  className='form-control ms-5' placeholder='Enter Name' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9'>
                <label className='form-label fw-bold'>PAN Number</label>
                <input type='text' name="panNo" value={newcustomer.panNo}
                  className='form-control ms-5' placeholder='Enter PAN Number' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9'>
                <label className='form-label fw-bold'>Customer Contact No</label>
                <input type='number' name="customerContactno" value={newcustomer.customerContactno}
                  className='form-control ms-5' placeholder='Enter Contact No' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9'>
                <label className='form-label fw-bold'>Customer Account No</label>
                <input type='number' name="customerAccountno" value={newcustomer.customerAccountno}
                  className='form-control ms-5' placeholder='Enter Account No' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Customer Place</label>
                <input type='text' name="customerPlace" value={newcustomer.customerPlace}
                  className='form-control ms-5' placeholder='Enter Place' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Customer Transaction Type</label>
                <input type='text' name="customerTransactiontype" value={newcustomer.customerTransactiontype}
                  className='form-control ms-5' placeholder='Enter Transaction Type' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Transaction Number</label>
                <input type='number' name="transactionNumber" value={newcustomer.transactionNumber}
                  className='form-control ms-5' placeholder='Transaction Number' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Transaction Amount</label>
                <input type='number' name="transactionAmount" value={newcustomer.transactionAmount}
                  className='form-control ms-5' placeholder='Transaction Amount' onChange={setter} />
              </div>
              <div className='form-group mt-3 col-9 '>
                <label className='form-label fw-bold'>Transaction Date</label>
                <input type='date' name="transactionDate" value={newcustomer.transactionDate}
                  className='form-control ms-5' placeholder='Transaction Date' onChange={setter} />
              </div>
              <div className=' text-center mt-4 col-10 '>
                <button className='col-3 ms-3 btn btn-info'
                  onClick={async () => {
                    const t = await Createcustomerdetails(newcustomer);
                    navigate("/viewcustomer");
                  }} >SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}