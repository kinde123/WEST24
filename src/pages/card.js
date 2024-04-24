import React from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle } from 'react-bootstrap';
import Kin from './images/w4.webp';
import W3 from './images/w3.webp';
import W4 from './images/w5.jpg';
import W5 from './images/w6.jpg';
import W6 from './images/w7.webp';
import W8 from './images/w8.webp';
import W16 from './images/w16.jpg';
import W17 from './images/w17.jpg';
import W18 from './images/w18.jpg';


export default function Card1() {
    return (
        <section className="box1" style={{ backgroundColor: '#000020' }}>

            < div className="container1">


                <div className="box6">
                    <img
                        src={Kin}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%',

                        }} />
                    <p>Dom Kryniczno 
Kryniczno, dolnośląskie</p>
                </div>
                <div className="box6">
                    <img
                        src={W3}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%',

                        }} />
                    <p>Mieszkanie Wrocław
Krzyki, Wrocław, dolnośląskie</p>
                </div>

                <div className="box6">

                    <img
                        src={W4}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%'
                        }} />
                    <p>Dom Trzebnica
Trzebnica, dolnośląskie</p>
                </div>



            </div>
            < div className="container1">

                <div className="box6">
                    <img
                        src={W5}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%',


                        }} />
                    <p>Dom, ul. Milicka
Milicka, Trzebnica, dolnośląskie</p>
                </div>

                <div className="box6">
                    <img
                        src={W8}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%',

                        }} />
                    <p>Mieszkanie, ul. Żernicka
Żernicka, Żerniki, Wrocław, dolnośląskie</p>
                </div>

                <div className="box6">

                    <img
                        src={W6}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%'
                        }} />
                    <p>Działka budowlana, ul. Błękitna
Błękitna, Oleszna, dolnośląskie</p>
                </div>
            </div>
            < div className="container1">

                <div className="box6">
                    <img
                        src={W16}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%',


                        }} />
                    <p>Mieszkanie, ul. Potokowa
Potokowa, Maślice, Wrocław, dolnośląskie</p>
                </div>

                <div className="box6">
                    <img
                        src={W17}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%',

                        }} />
                    <p>Działka rolna Ścinawa

Ścinawa, dolnośląskie</p>
                </div>

                <div className="box6">

                    <img
                        src={W18}
                        alt="Los Angeles"
                        class="d-block"
                        style={{
                            width: '100%'
                        }} />
                    <p>Działka budowlana, ul. Wrocławska
Wrocławska, Nowa Wieś Wrocławska, dolnośląskie</p>
                </div>
            </div>

        </section>
    );
}
