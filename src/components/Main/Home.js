import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <div className="jumbotron">
                <h1 className="display-4"><i className="fas fa-car"></i> Welcome to On The Go Rentals!</h1>
                <p className="lead">We offer affordable car rental services to meet your needs.</p>
                <hr className="my-4" />
                <p>Explore our wide range of cars and book your rental today.</p>
                <Link to={{ name: 'CarList', params: { category: 'all', available: true } }} className="custom-button">
                    <i className="fas fa-search"></i> View details
                </Link>
            </div>
            <div className="container">
                <h2>Our Services</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body box-shadow">
                                <h3 className="card-title"><i className="fas fa-car-side"></i> Economy Cars</h3>
                                <p className="card-text">Affordable cars for your everyday needs.</p>
                                <div className="justify-content-between align-items-center">
                                    <Link to={{ name: 'CarList', params: { category: 'economy', available: true } }} className="custom-button">
                                        <i className="fas fa-info-circle"></i> View
                                    </Link>
                                    <p className="card-text mt-2">Starting at $25/day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body box-shadow">
                                <h3 className="card-title"><i className="fas fa-gem"></i> Luxury Cars</h3>
                                <p className="card-text">Experience the thrill of driving in style.</p>
                                <div className="justify-content-between align-items-center">
                                    <Link to={{ name: 'CarList', params: { category: 'luxury', available: true } }} className="custom-button">
                                        <i className="fas fa-info-circle"></i> View
                                    </Link>
                                    <p className="card-text mt-2">Starting at $100/day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body box-shadow">
                                <h3 className="card-title"><i className="fas fa-tags"></i> Special Offers</h3>
                                <p className="card-text">Check out our latest deals and discounts.</p>
                                <div className="justify-content-between align-items-center">
                                    <Link to={{ name: 'CarList', params: { category: 'special', available: true } }} className="custom-button">
                                        <i className="fas fa-info-circle"></i> View
                                    </Link>
                                    <p className="card-text mt-2">Limited time only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
