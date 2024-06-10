import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export var Viewcustomer = () => {

    return (
        <>
            <div className="container-fluid mt-2">
                <div className="row justify-content-center align-items-center">
                    <div className="table-responsive-md " style={{ overflowX: 'auto' }}>
                        <table className=" table text-center table-striped table-primary">
                            <thead id="texting">
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
                                <tr>
                                    <td>Praveen</td>
                                    <td>GIHPP0321N</td>
                                    <td>6379873794</td>
                                    <td>876542345612</td>
                                    <td>Namakkal</td>
                                    <td>Credit</td>
                                    <td>432234563456</td>
                                    <td>12000</td>
                                    <td>12-05-2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}