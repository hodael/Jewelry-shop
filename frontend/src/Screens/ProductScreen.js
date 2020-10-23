import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen(props){
   
    const product = data.products.find(x => x._id === props.match.params.id)
    return <div >
        <div>
            <Link to= "/">Back to Home</Link>
        </div>
        <div className="details">
            <div className="image">
                <img src={product.image} alt = "product"></img>
            </div>

            <div className = "details-info">

                <ul>
                    <li>{product.name}</li>
                    <li>{product.brand}</li>
                    <li>{product.price}</li>
                    <li>{product.rating} Stars</li>
                </ul>
            </div>
             

        </div>

    </div>;
}
export default ProductScreen;