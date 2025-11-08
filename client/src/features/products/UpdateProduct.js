// import { useNavigate } from "react-router-dom"
import { useUpdateProductMutation } from "./productsApiSlice"
// import { useState } from "react"
import { Button } from "primereact/button"
import { useEffect, useState } from "react"
import { useAddProductMutation } from "./productsApiSlice"
import { useNavigate } from 'react-router-dom';
// import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
// import { RadioButton } from 'primereact/radiobutton';
import { classNames } from 'primereact/utils';
import { Dialog } from 'primereact/dialog';
// import { useLocation } from 'react-router-dom';
const UpdateProduct = (data) => {
    const navigate = useNavigate()
    const [updateNewproduct, { isError, isLoading, error }] = useUpdateProductMutation()
    console.log("data:", data);
    // const [name, setName] = useState(data.data.name)
    // const [descreption, setDescreption] = useState(data.data.descreption)
    // const [price, setPrice] = useState(data.data.price)
    // const [stock, setStock] = useState()
    // const [image, setImage] = useState(data.data.image)
    const [showForm, setShowForm] = useState(false)

    const [selectedProduct, setSelectedProduct] = useState(null)
    // const location = useLocation();

    // useEffect(() => {
    //     {openNew()}
    // }, [location]);
    
    const [productDialog, setProductDialog] = useState(false);
    const [product, setProduct] = useState({
        // id: null,
        name: data.data.name,
        image: data.data.image,
        descreption: data.data.descreption,
        // category: null,
        price:    data.data.price
        
        // quantity: 0,
        // rating: 0,
        // inventoryStatus: 'INSTOCK'
    });
    const [submitted, setSubmitted] = useState(false);

    // const navigate = useNavigate()
    // const addproduct = (e) => {
    //     e.preventDefault()
    //     updateNewproduct({ name, descreption, price, stock, image })
    //     window.location.reload();
    //     // navigate("/products")
    // }
    const openNew = () => {
        setProduct({
            name: data.data.name,
            image: data.data.image,
            descreption: data.data.descreption,
            // category: null,
            price:    data.data.price
        });
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };
        _product[`${name}`] = val;
        setProduct(_product);
    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };
        _product[`${name}`] = val;
        setProduct(_product);
    };

    const onCategoryChange = (e) => {
        let _product = { ...product };
        _product['category'] = e.value;
        setProduct(_product);
    };
    const addproduct = async (product) => {
        // product.preventDefault()
        setSubmitted(true)

        // בדיקה פשוטה שהשם קיים לפני שליחה
        if (!product.name) return;

        try {
            await updateNewproduct({
                name: product.name,
                descreption: product.descreption,
                price: product.price,
                image: product.image, // שים לב: זה צריך להיות string ולא מספר!
                // category: product.category,
                //     quantity: product.quantity,
                //     rating: product.rating,
                //     inventoryStatus: product.inventoryStatus
            }).unwrap()

            setProductDialog(false)
            navigate("/products")
        } catch (err) {
            console.error("Failed to save the product: ", err)
        }
    }
    // const update = (data) => {
    //     console.log("product:", data.data);
    //     return (
    //         <form onSubmit={(e) => addproduct(e)}>
    //             <label>שם מוצר </label><br></br>
    //             <input type="text" placeholder={data.data.name} value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
    //             <label>תאור מוצר </label><br></br>
    //             <input type="text" placeholder={data.data.descreption} value={descreption} onChange={(e) => setDescreption(e.target.value)}></input><br></br>
    //             <label>מחיר מוצר </label><br></br>
    //             <input type="number" placeholder={data.data.price} value={price} onChange={(e) => setPrice(e.target.value)}></input><br></br>
    //             <label> במלאי </label><br></br>
    //             <input type="radio" value={stock} onChange={(e) => setStock(e.target.value)}></input><br></br>
    //             {/* <select>true</select>
    //         <select>false</select> */}

    //             <label>תמונת מוצר </label><br></br>
    //             <input type="text" placeholder={data.data.image} onChange={(e) => setImage(e.target.value)}></input><br></br>
    //             <button type="submit" >עדכון מוצר </button><br></br>
    //         </form>
    //     )
    // }

    return (<>
        <Button
            icon="pi pi-pencil"
            label="עדכן"
            onClick={() => {
                setSelectedProduct(data.data)
                setShowForm(true)
                openNew()
            }}
        />     {showForm && (
            //     <form onSubmit={addproduct}>
            //         <label>שם מוצר</label><br />
            //         <input
            //             type="text"
            //             defaultValue={selectedProduct?.name}
            //             // value={name}
            //             onChange={(e) => setName(e.target.value)}
            //         /><br />

            //         <label>תיאור מוצר</label><br />
            //         <input
            //             type="text"
            //             defaultValue={selectedProduct?.descreption}
            //             // value={descreption}
            //             onChange={(e) => setDescreption(e.target.value)}
            //         /><br />

            //         <label>מחיר</label><br />
            //         <input
            //             type="number"
            //             defaultValue={selectedProduct?.price}
            //             // value={price}
            //             onChange={(e) => setPrice(e.target.value)}
            //         /><br />

            //         <label>תמונה</label><br />
            //         <input
            //             type="text"
            //             defaultValue={selectedProduct?.image}
            //             // value={image}
            //             onChange={(e) => setImage(e.target.value)}
            //         /><br />

            //         <button type="submit">עדכן מוצר</button>
            //     </form>
            // )}


            <form
            // onSubmit={(e) => addproduct(e)}
            >
                {/* <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} /> */}
                {/* <Button
    type="button"
    label="New"
    icon="pi pi-plus"
    severity="success"
    onClick={openNew}
/> */}

                <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" onHide={hideDialog}>
                    <div className="field">
                        <label htmlFor="name" className="font-bold">Name</label>
                        <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                        {submitted && !product.name && <small className="p-error">Name is required.</small>}
                    </div>

                    <div className="field">
                        <label htmlFor="descreption" className="font-bold">Description</label>
                        <InputTextarea id="descreption" value={product.descreption} onChange={(e) => onInputChange(e, 'descreption')} required rows={3} cols={20} />
                    </div>

                    {/* <div className="field">
        <label className="mb-3 font-bold">Category</label>
        <div className="formgrid grid">
            <div className="field-radiobutton col-6">
                <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={product.category === 'Accessories'} />
                <label htmlFor="category1">Accessories</label>
            </div>
            {/* קטגוריות נוספות... */}
                    {/* </div>
    </div> */}

                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="price" className="font-bold">Price</label>
                            <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                        </div>
                        <div className="field col">
                            <label htmlFor="image" className="font-bold">Image</label>
                            <InputText id="image" value={product.image} onChange={(e) => onInputChange(e, 'image')} />
                        </div>
                    </div>

                    <div className="flex justify-content-end mt-3 gap-2">
                        <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
                        {console.log("product", product)}
                        <Button label="Save" icon="pi pi-check" onClick={() => addproduct(product)} />
                    </div>
                </Dialog>

                {/* <label>שם מוצר </label><br></br>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br></br>
            <label>תאור מוצר </label><br></br>
            <input type="text" value={descreption} onChange={(e) => setDescreption(e.target.value)}></input><br></br>
            <label>מחיר מוצר </label><br></br>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}></input><br></br>
            <label>תמונת מוצר </label><br></br>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)}></input><br></br>
            <button type="submit" >הוסף מוצר </button><br></br> */}
            </form>
    
        )  }           </>
    )
}
export default UpdateProduct