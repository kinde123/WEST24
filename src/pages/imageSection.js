import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Kin from './images/w9.avif';
import Kin1 from './images/w6.avif';
import Re from './images/w7.avif';
import W1 from './images/w10.avif';
import w2 from './images/w11.avif';
import w3 from './images/w12.avif';
import W4 from './images/w13.avif';
import w5 from './images/w14.avif';
import w6 from './images/w15.avif';


function MyCarousel() {



    return (


        <div id="demo" className="carousel slide" data-bs-ride="carousel">


            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>


            <div className="carousel-inner" >
                <div className="carousel-item active" id='page' >
                    <img src={Kin} alt="Los Angeles" class="d-block" style={{ width: '100%' }} />
                    <div className="hero-text">
                        <h6>Nasze szkolenia BHP to klucz do minimalizacji ryzyka wypadków i zapewnienia przestrzegania przepisów.</h6>

                    </div>
                </div>
                <div className="carousel-item" id='page'>
                    <img src={Kin1} alt="Chicago" class="d-block" style={{ width: '100%' }} />
                    <div className="hero-text">
                        <h6>Bezpieczeństwo pracowników to nasza misja! Wspólnie dbamy o ich pewność w miejscu pracy.</h6>

                    </div>
                </div>
                <div className="carousel-item" id='page'>
                    <img src={Re} alt="New York" class="d-block" style={{ width: '100%' }} />
                    <div className="hero-text">
                        <h6>Zapewniamy najwyższej jakości urządzenia gaśnicze</h6>

                    </div>
                </div>
            </div>


            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>


    );
};

export default MyCarousel;
