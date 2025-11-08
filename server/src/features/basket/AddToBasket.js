import { useNavigate } from "react-router-dom"
import { useAddProductToBasketMutation } from "./basketApiSlice"
import { useEffect } from "react";
import { Button } from "primereact/button";

const AddToBasket=(data)=>{
    const [addProductToBasket,{isError,isLoading,error,isSuccess}]=useAddProductToBasketMutation()
    const navigate=useNavigate()
    // useEffect(()=>{
    //     const add={productID:data.data._id}
       
    // },[])
    const addToBasket = ( data ) => {
        const add={productID:data.data._id}
        console.log("add",add);
        addProductToBasket(add)
        //  navigate("/basket")
    }
return(<>
 <Button icon="pi pi-shopping-cart" className="p-button-rounded" label="" onClick={() => addToBasket( data )} ></Button>

</>)
}
export default AddToBasket