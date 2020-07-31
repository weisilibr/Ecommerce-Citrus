import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className="bg-secondary page-footer col-sm-12">
                    <div className="container">
                        <div className="row text-white py-4">
                            <div className="col-sm-4">
                                <h5>Quick Links</h5>
                                <ul className="list-unstyled">
                                    <li >
                                        <Link to="/cart" className="text-white">My Cart</Link>
                                    </li>
                                    <li >
                                        <Link to="/wishlist" className="text-white">My Wishlist</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <div className="">
                                    <h5>Contact Us</h5>
                                    <p>
                                        <strong>Phone:</strong>+558332256954<br/>
                                        <strong>Fax:</strong>+55839654586
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="float-right">
                                    <h5>Social links</h5>
                                    <div ClassName="">
                                        <Link to="https://facebook.com/citrustores" className="text-white mr-4">
                                            <i className="fab fa-facebook"></i>
                                        </Link>
                                        <Link to="https://youtube.com/citrustores" className="text-white mr-4">
                                            <i className="fab fa-youtube"></i>
                                        </Link>
                                        <Link to="https://instagram.com/citrustores" className="text-white mr-4">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="text-white text-center">
                                all rights reserved to @
                                <a className="text-warning" href="https://www.linkedin.com/in/wesley-victor-618430b9/">
                                    Wesley Victor
                                </a>
                            </p>
                        </div>

                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;