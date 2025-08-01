import { useEffect, useState } from "react";

export default function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                const shuffled = data.sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 6);
                setProducts(selected);
            });
    }, []);

    return (
        <div className="container my-4">
            <h2 className="mb-4 text-center">I nostri prodotti top 🔥</h2>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-4 mb-4" key={product.id}>
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
                                <button className="btn btn-primary mt-auto">Scopri di più</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
