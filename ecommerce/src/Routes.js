import React from 'react';
import { Router,Switch,Route,Link } from 'react-router-dom';
import Home from './Home';
import Cart from './Pages/cart';
import Fashions from './Pages/fashions';
import AppContext from './AppContext';
import {getProducts,getFashions} from './repo';



class Routes extends React.Component{
    constructor(){
        super()
        this.state ={
            products:[],
            fashions:[],
            cart: JSON.parse(localStorage.getItem('cart')) || [],
            
        addToCart: (product,qty) =>{
            let cart = this.state.cart;
            cart.push({
                product: product,
                qty_added: qty
            });
            localStorage.setItem('cart',JSON.stringify(cart));
        },

        removeFromCart:(id) =>{
            let cart = this.state.cart, newCart=[];
            cart.map((cartItem)=>{
                if (cartItem.product.id !== id)
                newCart.push(cartItem)
            });
            this.setState({
                cart:newCart
            })
            localStorage.setItem('cart',JSON.stringify(newCart));
        },
            clearCart:()=>{
                localStorage.clear();
                this.setState({cart:[]});
                if({cart:[]} === null){

                }
                alert("cart has been cleared sucessfully")
            },

        }
    }

    componentDidMount(){
        getProducts().then((products) =>{
            this.setState({products
            })
        });
        getFashions().then((fashions) =>{
            this.setState({fashions
            })
        });
       
        
    }
    render(){
        return(
            <AppContext.Provider value={this.state}>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route path="/fashions" component={Fashions}></Route>
                </Switch>
            </AppContext.Provider>
        )
    }
}
export default Routes;