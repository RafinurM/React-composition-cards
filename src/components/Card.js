

function Card(children) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={children.url} className="card-img-top" alt={children.name ? children.name : ''} style={{visibility: children.url ? 'visible' : 'hidden'}}/>
            <div className="card-body">
                <h5 className="card-title">{children.name}</h5>
                <p className="card-text">{children.description}</p>
                <a href="#" className="btn btn-primary">Choose this!</a>
            </div>
        </div>
    )
}


export default Card