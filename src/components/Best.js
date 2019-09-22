import React from 'react';

function Best(props){
    let eachProduct = props.productsDetails.map((allProducts) => 
        <div class="col-2 mb-3">
            <div class="card">
                <img src={allProducts.image} class="card-img-top" height="260" title={allProducts.name}/>
                <div class="card-body">
                    <p class="card-title font-weight-bolder">{allProducts.name}</p>
                    <p class="card-text text-success font-weight-bold">Rs. {allProducts.price}</p>
                    <a href="" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    );

    return(
        <div class="container-fluid mt-3 text-center">
            <div class="row">
                {eachProduct}
            </div>
        </div> 
    )
}

export default Best;