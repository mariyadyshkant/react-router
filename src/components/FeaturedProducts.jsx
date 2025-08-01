import ProductCard from "./ProductCard";

export default function FeaturedProducts() {

    return (
        <div className="container my-4">
            <h2 className="mb-4 text-center">I nostri prodotti top 🔥</h2>
            <div className="row">

                <ProductCard limit={6} />
            </div>
        </div>
    );
}