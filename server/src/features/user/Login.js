import { useEffect } from "react";
import { useLoginMutation } from "./UserApiSlice"
import { useNavigate } from "react-router-dom";
import { setToken } from "./UserSlice";
import { useDispatch } from "react-redux"; 
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { Message } from 'primereact/message';

// import React from 'react'; 
import { Button } from 'primereact/button';
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loginFunc, { isError, isLoading, error,isSuccess,data }] = useLoginMutation();

    const [formData, setformData] = useState({})

    useEffect(()=>{
        if(isSuccess){
            console.log(data.accessToken);
            dispatch(setToken({token:data.accessToken}))
            navigate("/products")
        }

    },[isSuccess])
    const handelChange = (e) => {
        const { name, value } = e.target
        setformData({
            ...formData,
            [name]: value

        })
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        loginFunc(formData)
    }
    // const search = (event) => {
    //     setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    // }

    return (
        <>
        {isError && <Message severity="error" text="Error:Please check that your login details are correct and try again." />}
            <form onSubmit={(e) => { handelSubmit(e) }}>
                <br></br>
                {/* <label>שם משתמש</label><br></br>
                <input type="text" name="userName" onChange={(e) => handelChange(e)}></input><br></br> */}
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <AutoComplete inputId="ac" name="userName" value={formData.userName}  onChange={(e) => handelChange(e)} />
                <label htmlFor="ac">user name</label>
            </span>
        </div><br></br><br></br>
    

        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <AutoComplete inputId="ac" name="password" value={formData.password}  onChange={(e) => handelChange(e)} />
                <label htmlFor="ac">password</label>
            </span>
        </div>
                {/* <label>סיסמא</label><br></br>
               
               <input type="text" name="password" onChange={(e) => handelChange(e)}></input><br></br><br></br> */}
               


<br></br>
    
        <div className="card flex justify-content-center">
            <Button type="submit" className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
            login</Button>
        </div>
    

        
               
               
                {/* <button type="submit">להתחברות</button><br></br> */}
            </form>
        </>
    )
}

export default Login