
// // import { Button } from 'primereact/button';
// // import { DataScroller } from 'primereact/datascroller';
// // import { Rating } from 'primereact/rating';
// // import { useDeleteAllProdectMutation, useDeleteProdectMutation, useGetAllProductQuery } from "./productsApiSlice"
// // import AddToBasket from '../basket/AddToBasket';
// // import { Link, NavLink, useNavigate } from 'react-router-dom';
// // import React, { useState, useEffect, createContext } from 'react';
// // import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// // import { Tag } from 'primereact/tag';
// // import { classNames } from 'primereact/utils'
// // import UseUser from '../user/UseUser';
// // import UpdateProduct from './UpdateProduct';


// // // export default function GetAllProduct() {

// // //     useEffect(() => {
// // //         //ProductService.getProducts().then((data) => setProducts(data));
// // //     }, []); // eslint-disable-line react-hooks/exhaustive-deps

// // //     const getSeverity = (product) => {
// // //         switch (product.inventoryStatus) {
// // //             case 'INSTOCK':
// // //                 return 'success';

// // //             case 'LOWSTOCK':
// // //                 return 'warning';

// // //             case 'OUTOFSTOCK':
// // //                 return 'danger';

// // //             default:
// // //                 return null;
// // //         }
// // //     };

// // //     const itemTemplate = (data) => {
// // //         return (
// // //             <div className="col-12">
// // //                 <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
// // //                     <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${data.image}`} alt={data.name} />
// // //                     <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
// // //                         <div className="flex flex-column align-items-center lg:align-items-start gap-3">
// // //                             <div className="flex flex-column gap-1">
// // //                                 <div className="text-2xl font-bold text-900">{data.name}</div>
// // //                                 <div className="text-700">{data.description}</div>
// // //                             </div>
// // //                             <div className="flex flex-column gap-2">
// // //                                 <Rating value={data.rating} readOnly cancel={false}></Rating>
// // //                                 <span className="flex align-items-center gap-2">
// // //                                     <i className="pi pi-tag product-category-icon"></i>
// // //                                     <span className="font-semibold">{data.category}</span>
// // //                                 </span>
// // //                             </div>
// // //                         </div>
// // //                         <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
// // //                             <span className="text-2xl font-semibold">${data.price}</span>
// // //                             <AddToBasket data={data}></AddToBasket>
// // //                             <Button icon="pi pi-trash" label="delete" onClick={() => { onDelete(data.name) }} disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
// // //                             {/* <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag> */}
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         );
// // //     };

// // //     return (
// // //         <div className="card">
// // //             <DataScroller value={products} itemTemplate={itemTemplate} rows={5} buffer={0.4} header="List of Products" />
// // //             <Button icon="pi pi-trash" label="delete-ALL" onClick={() => { deletAlleproduct() }} ></Button>
// // //         </div>
// // //     )
// // // }


// // export default function GetAllProduct() {
// //     const navigate = useNavigate()


// //     const [objToken] = UseUser()

// //     const { data: product = [], isError, isLoading, error } = useGetAllProductQuery()
// //     const [deleteproduct, { isLoading: isLoading1, isError: isError1, isSuccess }] = useDeleteProdectMutation()
// //     const [deletAlleproduct, { isLoading: isLoading2, isError: isError2, isSuccess: isSuccess2 }] = useDeleteAllProdectMutation()
// //     const price = createContext()
// //     const onDelete = (name) => {
// //         deleteproduct({ name })
// //         console.log(name);
// //     }
// //     const update = () => {
// //         navigate("/updateProduct")
// //     }
// //     // const [count, setcount] = useState(1);
// //     const [layout, setLayout] = useState('grid');

// //     // useEffect(() => {
// //     //     ProductService.getProducts().then((product) => setProducts(product.slice(0, 12)));
// //     // }, []);

// //     const getSeverity = (product) => {
// //         switch (product.inventoryStatus) {
// //             case 'INSTOCK':
// //                 return 'success';

// //             case 'LOWSTOCK':
// //                 return 'warning';

// //             case 'OUTOFSTOCK':
// //                 return 'danger';

// //             default:
// //                 return null;
// //         }
// //     };

// //     const listItem = (product, index) => {

// //         return (
// //             <div className="col-12" key={product.id}>
// //                 {console.log("product", product)}

// //                 <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
// //                     <img style={{ width: "100px", height: "100px", objectFit: "cover" }} //className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
// //                         src={`/בשמים/${product.image}.jpg`} alt={product.image} />
// //                     <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
// //                         <div className="flex flex-column align-items-center sm:align-items-start gap-3">
// //                             <div className="text-2xl font-bold text-900">{product.name}</div>
// //                             <Rating value={product.rating} readOnly cancel={false}></Rating>
// //                             <div className="flex align-items-center gap-3">
// //                                 <span className="flex align-items-center gap-2">
// //                                     <i className="pi pi-tag"></i>
// //                                     <span className="font-semibold">{product.category}</span>

// //                                 </span>
// //                                 <NavLink to={`/products/${product._id}`}><span className="font-semibold">{product.descreption}</span></NavLink>

// //                                 {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
// //                             </div>
// //                         </div>
// //                         <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
// //                             <span className="text-2xl font-semibold">${product.price}</span>
// //                             {objToken?.roles == "Admin" && <UpdateProduct data={product}></UpdateProduct>}
// //                             {objToken?.roles == "Admin" && <Button icon="pi pi-trash" label="" onClick={() => { onDelete(product.name) }} disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>}
// //                             {objToken != null && <AddToBasket data={product}></AddToBasket>}
// //                             {/* <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     };

// //     const gridItem = (product) => {
// //         { console.log("objToken", objToken) }
// //         return (
// //             <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
// //                 <div className="p-4 border-1 surface-border surface-card border-round">
// //                     <div className="flex flex-wrap align-items-center justify-content-between gap-2">
// //                         <div className="flex align-items-center gap-2">
// //                             <i className="pi pi-tag"></i>
// //                             <span className="font-semibold">{product.category}</span>
// //                         </div>

// //                         {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
// //                     </div>
// //                     <div className="flex flex-column align-items-center gap-3 py-5">
// //                         <img className="w-9 shadow-2 border-round" src={`/בשמים/${product.image}.jpg`} alt={product.image} />
// //                         <div className="text-2xl font-bold">{product.name}</div>
// //                         <NavLink to={`/products/${product._id}`}> <span className="font-semibold">{product.descreption}</span></NavLink>
// //                         <Rating value={product.rating} readOnly cancel={false}></Rating>


// //                     </div>

// //                     <div className="flex align-items-center justify-content-between">
// //                         <span className="text-2xl font-semibold">${product.price}</span>
// //                         {console.log(product)}
// //                         {/* <Button icon="" className="p-button-rounded" onClick={()=>setcount(count++)} disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
// //                         {objToken?.roles == "Admin" && <UpdateProduct data={product}></UpdateProduct>}
// //                         {objToken?.roles == "Admin" && <Button icon="pi pi-trash" label="delete" onClick={() => { onDelete(product.name) }} disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>}
// //                         {/* <UpdateProduct></UpdateProduct> */}
// //                         {objToken != null && <AddToBasket data={product}></AddToBasket>}


// //                         {/* <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button> */}
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     };

// //     const itemTemplate = (product, layout, index) => {
// //         if (!product) {
// //             return;
// //         }

// //         if (layout === 'list') return listItem(product, index);
// //         else if (layout === 'grid') return gridItem(product);
// //     };

// //     const listTemplate = (products, layout) => {
// //         return <div className="grid grid-nogutter">{products.map((product, index) => itemTemplate(product, layout, index))}</div>;
// //     };

// //     const header = () => {
// //         return (
// //             <div className="flex justify-content-end">
// //                 <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
// //             </div>
// //         );
// //     };

// //     return (
// //         <div className="card">
// //             <DataView value={product} listTemplate={listTemplate} layout={layout} header={header()} />
// //             {objToken?.roles == "Admin" && <Button icon="pi pi-trash" label="delete-ALL" onClick={() => { deletAlleproduct() }} ></Button>}

// //         </div>
// //     )
// // }

// // import React, { useState, createContext } from 'react';
// // import { useNavigate, NavLink } from 'react-router-dom';
// // import { Button } from 'primereact/button';
// // import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// // import { Rating } from 'primereact/rating';
// // import { classNames } from 'primereact/utils';
// // import { useDeleteAllProdectMutation, useDeleteProdectMutation, useGetAllProductQuery } from './productsApiSlice';
// // import AddToBasket from '../basket/AddToBasket';
// // import UseUser from '../user/UseUser';
// // import UpdateProduct from './UpdateProduct';

// // import 'primereact/resources/themes/lara-light-pink/theme.css';
// // import 'primereact/resources/primereact.min.css';
// // import 'primeicons/primeicons.css';

// // export default function GetAllProduct() {
// //     const navigate = useNavigate();
// //     const [objToken] = UseUser();
// //     const { data: product = [] } = useGetAllProductQuery();
// //     const [deleteproduct] = useDeleteProdectMutation();
// //     const [deletAlleproduct] = useDeleteAllProdectMutation();
// //     const price = createContext();
// //     const [layout, setLayout] = useState('grid');

// //     const onDelete = (name) => {
// //         deleteproduct({ name });
// //         console.log(name);
// //     };

// //     const listItem = (product, index) => {
// //         return (
// //             <div className="col-12" key={product._id}>
// //                 <div className={classNames('product-item-list', { 'border-top-1 surface-border': index !== 0 })}>
// //                     <img className="product-image" src={`/בשמים/${product.image}.jpg`} alt={product.name} />
// //                     <div className="product-details">
// //                         <div className="product-main">
// //                             <div className="product-title">{product.name}</div>
// //                             <Rating value={product.rating} readOnly cancel={false} />
// //                             <div className="product-meta">
// //                                 <i className="pi pi-tag"></i>
// //                                 <span>{product.category}</span>
// //                                 <NavLink to={`/products/${product._id}`} className="product-link">{product.descreption}</NavLink>
// //                             </div>
// //                         </div>
// //                         <div className="product-actions">
// //                             <span className="product-price">${product.price}</span>
// //                             {objToken?.roles === 'Admin' && <UpdateProduct data={product} />}
// //                             {objToken?.roles === 'Admin' && <Button icon="pi pi-trash" onClick={() => onDelete(product.name)} />}
// //                             {objToken && <AddToBasket data={product} />}
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         );
// //     };

// //     const gridItem = (product) => {
// //         return (
// //             <div className="product-card" key={product._id}>
// //                 <div className="product-card-header">
// //                     <i className="pi pi-tag"></i>
// //                     <span>{product.category}</span>
// //                 </div>
// //                 <div className="product-card-body">
// //                     <img className="product-image" src={`/בשמים/${product.image}.jpg`} alt={product.name} />
// //                     <div className="product-title">{product.name}</div>
// //                     <NavLink to={`/products/${product._id}`} className="product-link">{product.descreption}</NavLink>
// //                     <Rating value={product.rating} readOnly cancel={false} />
// //                 </div>
// //                 <div className="product-actions">
// //                     <span className="product-price">${product.price}</span>
// //                     {objToken?.roles === 'Admin' && <UpdateProduct data={product} />}
// //                     {objToken?.roles === 'Admin' && <Button icon="pi pi-trash" label="" onClick={() => onDelete(product.name)} />}
// //                     {objToken && <AddToBasket data={product} />}
// //                 </div>
// //             </div>
// //         );
// //     };

// //     const itemTemplate = (product, layout, index) => {
// //         if (!product) return;
// //         return layout === 'list' ? listItem(product, index) : gridItem(product);
// //     };

// //     const listTemplate = (products, layout) => {
// //         return <div className="grid grid-nogutter">{products.map((product, i) => itemTemplate(product, layout, i))}</div>;
// //     };

// //     const header = () => (
// //         <div className="flex justify-content-end">
// //             <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
// //         </div>
// //     );

// //     return (
// //         <div className="card">
// //             <style>{`
// //                 .card {
// //                     background-color: #fff0f5;
// //                     border-radius: 1rem;
// //                     padding: 2rem;
// //                     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
// //                 }
// //                 .product-card, .product-item-list {
// //                     background-color: #ffffff;
// //                     border-radius: 1rem;
// //                     padding: 1rem;
// //                     margin-bottom: 1rem;
// //                     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
// //                     display: flex;
// //                     flex-direction: column;
// //                     gap: 1rem;
// //                 }
// //                 .product-image {
// //                     border-radius: 1rem;
// //                     width: 100px;
// //                     height: 100px;
// //                     object-fit: cover;
// //                     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
// //                 }
// //                 .product-title {
// //                     font-size: 1.5rem;
// //                     color: #880e4f;
// //                     font-weight: bold;
// //                 }
// //                 .product-meta, .product-link {
// //                     color: #ad1457;
// //                     font-weight: 500;
// //                     text-decoration: none;
// //                 }
// //                 .product-price {
// //                     font-size: 1.4rem;
// //                     color: #6a1b9a;
// //                 }
// //                 .p-button {
// //                     background-color: #f8bbd0 !important;
// //                     border: none !important;
// //                     color: #4a148c !important;
// //                     border-radius: 2rem !important;
// //                     transition: 0.3s ease-in-out;
// //                 }
// //                 .p-button:hover {
// //                     background-color: #f48fb1 !important;
// //                 }
// //             `}</style>
// //             <DataView value={product} listTemplate={listTemplate} layout={layout} header={header()} />
// //             {objToken?.roles === 'Admin' && (
// //                 <Button icon="pi pi-trash" label="מחק הכל" onClick={() => deletAlleproduct()} className="p-button" />
// //             )}
// //         </div>
// //     );
// // }

// // import React, { useState, createContext } from 'react';
// // import { useNavigate, NavLink } from 'react-router-dom';
// // import { Button } from 'primereact/button';
// // import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// // import { Rating } from 'primereact/rating';
// // import { classNames } from 'primereact/utils';
// // import { useDeleteAllProdectMutation, useDeleteProdectMutation, useGetAllProductQuery } from './productsApiSlice';
// // import AddToBasket from '../basket/AddToBasket';
// // import UseUser from '../user/UseUser';
// // import UpdateProduct from './UpdateProduct';

// // import 'primereact/resources/themes/lara-light-pink/theme.css';
// // import 'primereact/resources/primereact.min.css';
// // import 'primeicons/primeicons.css';

// // export default function GetAllProduct() {
// //     const navigate = useNavigate();
// //     const [objToken] = UseUser();
// //     const { data: product = [] } = useGetAllProductQuery();
// //     const [deleteproduct] = useDeleteProdectMutation();
// //     const [deletAlleproduct] = useDeleteAllProdectMutation();
// //     const price = createContext();
// //     const [layout, setLayout] = useState('grid');

// //     const onDelete = (name) => {
// //         deleteproduct({ name });
// //     };

// //     const gridItem = (product) => {
// //         return (
// //             <div className="product-card" key={product._id}>
// //                 <div className="product-card-header">
// //                     <i className="pi pi-tag"></i>
// //                     <span>{product.category}</span>
// //                 </div>
// //                 <div className="product-card-body">
// //                     <img className="product-image" src={`/בשמים/${product.image}.jpg`} alt={product.name} />
// //                     <div className="product-title">{product.name}</div>
// //                     <NavLink to={`/products/${product._id}`} className="product-link">{product.descreption}</NavLink>
// //                     <Rating value={product.rating} readOnly cancel={false} />
// //                 </div>
// //                 <div className="product-actions">
// //                     <span className="product-price">${product.price}</span>
// //                     {objToken?.roles === 'Admin' && <UpdateProduct data={product} />}
// //                     {objToken?.roles === 'Admin' && <Button icon="pi pi-trash" onClick={() => onDelete(product.name)} className="p-button-outlined" />}
// //                     {objToken && <AddToBasket data={product} />}
// //                 </div>
// //             </div>
// //         );
// //     };

// //     const itemTemplate = (product, layout, index) => {
// //         if (!product) return;
// //         return gridItem(product);
// //     };

// //     const listTemplate = (products) => {
// //         return <div className="product-grid">{products.map((product, i) => itemTemplate(product, layout, i))}</div>;
// //     };

// //     const header = () => (
// //         <div className="flex justify-content-end pb-4">
// //             <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
// //         </div>
// //     );

// //     return (
// //         <div className="card">
// //             <style>{`
// //                 .card {
// //                     background-color: #ffffff;
// //                     border-radius: 1rem;
// //                     padding: 2rem;
// //                     max-width: 1400px;
// //                     margin: auto;
// //                 }
// //                 .product-grid {
// //                     display: grid;
// //                     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
// //                     gap: 2rem;
// //                 }
// //                 .product-card {
// //                     background-color: #fdfdfd;
// //                     border: 1px solid #eee;
// //                     border-radius: 1rem;
// //                     padding: 1rem;
// //                     display: flex;
// //                     flex-direction: column;
// //                     justify-content: space-between;
// //                     text-align: center;
// //                     transition: transform 0.2s;
// //                 }
// //                 .product-card:hover {
// //                     transform: translateY(-5px);
// //                     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
// //                 }
// //                 .product-image {
// //                     width: 100%;
// //                     height: 180px;
// //                     object-fit: cover;
// //                     border-radius: 0.75rem;
// //                     margin-bottom: 1rem;
// //                 }
// //                 .product-title {
// //                     font-size: 1.2rem;
// //                     font-weight: bold;
// //                     color: #333;
// //                     margin-bottom: 0.5rem;
// //                 }
// //                 .product-link {
// //                     text-decoration: none;
// //                     color: #c2185b;
// //                     font-weight: 500;
// //                 }
// //                 .product-price {
// //                     font-size: 1.3rem;
// //                     font-weight: bold;
// //                     color: #880e4f;
// //                     margin-bottom: 0.5rem;
// //                 }
// //                 .p-button {
// //                     background-color: #f8bbd0 !important;
// //                     border: none !important;
// //                     color: #880e4f !important;
// //                     border-radius: 2rem !important;
// //                     font-weight: 500;
// //                 }
// //                 .p-button-outlined {
// //                     color: #880e4f !important;
// //                     border: 1px solid #f48fb1 !important;
// //                     background: transparent !important;
// //                     border-radius: 2rem !important;
// //                 }
// //                 .p-button-outlined:hover {
// //                     background: #fce4ec !important;
// //                 }
// //                 .product-card-header {
// //                     font-size: 0.9rem;
// //                     color: #c2185b;
// //                     margin-bottom: 0.5rem;
// //                 }
// //                 .product-card-body {
// //                     margin-bottom: 1rem;
// //                 }
// //                 .product-actions {
// //                     display: flex;
// //                     flex-direction: column;
// //                     gap: 0.5rem;
// //                     align-items: center;
// //                 }
// //             `}</style>
// //             <DataView value={product} listTemplate={listTemplate} layout={layout} header={header()} />
// //             {objToken?.roles === 'Admin' && (
// //                 <div className="pt-4 text-center">
// //                     <Button icon="pi pi-trash" label="מחק הכל" onClick={() => deletAlleproduct()} className="p-button" />
// //                 </div>
// //             )}
// //         </div>
// //     );
// // }


// import React, { useState, createContext } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
// import { Rating } from 'primereact/rating';
// import { classNames } from 'primereact/utils';
// import { useDeleteAllProdectMutation, useDeleteProdectMutation, useGetAllProductQuery } from './productsApiSlice';
// import AddToBasket from '../basket/AddToBasket';
// import UseUser from '../user/UseUser';
// import UpdateProduct from './UpdateProduct';

// import 'primereact/resources/themes/lara-light-pink/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

// export default function GetAllProduct() {
//     const navigate = useNavigate();
//     const [objToken] = UseUser();
//     const { data: product = [] } = useGetAllProductQuery();
//     const [deleteproduct] = useDeleteProdectMutation();
//     const [deletAlleproduct] = useDeleteAllProdectMutation();
//     const price = createContext();
//     const [layout, setLayout] = useState('grid');

//     const onDelete = (name) => {
//         deleteproduct({ name });
//     };

//     const listItem = (product, index) => {
//         return (
//             <div className="product-list-item" key={product._id}>
//                 <img className="list-image" src={`/בשמים/${product.image}.jpg`} alt={product.name} />
//                 <div className="list-details">
//                     <div className="list-title">{product.name}</div>
//                     <Rating value={product.rating} readOnly cancel={false} />
//                     <div className="list-meta">
//                         <i className="pi pi-tag"></i>
//                         <span>{product.category}</span>
//                         <NavLink to={`/products/${product._id}`} className="list-link">{product.descreption}</NavLink>
//                     </div>
//                 </div>
//                 <div className="list-actions">
//                     <span className="list-price">${product.price}</span>
//                     {objToken?.roles === 'Admin' && <UpdateProduct data={product} />}
//                     {objToken?.roles === 'Admin' && <Button icon="pi pi-trash" onClick={() => onDelete(product.name)} className="p-button-outlined" />}
//                     {objToken && <AddToBasket data={product} />}
//                 </div>
//             </div>
//         );
//     };

//     const gridItem = (product) => {
//         return (
//             <div className="product-card" key={product._id}>
//                 <div className="product-card-header">
//                     <i className="pi pi-tag"></i>
//                     <span>{product.category}</span>
//                 </div>
//                 <div className="product-card-body">
//                     <img className="product-image" src={`/בשמים/${product.image}.jpg`} alt={product.name} />
//                     <div className="product-title">{product.name}</div>
//                     <NavLink to={`/products/${product._id}`} className="product-link">{product.descreption}</NavLink>
//                     <Rating value={product.rating} readOnly cancel={false} />
//                 </div>
//                 <div className="product-actions">
//                     <span className="product-price">${product.price}</span>
//                     {objToken?.roles === 'Admin' && <UpdateProduct data={product} />}
//                     {objToken?.roles === 'Admin' && <Button icon="pi pi-trash" onClick={() => onDelete(product.name)} className="p-button-outlined" />}
//                     {objToken && <AddToBasket data={product} />}
//                 </div>
//             </div>
//         );
//     };

//     const itemTemplate = (product, layout, index) => {
//         if (!product) return;
//         return layout === 'list' ? listItem(product, index) : gridItem(product);
//     };

//     const listTemplate = (products, layout) => {
//         return <div className={layout === 'list' ? 'product-list' : 'product-grid'}>{products.map((product, i) => itemTemplate(product, layout, i))}</div>;
//     };

//     const header = () => (
//         <div className="flex justify-content-end pb-4">
//             <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
//         </div>
//     );

//     return (
//         <div className="card">
//             <style>{`
//                 .card {
//                     background-color: #ffffff;
//                     border-radius: 1rem;
//                     padding: 2rem;
//                     max-width: 1400px;
//                     margin: auto;
//                 }
//                 .product-grid {
//                     display: grid;
//                     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//                     gap: 2rem;
//                 }
//                 .product-list {
//                     display: flex;
//                     flex-direction: column;
//                     gap: 1.5rem;
//                 }
//                 .product-list-item {
//                     display: flex;
//                     gap: 2rem;
//                     align-items: center;
//                     padding: 1rem;
//                     border-radius: 1rem;
//                     background: #f9f9f9;
//                     box-shadow: 0 2px 10px rgba(0,0,0,0.05);
//                 }
//                 .list-image {
//                     width: 100px;
//                     height: 100px;
//                     object-fit: cover;
//                     border-radius: 0.75rem;
//                 }
//                 .list-details {
//                     flex: 1;
//                     display: flex;
//                     flex-direction: column;
//                     gap: 0.5rem;
//                 }
//                 .list-title {
//                     font-size: 1.4rem;
//                     font-weight: bold;
//                     color: #333;
//                 }
//                 .list-meta {
//                     font-size: 0.9rem;
//                     color: #777;
//                 }
//                 .list-link {
//                     text-decoration: none;
//                     color: #c2185b;
//                     font-weight: 500;
//                 }
//                 .list-actions {
//                     display: flex;
//                     flex-direction: column;
//                     gap: 0.5rem;
//                     align-items: flex-end;
//                 }
//                 .list-price {
//                     font-size: 1.2rem;
//                     font-weight: bold;
//                     color: #880e4f;
//                 }
//                 .product-card {
//                     background-color: #fdfdfd;
//                     border: 1px solid #eee;
//                     border-radius: 1rem;
//                     padding: 1rem;
//                     display: flex;
//                     flex-direction: column;
//                     justify-content: space-between;
//                     text-align: center;
//                     transition: transform 0.2s;
//                 }
//                 .product-card:hover {
//                     transform: translateY(-5px);
//                     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
//                 }
//                 .product-image {
//                     width: 100%;
//                     height: 180px;
//                     object-fit: cover;
//                     border-radius: 0.75rem;
//                     margin-bottom: 1rem;
//                 }
//                 .product-title {
//                     font-size: 1.2rem;
//                     font-weight: bold;
//                     color: #333;
//                     margin-bottom: 0.5rem;
//                 }
//                 .product-link {
//                     text-decoration: none;
//                     color: #c2185b;
//                     font-weight: 500;
//                 }
//                 .product-price {
//                     font-size: 1.3rem;
//                     font-weight: bold;
//                     color: #880e4f;
//                     margin-bottom: 0.5rem;
//                 }
//                 .p-button {
//                     background-color: #f8bbd0 !important;
//                     border: none !important;
//                     color: #880e4f !important;
//                     border-radius: 2rem !important;
//                     font-weight: 500;
//                 }
//                 .p-button-outlined {
//                     color: #880e4f !important;
//                     border: 1px solid #f48fb1 !important;
//                     background: transparent !important;
//                     border-radius: 2rem !important;
//                 }
//                 .p-button-outlined:hover {
//                     background: #fce4ec !important;
//                 }
//                 .product-card-header {
//                     font-size: 0.9rem;
//                     color: #c2185b;
//                     margin-bottom: 0.5rem;
//                 }
//                 .product-card-body {
//                     margin-bottom: 1rem;
//                 }
//                 .product-actions {
//                     display: flex;
//                     flex-direction: column;
//                     gap: 0.5rem;
//                     align-items: center;
//                 }
//             `}</style>
//             <DataView value={product} listTemplate={(items) => listTemplate(items, layout)} layout={layout} header={header()} />
//             {objToken?.roles === 'Admin' && (
//                 <div className="pt-4 text-center">
//                     <Button icon="pi pi-trash" label="מחק הכל" onClick={() => deletAlleproduct()} className="p-button" />
//                 </div>
//             )}
//         </div>
//     );
// }


import React, { useState, createContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { classNames } from 'primereact/utils';
import { useDeleteAllProdectMutation, useDeleteProdectMutation, useGetAllProductQuery } from './productsApiSlice';
import AddToBasket from '../basket/AddToBasket';
import UseUser from '../user/UseUser';
import UpdateProduct from './UpdateProduct';

import 'primereact/resources/themes/lara-light-pink/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function GetAllProduct() {
    const navigate = useNavigate();
    const [objToken] = UseUser();
    const { data: product = [] } = useGetAllProductQuery();
    const [deleteproduct] = useDeleteProdectMutation();
    const [deletAlleproduct] = useDeleteAllProdectMutation();
    const price = createContext();
    const [layout, setLayout] = useState('grid');

    const onDelete = (name) => {
        deleteproduct({ name });
    };

    const gridItem = (product) => {
        return (
            <div className="laline-card" key={product._id}>
                <img className="laline-img" src={`/בשמים/${product.image}.jpg`} alt={product.name} />
                <div className="laline-title">{product.name}</div>
                <div className="laline-price">₪{product.price}</div>
                <div className="laline-actions">
                    {objToken?.roles === 'Admin' && <UpdateProduct data={product} />}
                    {objToken?.roles === 'Admin' && (
                        <Button icon="pi pi-trash" onClick={() => onDelete(product.name)} className="laline-btn-outline" />
                    )}
                    {objToken && <AddToBasket data={product} />}
                    <Button label="קנייה מהירה" className="laline-btn" />
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout, index) => {
        if (!product) return;
        return gridItem(product);
    };

    const listTemplate = (products, layout) => {
        return <div className="laline-grid">{products.map((product, i) => itemTemplate(product, layout, i))}</div>;
    };

    const header = () => (
        <div className="flex justify-content-end pb-4">
            <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
        </div>
    );

    return (
        <div className="card laline-wrapper">
            <style>{`
                .laline-wrapper {
                    max-width: 1400px;
                    margin: auto;
                    padding: 2rem 1rem;
                    background-color: #fff;
                }
                .laline-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 2rem;
                    direction: rtl;
                }
                .laline-card {
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: all 0.3s ease-in-out;
                }
                .laline-card:hover {
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
                    transform: translateY(-3px);
                }
                .laline-img {
                    width: 100%;
                    height: 240px;
                    object-fit: contain;
                    margin-bottom: 1rem;
                }
                .laline-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: #222;
                }
                .laline-price {
                    font-size: 1rem;
                    font-weight: 500;
                    color: #555;
                    margin-bottom: 1rem;
                }
                .laline-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    width: 100%;
                }
                .laline-btn {
                    background-color: #000;
                    color: #fff;
                    border-radius: 0;
                    padding: 0.6rem;
                    font-weight: 500;
                }
                .laline-btn-outline {
                    border: 1px solid #ddd;
                    color: #333;
                    background: #f9f9f9;
                    border-radius: 0;
                    width: 100%;
                }
            `}</style>
            <DataView value={product} listTemplate={(items) => listTemplate(items, layout)} layout={layout} header={header()} />
            {objToken?.roles === 'Admin' && (
                <div className="pt-4 text-center">
                    <Button icon="pi pi-trash" label="מחק הכל" onClick={() => deletAlleproduct()} className="laline-btn" />
                </div>
            )}
        </div>
    );
}
