import React from 'react';

import {Card, CardImg, CardText, CardBody, CardTitle} from 'react-bootstrap';
import Kin from './images/w9.avif';
import W1 from './images/w1.webp';
import W2 from './images/w2.jpg';
import w3 from './images/w12.avif';
import w4 from './images/w13.avif';
import w5 from './images/w14.avif';
import w6 from './images/w15.avif';


export default function ImageCard() {
    return (
        <section className="box1" style={{ backgroundColor: '#000028' }}>

            < div className="container1">

                
                <div className="box6">
                    <img
                        src={W1}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%',

                        }} />
                    <p>Personalizacja wyszukiwania
 nieruchomości</p>
                </div>
                <div className="box6">
                    <img
                        src={W1}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%',
                           
                        }}/>
                    <p>Porównywalna ocena nieruchomości</p>
                </div>

                <div className="box6">

                    <img
                        src={W1}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%'
                        }}/>
                    <p>Eksperckie umiejętności negocjacyjne</p>
                </div>

               

            </div>
            < div className="container1">

                <div className="box6">
                    <img
                        src={W1}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%',


                        }} />
                    <p>Pomoc prawna</p>
                </div>

                <div className="box6">
                    <img
                        src={W1}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%',

                        }} />
                    <p>Personalizacja wyszukiwania
 nieruchomości</p>
                </div>

                <div className="box6">

                    <img
                        src={W1}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%'
                        }} />
                    <p>Porady dotyczące inscenizacji domu</p>
                </div>
                </div>

        </section>
    );
}
