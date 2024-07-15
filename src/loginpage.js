import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
import { Loginprocess } from './connect'
import { Bikeformdesign } from './bikeform'

export let Loginpage = () => {
    var [createpage, setCreatepage] = useState(false);

    let [loginuser, setLoginuser] = useState(
        {
            bikeBrand: "",
            password: ""
        }
    )

    let setter = (get) => {
        const { name, value } = get.target
        setLoginuser(
            (mydata) => {
                return {
                    ...mydata,
                    [name]: value
                }
            }
        )
    }

    var Register = async () => {
        // alert("Login Successfull...!" + JSON.stringify(loginuser))
        await Loginprocess(loginuser)
    }
    return (
        <>
            {
                (createpage) ?
                    <>
                        <Bikeformdesign />
                    </>
                    :
                    <>
                        <div className='mt-5'>
                            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <h2 className='fw-bold mt-4' style={{ color: 'whitesmoke' }}>Welcome to our Bike Showroom</h2>
                            </div>
                            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div class="wrapper col-md-6 col-lg-5" style={{ width: '490px' }}>
                                    <form action="">
                                        <h1 className='log fw-bold'>Login <span style={{ color: '#23aec0' }}>Page</span></h1>
                                        <div class="input-box">
                                            <input type="text" name='bikeBrand' onChange={setter} value={loginuser.bikeBrand} placeholder="Username" required />
                                            <i class='bi bi-person-circle'></i>
                                        </div>
                                        <div class="input-box">
                                            <input type="password" name='password' onChange={setter} value={loginuser.password} placeholder="Password" required />
                                            <i class='bi bi-lock-fill' ></i>
                                        </div>
                                        <div class="remember-forgot mt-1">
                                            <label><input type="checkbox" className='checkbox' /> Remember Me</label>
                                            <a href="#!">Forgot Password</a>
                                        </div>
                                        <button class="btn" onClick={
                                            Register
                                        }>
                                            Login</button>
                                        <div class="register-link">
                                            <p>Don't have an account? <a  className='ms-2' style={{ textDecoration: 'none' }}
                                                onClick={
                                                    () => {
                                                        setCreatepage(true)
                                                    }
                                                } >Register</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}