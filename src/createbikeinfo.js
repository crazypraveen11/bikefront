import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export var Createbikedata = () => {

    return (
        <>
            <div className="container-fluid mt-2" style={{ width: '1340px' }}>
                <div className="row justify-content-center align-items-center">
                    <div className="table-responsive-md " style={{ overflowX: 'auto' }}>
                        <table className=" table text-center table-striped table-primary">
                            <thead id="texting">
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
                                    <td>5432198765412</td>
                                    <td>YAMAHA</td>
                                    <td>R15</td>
                                    <td>150000</td>
                                    <td>200CC</td>
                                    <td>2023</td>
                                    <td>100Kg</td>
                                    <td>55Kmpl</td>
                                    <td>ABS</td>
                                    <td>@R15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
