import Jumbotron from "../components/Jumbotron";
import ProductCard from "../components/ProductCard";

export default function Products() {

    return (
        <>
            <Jumbotron
                title="I Nostri Prodotti"
                subtitle="Scopri la nostra selezione di prodotti di alta qualità."
                buttonText="Acquista ora"
            />
            <h1>Prodotti</h1>
            <p>Qui puoi trovare una varietà di prodotti.</p>
            <div className="container">
                <div className="row">
                    <ProductCard />
                </div>
            </div>
        </>
    );
}