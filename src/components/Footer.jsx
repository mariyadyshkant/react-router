import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark text-light mt-auto">
            <div className="container py-4">
                <div className="row">
                    <div className="col-4 mb-4">
                        <h5 className="mb-3 text-light">
                            Click&Buy
                        </h5>
                        <p className="text-light mb-3">
                            Il tuo negozio online di fiducia per prodotti di qualità.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-light fs-5" aria-label="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="text-light fs-5" aria-label="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#" className="text-light fs-5" aria-label="Twitter">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="#" className="text-light fs-5" aria-label="LinkedIn">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-4 mb-4">
                        <h6 className="mb-3 text-light">Navigazione</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <NavLink to="/" className="text-light text-decoration-none">
                                    <i className="bi bi-house me-2"></i>Home
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <NavLink to="/chi-siamo" className="text-light text-decoration-none">
                                    <i className="bi bi-people me-2"></i>Chi Siamo
                                </NavLink>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-grid me-2"></i>Prodotti
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-envelope me-2"></i>Contatti
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4 mb-4">
                        <h6 className="mb-3 text-light">Servizio Clienti</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-question-circle me-2"></i>FAQ
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-truck me-2"></i>Spedizioni
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-arrow-return-left me-2"></i>Resi
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-light text-decoration-none">
                                    <i className="bi bi-headset me-2"></i>Supporto
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-top border-secondary">
                <div className="container py-3">
                    <div className="text-center">
                        <small className="text-light">
                            © 2025 Click&Buy. Tutti i diritti riservati.
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}
