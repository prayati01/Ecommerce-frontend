const ProductList = ({products}) =>{
    return (
        <div className="row">
            {products.map(product => (
                <div  key={product.id}>
                    <div className="card" >
                        
                        <div className="card-body">
                            <h5 className="card-title">
                                {product.name}
                            </h5>
                            <p className="card-text">{product.description}</p>
                            
                            <p className="card-text"><strong>${product.price}</strong></p>
                            </div>
                    </div>
                </div>

            ))}
        </div>
        
    )
}
export default ProductList;