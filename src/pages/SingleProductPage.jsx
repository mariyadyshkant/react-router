import Jumbotron from "../components/Jumbotron";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SingleProductPage() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <Jumbotron
                title="Dettagli del prodotto"
                subtitle="Scopri tutti i dettagli del prodotto selezionato."
                buttonText="Acquista ora"
            />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: "400px", objectFit: "contain" }}
                        />
                    </div>
                    <div className="col-6">
                        <h1 className="mb-3">{product.title}</h1>
                        <p className="text-muted mb-3">{product.category}</p>
                        <p className="mb-4">{product.description}</p>
                        <p className="fw-bold fs-3 text-primary mb-4">€{product.price.toFixed(2)}</p>
                        <button className="btn btn-primary btn-lg">
                            <i className="bi bi-cart-plus me-2"></i>
                            Aggiungi al carrello
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-3">
                        <Link to="/prodotti" className="btn btn-outline-primary mt-4">
                            Torna ai prodotti
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
