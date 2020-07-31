import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Routes from './Routes';
import './homeAssets/home.css';
import slide1 from './homeAssets/slide1.jpg';
import slide2 from './homeAssets/slide2.jpg';
import slide3 from './homeAssets/slide3.jpg';
import paymentIcon from './homeAssets/trust.png';
import returnIcon from './homeAssets/return.png';
import trustIcon from './homeAssets/trust.png';
import HomeItem from './homeitem';
import AppContext from './AppContext';

import {Link} from 'react-router-dom';

class Home extends React.Component{
    

    render(){
        return(
            <div>
                <Navbar/>
                <br/>
                <section className="first-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <Sidebar/>
                            </div>
                            <div className="col-sm-7">
                                <div className="card">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img className="d-block w-100" src={slide1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                    <img className="d-block w-100" src={slide2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                    <img className="d-block w-100" src={slide3}alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                                </div>
                            </div>
                                </div>
                        </div>
                    </div>
                </section>
                <section className="second-section my-4 py-4 bg-white col-sm-12">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="text-center">
                                <img className="mb-2" src={paymentIcon} alt="paymentIcon"/>
                                <div className="">
                                    <h4>Easy Payment</h4>
                                    <p>The payment process is very easy to navigate and you can do it in some few clicks away</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="text-center">
                                    <img className="mb-2" src={returnIcon} alt="returnIcon"/>
                                    <div className="">
                                        <h4>Return</h4>
                                        <p>The return process is very easy to navigate and you can do it in some few clicks away</p>
                                    </div>
                                </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="text-center">
                                    <img className="mb-2" src={trustIcon} alt="trustIcon"/>
                                    <div className="">
                                        <h4>Trusted Quality</h4>
                                        <p>The products have guarantee of millions reviews from happy customers </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="third-section">
                <div className="container">
                    <h4 className="mb-3">Popular Products</h4>
                    <div className="row">
                        {
                            this.context.products.map((product,index)=>
                            <HomeItem product={product} key={index}/>
                            )
                        }
                    </div>
                </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

Home.contextType = AppContext;

export default Home;