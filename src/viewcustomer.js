import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'
import { Findbyonebrand, Listallcustomerdetails } from './connect'

export var Viewcustomer = () => {

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

    const setbikedata = async () =>{
        const t= await Findbyonebrand();
        setBikedata(t.data); 
    }

    useEffect(()=>{
        setbikedata();
    },[])

    const[allcustomer, setAllcustomer] = useState([{}]);

    const mycustomerdetails = async () =>{
        const t = await Listallcustomerdetails(bikedata.bikeBrand);
        setAllcustomer(t.data);
        alert(JSON.stringify(t.data));
    }

    return (
        <>
            <div className="container-fluid mt-2">
                <div className="row justify-content-center align-items-center">
                    <button className='btn btn-outline-light col-5 fw-bold' onClick={() =>
                        mycustomerdetails()
                   }>Show Customers</button>
                    <div className="table-responsive-md " style={{ overflowX: 'auto' }}>
                        <table className=" table text-center table-striped table-primary">
                            <thead>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>PAN No</th>
                                    <th>Contact No</th>
                                    <th>Account No</th>
                                    <th>Place</th>
                                    <th>Transaction Type</th>
                                    <th>Transaction Number</th>
                                    <th>Transaction Amount</th>
                                    <th>Transaction Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allcustomer.map((data)=>(
                                        <tr>
                                            <td>{data.customerName}</td>
                                            <td>{data.panNo}</td>
                                            <td>{data.customerContactno}</td>
                                            <td>{data.customerAccountno}</td>
                                            <td>{data.customerPlace}</td>
                                            <td>{data.customerTransactiontype}</td>
                                            <td>{data.transactionNumber}</td>
                                            <td>{data.transactionAmount}</td>
                                            <td>{data.transactionDate}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}