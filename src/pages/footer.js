import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import logo from "./images/lo.png";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import{SocialIcon} from 'react-social-icons';



export default function Footer() {
  return (
  
    <>
    
    <div style={{position: 'fixed',
  top: '50%',
  webkitTransform: 'translateY(-50%)',
  msTransform: 'translateY(-50%)',
  transform: 'translateY(-50%)',
  right: 0,
}}>
  {/* <SocialIcon url="https://instagram.com/" style={{ display: 'block', height: 35, width: 35,marginRight:5,marginBottom:5,
  }}/> */}

  <SocialIcon url="https://www.facebook.com/" style={{display:'block', height: 35, width: 35,marginRight:5 }}/>
  
</div>

   
    <MDBFooter style={{backgroundColor:'#F1F1F1'}} className='text-center text-lg-start text-muted'>
      <section  style={{backgroundColor:'#F1F1F1'}} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block' >
          <span style={{color: 'black',}}>Dołącz do nas w mediach społecznościowych:</span>
        </div>

        <div>
          <div>
    <SocialIcon url="https://instagram.com/" style={{ height: 35, width: 35,marginRight:5, }}/>

  <SocialIcon url="" style={{ height: 35, width: 35,marginLeft:5 }}/>
   </div>
        </div>
      </section>

      <section style={{backgroundColor:'#F1F1F1', color:'black'}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='6' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                
                <Link to="/Home" className="navbar-logo">
                <h1>WEST24</h1>
          {/* <img src={logo} alt="logo" style={{paddingRight:'50px'}}/> */}
        </Link>
              </h6>
              {/* <p className='textf' id='foot'> */}
{/* Jesteśmy Twoim partnerem w dziedzinie bezpieczeństwa i higieny pracy. Nasza firma powstała z pasji do dbania o bezpieczeństwo i zdrowie pracowników oraz wieloletniego doświadczenia w szkoleniach BHP. Oferujemy szeroki zakres usług, w tym szkolenia, obsługę firm, oraz dostarczanie artykułów BHP i sprzętu przeciwpożarowego.              </p> */}
            </MDBCol>

           
            <MDBCol md='4' lg='6' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase text-center fw-bold mb-4' style={{ color: '#244563' }}>Agnieszka</h6>
             <ul>
            <li style={{textAlign: 'center'}}>
                <MDBIcon color='secondary' icon='home' className='me-2' />
             
Ul. gen. Sikorskiego 1 Lubin, Poland
              </li>
              <li style={{textAlign: 'center'}}>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
              {/* npm  */} 
              </li>
              <li style={{textAlign: 'center'}}>
                      <MDBIcon color='secondary' icon='phone' className='me-3' /> +48 690 206 931
              </li>
              </ul>
            </MDBCol>
            
          </MDBRow>
        </MDBContainer>
      </section>
 <div  className='text-center text-#244563 p-4' style={{ backgroundColor: 'lightgray', textDecoration:'none'}}>
        
        
       
        <div class="container">
  <div className="column" style={{textAlign:'left',paddingLeft:0,}}>
   
    <p>© 2024 &nbsp;
        <a className='text-reset ' style={{textDecoration:'none',textAlign:'left'}} href='Home.js'>
           WEST24
        
  
        </a></p>
  </div>
  <div className="column" style={{textAlign:'right',paddingRight:0,paddingLeft:0}}>
   
    <p><a className='text-reset ' style={{textDecoration:'none',textAlign:'right'}} >
          WEST24 &nbsp; <span> |</span>
        </a>
       &nbsp; DESIGN BY &nbsp;
        <a className='text-reset ' style={{textDecoration:'none'}} >
          KINDE TESFAYE
        </a></p>
  </div>
</div>
      </div>
      
     
    </MDBFooter>
    </>

  );
}
