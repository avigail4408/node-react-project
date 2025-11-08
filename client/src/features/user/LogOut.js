import { useDispatch, useSelector } from "react-redux"
import { removeToken } from "./UserSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const LogOut = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(removeToken())
        // dispatch(clear)
        navigate("/")
    })
    

    return(
        <></>
    )
}
export default LogOut