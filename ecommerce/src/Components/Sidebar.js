import React from 'react';
import {Link} from 'react-router-dom';


class Sidebar extends React.Component{
    render(){
        return(
           <div className="card p-4 padding-top-5">
               <h5>CATEGORIES</h5>
               <ul className="list-unstyled p-0 m-0">
                   <li>
                        <Link to="/fashions">
                                <div className="d-inline-flex">
                                    <div className="header-icon icon-wrap">
                                        <i className="fas fa-tshirt"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Fashion
                                    </div>
                                </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/households">
                                <div className="d-inline-flex">
                                    <div className="header-icon icon-wrap">
                                        <i className="fas fa-home"></i>
                                    </div>
                                    <div className="text-wrap">
                                       Household Appliances
                                    </div>
                                </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/phones">
                                <div className="d-inline-flex">
                                    <div className="header-icon icon-wrap">
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Phones & Acessories
                                    </div>
                                </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/computer">
                                <div className="d-inline-flex">
                                    <div className="header-icon icon-wrap">
                                        <i className="fas fa-laptop"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Computer & Acessories
                                    </div>
                                </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/eletronics">
                                <div className="d-inline-flex"> 
                                    <div className="header-icon icon-wrap">
                                        <i className="fas fa-tv"></i>
                                    </div>
                                    <div className="text-wrap">
                                        Consumer Eletronics
                                    </div>
                                </div>
                        </Link>
                    </li>
               </ul>
           </div>
        )
    }
}
export default Sidebar;