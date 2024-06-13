import axios from 'axios'
import React, { useState } from 'react'

const SignIn = () => {
    const[data,setData]=useState(
        {
            "email":"",
            "pasword":"",
            
        }
    )

    const inputHandler=(event) => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const readValue=() => {
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully Added")
                } else {
                    alert("Error")
                }
            }
        ).catch().finally()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-2 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">E-mail</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> 
                            <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="text" className="form-control" name='pasword' value={data.pasword} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>LOGIN</button>
                        </div>
                      <a href="#">SignUp</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn