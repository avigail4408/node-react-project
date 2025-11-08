import { useEffect, useState } from "react"
import { useRegisterMutation } from "./UserApiSlice"
import { useNavigate } from "react-router-dom"
import { AutoComplete } from "primereact/autocomplete";
import { Message } from "primereact/message";
import { Button } from "primereact/button";
const Register = () => {
    const navigate = useNavigate();
    const [register, { isError, isLoading, isSuccess, error }] = useRegisterMutation()




    useEffect(() => {
        if (isSuccess)
            setTimeout(() => navigate("/login"), 1500)
    }, [isSuccess])
    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        name: "",
        phone: "",
        email: ""

    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        register(formData)
        { (isSuccess) && (<h1>נרשמת בהצלחה</h1>) }
    }
    return (
        <>
            {(isLoading) && <p>טוען...</p>}
            {(isSuccess) && (<h1>נרשמת בהצלחה</h1>)}
            {isError && <Message severity="error" text="Error:Please check that your login details are correct and try again." />}
<h1>new user?</h1>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <br></br>
                {/* <label>שם משתמש</label><br></br>
                <input type="text" name="userName" required onChange={(e) => handleChange(e)}></input><br></br> */}
                <div className="card flex justify-content-center">
                    <span className="p-float-label">
                        <AutoComplete inputId="text" name="userName" required="true" value={formData.userName} onChange={(e) => handleChange(e)} />
                        <label htmlFor="text">user name</label>
                    </span>
                </div><br></br>

                {/* <label>סיסמא</label><br></br>
                <input type="password" name="password" required onChange={(e) => handleChange(e)}></input><br></br> */}

                <div className="card flex justify-content-center">
                    <span className="p-float-label">
                        <AutoComplete inputId="password" type="password" required="true" name="password" value={formData.password} onChange={(e) => handleChange(e)} />
                        <label htmlFor="password">password</label>
                    </span>
                </div><br></br>
                {/*                 
                <label>שם</label><br></br>
                
            <input type="text" name="name" onChange={(e) => handleChange(e)}></input><br></br> */}
                <div className="card flex justify-content-center">
                    <span className="p-float-label">
                        <AutoComplete inputId="text" name="name" required="true" value={formData.name} onChange={(e) => handleChange(e)} />
                        <label htmlFor="text">name</label>
                    </span>
                </div><br></br>
                {/* <label>מספר טלפון</label><br></br>
                <input type="text" name="phone" onChange={(e) => handleChange(e)}></input><br></br> */}
                <div className="card flex justify-content-center">
                    <span className="p-float-label">
                        <AutoComplete inputId="text"  name="phone" value={formData.phone} onChange={(e) => handleChange(e)} />
                        <label htmlFor="text">phone number</label>
                    </span>
                </div><br></br>
                <div className="card flex justify-content-center">
                    <span className="p-float-label">
                        <AutoComplete inputId="email" type="email" name="email" value={formData.email} onChange={(e) => handleChange(e)} />
                        <label htmlFor="email">email</label>
                    </span>
                </div><br></br>
                {/* <label>מייל</label><br></br>
                <input type="email" name="email" onChange={(e) => handleChange(e)}></input><br></br> */}
                <div className="card flex justify-content-center">
                    <Button type="submit" label="Register" />
                </div>
                {/* <button type="submit">register</button> */}
            </form>
        </>

    )
}

export default Register