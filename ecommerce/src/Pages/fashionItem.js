import React from 'react';
import AppContext from '../AppContext';

class FashionItem extends React.Component{
    render(){
        let{fashion} = this.props;
        return(
            <div className="col-sm-4 mb-4">
                <div className="card  p-1">
                   <div className="text-center">
                        <img className="img-fluid"  src={fashion.imageUrl} alt=""/>
                   </div>
                   <hr/>
                        <h4 className="card-title">{fashion.name}</h4>
                     <p className="card-text">{fashion.description}</p>
                         <h5 className="card-text">Price:<small>${fashion.price}</small></h5>
                        <span className="card-text"><small>Available Quantity: </small>{fashion.available_quantity}</span>
                        <div className="">
                            <button className="btn col-sm-5 btn-sm btn-warning" onClick={()=>{this.context.addToCart(fashion,1)}}>Add to Cart</button>  
                            <button className="btn col-sm-4 btn-sm btn-primary " onClick={()=>{this.context.addToCart(fashion,1)}}>wish list</button>
                        </div>
                </div>
            </div>
        )
    }
}
FashionItem.contextType = AppContext;
export default FashionItem;