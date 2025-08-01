import FeaturedProducts from "../components/FeaturedProducts";
import Jumbotron from "../components/Jumbotron";

export default function HomePage() {
    return (
        <>
            <Jumbotron
                title="Benvenuto su Click&Buy"
                subtitle="Il tuo negozio unico per tutte le esigenze."
                buttonText="Esplora ora"
            />
            {/* <FeaturedProducts /> */}
        </>
    )
}

