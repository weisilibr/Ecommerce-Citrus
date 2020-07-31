import React from 'react';
import logo from './logo.png';
import  './index.css';
import AppContext from '../AppContext';
import Routes from '../Routes';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar fixed-top shadow-sm bg-white navbar-expand-lg ">
                    <div className="container d-inline-block">
                        <div className="row">
                            <div className="col-xs-4">
                                <Link className="" to="/">
                                    <img className="w-100" src={logo} alt="logo"/>
                                </Link>
                            </div>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarcontent" aria-expanded="false"> 
                                    <i className="header-icon fas fa-bars"/>
                                </button>
                                <div className="row float-right collapse navbar-collapse" id="navbarcontent">
                                    <div className="col-xs-4">

                                    <div className="dropdown">
                                        <Link to="/" className="header-text dropbtn">
                                                    <div className="d-inline-flex">
                                                        <div className="icon-wrap">
                                                            <i className="header-icon fas fa-user"></i>
                                                        </div>
                                                            <div  className="text-wrap">
                                                                <div>Sign in</div>                                                               
                                                            </div>
                                                            <div  className="header-icone">
                                                            <i className="fas fa-caret-down"></i>                                                               
                                                            </div>                                                          
                                                    </div>
                                            </Link>
                                        <div className="dropdown-content">
                                        <form className="px-4 py-3">
                                            <div className="form-group">
                                                    <label>Email:</label>
                                                    <input type="email" className="form-control" placeholder="email"  required/>
                                            </div>
                                            <div className="form-group">
                                                    <label>Password:</label>
                                                    <input type="password" className="form-control" placeholder="password"  required/>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                                                <label className="form-check-label" for="dropdownCheck">
                                                    Remember me
                                                </label>
                                            </div>
                                            <button type="submit" className="btn btn-warning mt-3">Sign in</button>
                                         </form>
                                            <hr/>
                                            <a className="dropdown-item fixed" href="#">Don't have an account? Sign up</a>
                                            <a className="dropdown-item fixed" href="#">Forget the password?</a>
                                    </div>
                                    </div>

                                    </div>
                                    <div className="col-xs-4">
                                        <Link to="/cart" className="header-text">
                                            <div className="d-inline-flex">
                                                <div className="icon-wrap">
                                                        <i className="header-icon fas fa-shopping-cart"></i>
                                                </div>
                                                <div className="text-wrap">
                                                    <span className="small round badge-secondary">{this.context.cart.length}</span>
                                                    <div>Cart</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4">
                                        <Link to="/wishlist" className="header-text">
                                            <div className="d-inline-flex">
                                                <div className="icon-wrap">
                                                    <i className="header-icon fas fa-heart"></i>
                                                </div>
                                                <div className="text-wrap">
                                                    <span className="small round badge-secondary">1</span>
                                                    <div>Wishlist</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}
Navbar.contextType = AppContext;
export default Navbar;