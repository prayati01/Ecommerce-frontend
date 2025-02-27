const ProductList = ({products}) =>{
    return (
        <div className="row">
            {products.map(product => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
                    <div class="card h-100">
                        <img src= {product.imageUrl || "https://placeholder.co/600x400"}
                            className="card-img-top"
                            alt={product.name}
                            >
                        </img>
                        <div class="card-body">
                            <h5 class="card-title">
                                {product.name}
                            </h5>
                            <p class="card-text">{product.description}</p>
                            
                            <p class="card-text"><strong>${product.price}</strong></p>
                            
                    </div>
                    </div>
                
                </div>

            ))}

        </div>

    )
}
export default ProductList;