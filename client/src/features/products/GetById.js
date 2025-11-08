


import { useParams, NavLink } from "react-router-dom";
import { useGetByIdQuery } from "./productsApiSlice";
import { Rating } from "primereact/rating";
import AddToBasket from "../basket/AddToBasket";
import UseUser from "../user/UseUser";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";

const GetProductById = () => {
    const [objToken] = UseUser();
    const { id } = useParams();
    const { data: product = {}, isError, isLoading } = useGetByIdQuery(id);
    const [quantity, setQuantity] = useState(1);

    if (isLoading) return <p style={styles.message}>🔄 טוען מוצר...</p>;
    if (isError) return <p style={{ ...styles.message, color: "#d32f2f" }}>⚠️ שגיאה בטעינת המוצר</p>;

    return (
        <div style={styles.page}>
            <div style={styles.container} dir="rtl">
                <div style={styles.imageContainer}>
                    <img
                        src={`/בשמים/${product.image}.jpg`}
                        alt={product.name}
                        style={styles.image}
                    />
                </div>

                <div style={styles.details}>
                    <h1 style={styles.title}>{product.name}</h1>

                    <div style={styles.ratingRow}>
                        <Rating value={product.rating} readOnly cancel={false} />
                        <span style={styles.ratingText}>{product.rating} כוכבים</span>
                    </div>

                    <p style={styles.price}>₪{product.price}</p>

                    <div style={styles.quantity}>
                        <label htmlFor="quantity" style={styles.label}>כמות:</label>
                        <InputNumber
                            inputId="quantity"
                            value={quantity}
                            onValueChange={(e) => setQuantity(e.value)}
                            min={1}
                            showButtons
                            buttonLayout="horizontal"
                            incrementButtonIcon="pi pi-plus"
                            decrementButtonIcon="pi pi-minus"
                            decrementButtonClassName="p-button-secondary"
                            incrementButtonClassName="p-button-secondary"
                            inputStyle={styles.qtyInput}
                        />
                    </div>

                    <p style={styles.description}>{product.descreption}</p>

                    {objToken && <AddToBasket data={{ ...product, quantity }} />}

                    <NavLink to="/products" style={styles.backLink}>← חזרה לרשימת מוצרים</NavLink>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: {
        padding: "3rem 1rem",
        background: "linear-gradient(to bottom right, #f9f9f9, #ffffff)",
        minHeight: "100vh",
        fontFamily: "Assistant, sans-serif",
        display: "flex",
        justifyContent: "center",
    },
    container: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "3rem",
        padding: "2rem",
        flexWrap: "wrap",
        maxWidth: "1000px",
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
    },
    imageContainer: {
        flex: "1 1 400px",
    },
    image: {
        width: "100%",
        height: "513px",
        objectFit: "cover",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    details: {
        flex: "1 1 500px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "right",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#000",
    },
    ratingRow: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    ratingText: {
        fontSize: "0.9rem",
        color: "#666",
    },
    price: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#000",
    },
    quantity: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginTop: "1rem",
        direction: "rtl",
    },
    label: {
        fontWeight: "bold",
        fontSize: "1.1rem",
    },
    qtyInput: {
        textAlign: "center",
        width: "60px",
        fontSize: "1.2rem",
    },
    description: {
        fontSize: "1.1rem",
        lineHeight: "1.6",
        color: "#444",
    },
    backLink: {
        marginTop: "2rem",
        fontSize: "1rem",
        color: "#007bff",
        textDecoration: "none",
        alignSelf: "flex-start",
    },
    message: {
        textAlign: "center",
        fontSize: "1.2rem",
        padding: "2rem",
        color: "#666",
    },
};

export default GetProductById;
