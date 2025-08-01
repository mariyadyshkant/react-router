// import { useEffect, useState } from "react";

// export default function Carousel() {
//     const [featured, setFeatured] = useState([]);

//     useEffect(() => {
//         fetch("https://fakestoreapi.com/products")
//             .then(res => res.json())
//             .then(data => {
//                 const selected = data.slice(0, 6);
//                 setFeatured(selected);
//             });
//     }, []);

//     return (
//         <div className='carousel container mt-2'>
//             <h2 className="text-center mb-4">Le ultime novità</h2>
//             <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
//                 <ol className="carousel-indicators">
//                     {featured.map((_, index) => (
//                         <li
//                             key={index}
//                             data-bs-target="#carouselId"
//                             data-bs-slide-to={index}
//                             className={index === 0 ? "active" : ""}
//                             aria-current={index === 0 ? "true" : "undefined"}
//                             aria-label={`Slide ${index + 1}`}
//                         ></li>
//                     ))}
//                 </ol>
//             </div>
//             <div className="carousel-inner" role="listbox">
//                 {featured.map((product, index) => (
//                     <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={product.id}>
//                         <img
//                             src={product.image}
//                             className="carousel-img d-block mx-auto"
//                             alt={product.title}
//                         />
//                         <div className="carousel-caption d-none d-md-block">
//                             <h3>{product.title}</h3>
//                             <button type="button" className="btn btn-outline-primary">
//                                 {product.category}
//                             </button>
//                             <p>€{product.price}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselId"
//                 data-bs-slide="prev"
//             >
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselId"
//                 data-bs-slide="next"
//             >
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//         </div>
//     );
// }
