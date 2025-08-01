export default function Jumbotron(prop) {
    return (
        <>
            <div className="jumbotron p-5 text-center">
                <h1>{prop.title}</h1>
                <p>{prop.subtitle}</p>
                <button type="button" className="btn btn-light btn-lg mt-5">
                    {prop.buttonText}
                </button>
            </div>
        </>
    )
}