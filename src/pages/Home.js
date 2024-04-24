import React from 'react';
import Footer from './footer';
//  import Hero1 from './images/ki12.jpg';
import HeroSlider from './imageSection';
// import MyCarousel from './gallery';
import Navbar from './Navbar';
import ImageCard from './ResponsiveCard';
import Card1 from './card';
// import ContactForm from './contact.js';

//import Carousel from './Carousel';

function Home() {
    return (<>

        <Navbar />
        <div>
            <HeroSlider />



            <section className="box1">

                < div className="container1">

                    <div className="box">
                        <h2 style={{ textAlign: 'center', color: '#244563' }}>Witamy</h2>
                        <p style={{
                            paddingLeft: 10,
                            paddingRight: 10
                        }}>Witamy w West24 Real Estate Services! Cieszę się, że zdecydowałeś się odwiedzić moją stronę internetową i dowiedzieć się więcej o tym, jak mogę pomóc Ci kupić lub sprzedać dom. Dzięki wieloletniemu doświadczeniu w branży nieruchomości posiadam wiedzę i doświadczenie, aby Twoja następna transakcja nieruchomości zakończyła się sukcesem. Jestem dumny z zapewniania spersonalizowanej obsługi i uwagi każdemu klientowi.</p>
    
                    </div>
                    <div className="box">
                        <h2 style={{ textAlign: 'center', color: '#244563' }}>Mission</h2>
                        <p style={{
                            paddingLeft: 10,
                            paddingRight: 10
                        }}>Naszą misją jest umożliwienie kupującym
 i sprzedającym domów korzystania
 z porad ekspertów, innowacyjnych
 narzędzi i wyjątkowej obsługi, łącząc ich
 z oddanymi agentami nieruchomości,
 aby ułatwić płynne i satysfakcjonujące
 transakcje dotyczące nieruchomości.

Ta misja podkreśla zaangażowanie firmy w zadowolenie klientów!
</p>
                    </div>
                    {/* <div className="box">
<h2 style={{textAlign:'center',}}>Nasz zespół</h2>
  <p style={{ paddingLeft: 10,
    paddingRight: 10}}>Nasz zespół doświadczonych i wykwalifikowanych trenerów wykorzystuje swoją rozległą wiedzę branżową i doświadczenie, aby dostarczać dostosowane programy szkoleniowe, które spełniają potrzeby każdej osoby lub organizacji. Oferujemy różnorodne warsztaty i kursy branżowe, które można dostosować do konkretnych zagrożeń i ryzyka, na jakie narażeni są pracownicy lub firma.</p>

</div>
<div className="box">
<h2 style={{textAlign:'center',}}>Nasze kursy</h2>
  <p style={{ paddingLeft: 10,
    paddingRight: 10}}>Nasze kursy obejmują szereg tematów, w tym identyfikację zagrożeń, ocenę ryzyka, badanie incydentów, reagowanie w sytuacjach awaryjnych i kulturę bezpieczeństwa w miejscu pracy. Każdy program szkoleniowy ma na celu nie tylko spełnienie wymogów zgodności z przepisami, ale także promowanie najlepszych praktyk i proaktywnego podejścia do bezpieczeństwa.</p>


</div> */}
                    <div className="box">
                        <h2 style={{ textAlign: 'center', color: '#244563' }}>Kim jesteśmy</h2>
                        <p style={{
                            paddingLeft: 10,
                            paddingRight: 10
                        }}>Jesteśmy zespołem oddanych  i oświadczonych profesjonalistów z
     branży nieruchomości, którzy z pasją
     pomagają naszym klientom osiągnąć
     ich cele związane z nieruchomościami.
     Dzięki wieloletniemu doświadczeniu w
     branży posiadamy wiedzę i 
doświadczenie, aby poprowadzić Cię przez każdy etap procesu kupna lub sprzedaży. </p>

                    </div>
                    <div className="box">
<h2 style={{textAlign:'center',}}>Wzmocnienie</h2>
<p style={{ paddingLeft: 10,
    paddingRight: 10}}> Jeśli chcesz zwiększyć bezpieczeństwo w miejscu pracy, spełnić wymogi zgodności z przepisami lub po prostu poszerzyć swoją wiedzę i umiejętności, zapraszamy do zapoznania się z naszymi kursami i zarejestrowania się już dziś. Nasze programy szkoleniowe oferują praktyczne i angażujące doświadczenia edukacyjne, które wyposażą Cię w narzędzia potrzebne do zachowania bezpieczeństwa i odniesienia sukcesu w miejscu pracy.</p>

</div>
                </div>

            </section>

                <section style={{backgroundColor:'#000028'}}>
                    <h5 style={{ textAlign: 'center' }}> Ekspert ds. nieruchomości w Województwie Dolnośląskim</h5>
                    <ImageCard />
                </section>


            <section class="testimonials">
            <h2 style={{ color: '#000000', paddingBottom: '10px' }}>Co powiedzieli nasi szanowni klienci:</h2>
                <div class="testimonial-card">
                    <blockquote>
    "Agnieszka była przyjazna, profesjonalna i miła. Odpowiadała na zapytania w odpowiednim czasie i poleciłbym jej zespół każdemu, kto chce kupić lub sprzedać nieruchomość. Zdecydowanie 5-gwiazdkowe doświadczenie."
    </blockquote>
                <p class="author">Amanuel</p>
                </div>
                <div class="testimonial-card">
                    <blockquote>
                "Świetny agent! Dziękuję Agnieszko za pomoc w znalezieniu domu na zawsze."   </blockquote>
                    <p class="author">Iwona</p>
                </div>

            </section>
            
                    <section style={{ backgroundColor: ' #000020' }}>
                        <h5 style={{ textAlign: 'center' }}> Prezentacja dolnośląskich domów: Oferty z zaufanym agentem nieruchomości.</h5>
                        <Card1 />
                    </section>
          


                      <Footer />
        </div>

    </>
    );
}

export default Home;
