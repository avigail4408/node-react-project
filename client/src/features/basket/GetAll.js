
import { useDeleteAllProductMutation, useDeleteProductMutation, useGetAllQuery, useMinusOneMutation, usePlusOneMutation } from "./basketApiSlice"
import React, { useState, useEffect } from 'react';
// import { OrderList } from 'primereact/orderlist';
// import { useNavigate } from "react-router-dom";
import { DataScroller } from "primereact/datascroller";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import UseUser from "../user/UseUser";
//import { ProductService } from './service/ProductService';

const GetAll = () => {
    const { data: basket = [], isLoading, isError, isSuccess, refetch } = useGetAllQuery()
    const [deletAlleproduct] = useDeleteAllProductMutation()
    const [deleteProduct] = useDeleteProductMutation()
    const [plusone] = usePlusOneMutation()
    const [minusone] = useMinusOneMutation()
    // const [products, setProducts] = useState([]);
    const user = UseUser()


    //     const itemTemplate = (item) => {
    //         return (
    //             <div className="flex flex-wrap p-2 align-items-center gap-3">
    //                 <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} />
    //                 <div className="flex-1 flex flex-column gap-2 xl:mr-8">
    //                     <span className="font-bold">{item.name}</span>
    //                     <div className="flex align-items-center gap-2">
    //                         <i className="pi pi-tag text-sm"></i>
    //                         <span>{item.descreption}</span>
    //                     </div>
    //                 </div>
    //                 <span className="font-bold text-900">${item.price}</span>
    //             </div>
    //         );
    //     };

    //     return (
    //         <div className="card xl:flex xl:justify-content-center">
    //             <OrderList dataKey="id" value={basket}  itemTemplate={itemTemplate} header="Products"></OrderList>
    //         </div>
    //     )






    // const navigate = useNavigate()

    useEffect(() => {
        if (user)
            refetch()
        //ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
    const deleteOne = (productID) => {
        console.log(productID);
        // productID.preventDefault();
        deleteProduct({ productID })
    }
    const plusone1 = (productID) => {
        console.log(productID);
        plusone({ productID })
    }
    const minusone1 = (productID) => {
        minusone({ productID })
    }
    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                {console.log("data",data)}

                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`/בשמים/${data.productID?.image}.jpg`} alt={data.productID?.image} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                {/* <div className="text-2xl font-bold text-900">{data.name}</div> */}
                                <div className="text-2xl font-bold text-900">{data.productID?.descreption}</div>
                            </div>
                            <div className="flex flex-column gap-2">

                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                    <span className="font-semibold">count:{data.count}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">

                            <span className="text-2xl font-semibold">${data.productID?.price}</span>
                            <Button icon="pi pi-trash" label="" onClick={() => { deleteOne(data.productID._id) }} disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Button icon="pi" label="" onClick={() => { plusone1(data.productID._id) }} disabled={data.inventoryStatus === 'OUTOFSTOCK'}>+</Button>
                            <Button icon="pi" label="" onClick={() => { minusone1(data.productID._id) }} disabled={data.inventoryStatus === 'OUTOFSTOCK'}>-</Button>


                            {/* <AddToBasket data={product}></AddToBasket> */}


                            {/* <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="card">
            <DataScroller value={basket[0]?.products ?? []} itemTemplate={itemTemplate} rows={5} buffer={0.4} header="List of Products" />
            {basket[0]?.products?.length > 0 && <span className="text-2xl font-semibold">$total-sum:{basket[0]?.totalSum || 0}</span>}<br></br>
            {basket[0]?.products?.length > 0 && <Button icon="pi pi-trash" label="delete-ALL" onClick={() => { deletAlleproduct() }} ></Button>}
        </div>
    )
}
export default GetAll