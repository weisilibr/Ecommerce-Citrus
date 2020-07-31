import React from 'react';
import AppContext from './AppContext';

class HomeItem extends React.Component{
    render(){
        let{product} = this.props;
        return(
            <div className="col-sm-3 mb-2">
                <div className="card  p-1">
                   <div className="text-center">
                        <img className="img-fluid"  src={product.imageUrl} alt=""/>
                   </div>
                   <hr/>
                        <h4 className="card-title">{product.name}</h4>
                     <p className="card-text">{product.description}</p>
                         <h5 className="card-text">Price:<small>${product.price}</small></h5>
                        <span className="card-text"><small>Available Quantity: </small>{product.available_quantity}</span>
                        <div className="">
                            <button className="btn col-sm-5 btn-sm btn-warning" onClick={()=>{this.context.addToCart(product,1)}}>Add to Cart</button>  
                            <button className="btn col-sm-4 btn-sm btn-primary " onClick={()=>{this.context.addToCart(product,1)}}>wish list</button>
                        </div>
                </div>
            </div>
        )
    }
}
HomeItem.contextType = AppContext;
export default HomeItem;