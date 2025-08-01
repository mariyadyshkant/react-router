import { useEffect, useState } from "react";

export default function ProductCard({ limit }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);
    const displayedProducts = limit ? products.slice(0, limit) : products;

    return (
        <>
            {displayedProducts.map(product => (
                <div className="col-4 mb-4" key={product.id}>
                    <div className="card h-100 shadow-sm">
                        <img
                            src={product.image}
                            className="card-img-top p-3"
                            alt={product.title}
                            style={{ height: "250px", objectFit: "contain" }}
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="text-muted mb-1">{product.category}</p>
                            <p className="fw-bold mb-3">€{product.price.toFixed(2)}</p>
                            <button className="btn btn-primary mt-auto">Vedi dettagli</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}