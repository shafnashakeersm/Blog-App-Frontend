import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [user, setUser] = useState(
        {
            "name": "",
            "email": "",
            "pasword": "",
            
        }
    )
    const inputHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    const readValue = () => {
       
        console.log(user)
        if (user.password==user.conformpassword)
            {
        axios.post("http://localhost:8080/signup", user).then(
            (Response) => {
                
                console.log(Response.data)
               
                
                if (Response.data.status == "success") {
                    alert("successfull")

                } else {
                    alert("Error")

                }
               
            
            }
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={user.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="date" id="" className="form-control" name='email' value={user.email} onChange={inputHandler} />
                            </div>
                           
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="text" className="form-control" name='pasword' value={user.pasword} onChange={inputHandler} />
                            </div>
                           
                           
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div className="row">
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <label htmlFor="" className="form label"><a href='http://localhost:3001/login'>back to login</a></label>
                                            </div>

                                        </div>
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-6 col-xxl-6">
                                                <button className="btn btn-success" onClick={readValue}>REGISTER</button>

                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default SignUp