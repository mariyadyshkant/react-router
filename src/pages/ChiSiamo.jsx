import Jumbotron from "../components/Jumbotron";

export default function ChiSiamo() {
    return (
        <>
            <Jumbotron
                title="Chi Siamo"
                subtitle="La storia di Click&Buy: passione, innovazione e qualità al servizio dei nostri clienti"
                buttonText="Scopri di più"
            />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1 className="display-4 mb-3">Chi Siamo</h1>
                        <p className="lead">
                            La storia di Click&Buy: passione, innovazione e qualità al servizio dei nostri clienti
                        </p>
                    </div>
                </div>

                {/* Story Section */}
                <div className="row mb-5">
                    <div className="col-lg-6">
                        <h2 className="h3 mb-3">La Nostra Storia</h2>
                        <p>
                            Fondata nel 2020, Click&Buy nasce dalla passione per l'innovazione e dalla volontà di
                            rendere lo shopping online un'esperienza unica e personalizzata. Quello che è iniziato
                            come un piccolo progetto è cresciuto fino a diventare uno dei punti di riferimento
                            per l'e-commerce in Italia.
                        </p>
                        <p>
                            La nostra missione è semplice: offrire prodotti di qualità superiore con un servizio
                            clienti eccezionale, garantendo sempre la massima soddisfazione di chi sceglie di
                            fidarsi di noi.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="h3 mb-3">I Nostri Valori</h2>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100 border-0 bg-light">
                                    <div className="card-body text-center">
                                        <i className="bi bi-heart-fill text-primary fs-2 mb-2"></i>
                                        <h5 className="card-title">Passione</h5>
                                        <p className="card-text small">
                                            Mettiamo il cuore in tutto quello che facciamo
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100 border-0 bg-light">
                                    <div className="card-body text-center">
                                        <i className="bi bi-shield-check-fill text-success fs-2 mb-2"></i>
                                        <h5 className="card-title">Qualità</h5>
                                        <p className="card-text small">
                                            Solo i migliori prodotti per i nostri clienti
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100 border-0 bg-light">
                                    <div className="card-body text-center">
                                        <i className="bi bi-lightning-fill text-warning fs-2 mb-2"></i>
                                        <h5 className="card-title">Innovazione</h5>
                                        <p className="card-text small">
                                            Sempre all'avanguardia nelle tecnologie
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className="card h-100 border-0 bg-light">
                                    <div className="card-body text-center">
                                        <i className="bi bi-people-fill text-info fs-2 mb-2"></i>
                                        <h5 className="card-title">Comunità</h5>
                                        <p className="card-text small">
                                            I nostri clienti sono la nostra famiglia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="h3 text-center mb-4">Il Nostro Team</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-sm-6 mb-4">
                                <div className="card border-0 text-center">
                                    <div className="card-body">
                                        <div className="bg-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                                            style={{ width: '80px', height: '80px' }}>
                                            <i className="bi bi-person-fill text-white fs-2"></i>
                                        </div>
                                        <h5 className="card-title">Marco Rossi</h5>
                                        <p className="card-text text-muted">Founder & CEO</p>
                                        <p className="card-text small">
                                            Visionario e leader, Marco guida l'azienda verso nuovi traguardi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4">
                                <div className="card border-0 text-center">
                                    <div className="card-body">
                                        <div className="bg-success rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                                            style={{ width: '80px', height: '80px' }}>
                                            <i className="bi bi-person-fill text-white fs-2"></i>
                                        </div>
                                        <h5 className="card-title">Laura Bianchi</h5>
                                        <p className="card-text text-muted">Head of Operations</p>
                                        <p className="card-text small">
                                            Esperta in logistica, garantisce che ogni ordine arrivi perfetto.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4">
                                <div className="card border-0 text-center">
                                    <div className="card-body">
                                        <div className="bg-info rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                                            style={{ width: '80px', height: '80px' }}>
                                            <i className="bi bi-person-fill text-white fs-2"></i>
                                        </div>
                                        <h5 className="card-title">Alessandro Verde</h5>
                                        <p className="card-text text-muted">Tech Lead</p>
                                        <p className="card-text small">
                                            Il mago della tecnologia che rende tutto possibile.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="row">
                    <div className="col-12">
                        <div className="bg-primary text-white rounded p-4 text-center">
                            <h3 className="mb-3">Vuoi saperne di più?</h3>
                            <p className="mb-3">
                                Siamo sempre felici di raccontare la nostra storia e di ascoltare la tua.
                            </p>
                            <button className="btn btn-light btn-lg">
                                <i className="bi bi-envelope-fill me-2"></i>
                                Contattaci
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
