import { useSelector } from "react-redux"
import { jwtDecode } from "jwt-decode"


const UseUser = () => {
    const token = useSelector((state) => state.user.token)
    try {
        const objToken = jwtDecode(token)
  
        return [objToken]
    }
    catch (error) {
        return [null]
    }
}
export default UseUser