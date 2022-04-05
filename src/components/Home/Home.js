import React from 'react';
import './Home.css'
import product from '../../images/glosny-product.jpg';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <di >
            <div className='home-container'>
                <div className="product-info">
                    <h1>Make Some Noise</h1>
                    <h1> <small>with</small> <span>Loud Glosny </span></h1>
                    <p>Loud Glosny is not just an music instrument, it is a feeling to get more into your musical world with ful of plesure and no sorrows. Loud Glosny is for everyone to get you into next level of felling with loud music</p>
                    <button>Expirence Loud</button>
                </div>
                <div className="product-img">
                    <img src={product} alt="" />
                </div>
            </div>

            <div className='customer-container'>
                <h2>Customer Reviews</h2>
                <Reviews></Reviews>
            </div>
        </di>
    );
};

export default Home;