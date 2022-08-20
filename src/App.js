import React,{useState,useEffect} from 'react';
import "./App.css";
import "./owl.carousel.min.css";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


import img2 from "./images/person_transparent.png";
import img3 from "./images/blob_1.svg";
import img4 from "./images/blob_2.svg";
import img5 from "./images/person_4.jpg";
import background1 from "./images/hero_1.jpg";
import person3 from "./images/person_3.jpg";
import person2 from "./images/person_2.jpg";
import person1 from "./images/person_1.jpg";

import Auth from './components/Auth';
import Course from './components/Course';
import Programm from './components/Programm';

const App = () => {

 const [toggleMenu, setToggleMenu] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, []);



  return (
 <>
    <div className="site-wrap">

<div className="site-mobile-menu site-navbar-target">
  <div className="site-mobile-menu-header">
    <div className="site-mobile-menu-close mt-3">
      <span className="icon-close2 js-menu-toggle"></span>
    </div>
  </div>
  <div className="site-mobile-menu-body"></div>
</div>


<header className={`site-navbar py-4 js-sticky-header site-navbar-target ${isScrolled && 'headC'}`} role="banner">
  
  <div className="container-fluid">
    <div className="d-flex align-items-center">

      <div className={`site-logo mr-auto w-25 `}><a href="index.html" style={{color: isScrolled ? 'black' : 'white'}} >Education</a></div>

      <div className="mx-auto text-center">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
            <li><a href="#home-section" className="nav-link" style={{color: isScrolled ? 'black' : 'white'}} >Home</a></li>
            <li><a href="#courses-section" className="nav-link" style={{color: isScrolled ? 'black' : 'white'}} >Courses</a></li>
            <li><a href="#programs-section" className="nav-link" style={{color: isScrolled ? 'black' : 'white'}} >Programs</a></li>
            <li><a href="#teachers-section" className="nav-link" style={{color: isScrolled ? 'black' : 'white'}} >Teachers</a></li>
          </ul>
        </nav>
      </div>

      <div className="ml-auto w-25">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
            <li className="cta"><a href="#contact-section" className="nav-link"><span>Contact Us</span></a></li>
          </ul>
        </nav>
        <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a>
      </div>

      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="black" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center" style={{backgroundColor: 'white'}} >
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home-section" >Home</a></p>
            <p><a href="#courses-section">Courses</a></p>
            <p><a href="#programs-section" >Programs</a></p>
            <p><a href="#teachers-section" >Teachers</a></p>
            
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
           
    <li className="cta"><a href="#contact-section" className="nav-link"><span>Contact Us</span></a></li>
          </div>
        </div>
        )}
      </div>

    </div>
    
  </div>
  
</header>

<div className="intro-section" id="home-section">
  
  <div className="slide-1" style={{backgroundImage : `url(${background1})`}}  data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h1  data-aos="fade-up" data-aos-delay="100">Learn From The Expert</h1>
              <p className="mb-4"  data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
              <p data-aos="fade-up" data-aos-delay="300"><a href="#" className="btn btn-primary py-3 px-5 btn-pill">Admission Now</a></p>

            </div>
{/* auth area */}
           <Auth/>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>


<Course/>


<Programm/>

<div className="site-section" id="teachers-section">
  <div className="container">

    <div className="row mb-5 justify-content-center">
      <div className="col-lg-7 mb-5 text-center"  data-aos="fade-up" data-aos-delay="">
        <h2 className="section-title">Our Teachers</h2>
        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
      </div>
    </div>

    <div className="row">

      <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
        <div className="teacher text-center">
          <img src={person1} alt="Image" className="img-fluid w-50 rounded-circle mx-auto mb-4"/>
          <div className="py-2">
            <h3 className="text-black">Benjamin Stone</h3>
            <p className="position">Physics Teacher</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
        <div className="teacher text-center">
          <img src={person2} alt="Image" className="img-fluid w-50 rounded-circle mx-auto mb-4"/>
          <div className="py-2">
            <h3 className="text-black">Katleen Stone</h3>
            <p className="position">Physics Teacher</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
        <div className="teacher text-center">
          <img src={person3} alt="Image" className="img-fluid w-50 rounded-circle mx-auto mb-4"/>
          <div className="py-2">
            <h3 className="text-black">Sadie White</h3>
            <p className="position">Physics Teacher</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="site-section bg-image overlay" style={{ backgroundImage: `url(${background1})` }}>
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 text-center testimony">
        <img src={img5} alt="Image" className="img-fluid w-25 mb-4 rounded-circle"/>
        <h3 className="mb-4">Jerome Jensen</h3>
        <blockquote>
          <p>&ldquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius necessitatibus voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo provident odit molestias! Rem reprehenderit assumenda &rdquo;</p>
        </blockquote>
      </div>
    </div>
  </div>
</div>

<div className="site-section pb-0">

  <div className="future-blobs">
    <div className="blob_2">
      <img src={img4} alt="Image"/>
    </div>
    <div className="blob_1">
      <img src={img3} alt="Image"/>
    </div>
  </div>
  <div className="container">
    <div className="row mb-5 justify-content-center" data-aos="fade-up" data-aos-delay="">
      <div className="col-lg-7 text-center">
        <h2 className="section-title">Why Choose Us</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 ml-auto align-self-start"  data-aos="fade-up" data-aos-delay="100">

        <div className="p-4 rounded bg-white why-choose-us-box">

          <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
            <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-graduation-cap"></span></span></div>
            <div><h3 className="m-0">22,931 Yearly Graduates</h3></div>
          </div>

          <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
            <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-university"></span></span></div>
            <div><h3 className="m-0">150 Universities Worldwide</h3></div>
          </div>

          <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
            <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-graduation-cap"></span></span></div>
            <div><h3 className="m-0">Top Professionals in The World</h3></div>
          </div>

          <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
            <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-university"></span></span></div>
            <div><h3 className="m-0">Expand Your Knowledge</h3></div>
          </div>

          <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
            <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-graduation-cap"></span></span></div>
            <div><h3 className="m-0">Best Online Teaching Assistant Courses</h3></div>
          </div>

          <div className="d-flex align-items-center custom-icon-wrap custom-icon-light">
            <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-university"></span></span></div>
            <div><h3 className="m-0">Best Teachers</h3></div>
          </div>

        </div>


      </div>
      <div className="col-lg-7 align-self-end"  data-aos="fade-left" data-aos-delay="200">
        <img src={img2} alt="Image" className="img-fluid"/>
      </div>
    </div>
  </div>
</div>





<div className="site-section bg-light" id="contact-section">
  <div className="container">

    <div className="row justify-content-center">
      <div className="col-md-7">


        
        <h2 className="section-title mb-3">Message Us</h2>
        <p className="mb-5">Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      
        <form method="post" data-aos="fade">
          <div className="form-group row">
            <div className="col-md-6 mb-3 mb-lg-0">
              <input type="text" className="form-control" placeholder="First name"/>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Last name"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-12">
              <input type="text" className="form-control" placeholder="Subject"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-12">
              <input type="email" className="form-control" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-12">
              <textarea className="form-control" id="" cols="30" rows="10" placeholder="Write your message here."></textarea>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              
              <input type="submit" className="btn btn-primary py-3 px-5 btn-block btn-pill" value="Send Message"/>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</div>

 
<footer className="footer-section bg-white">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h3>About OneSchool</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</p>
      </div>

      <div className="col-md-3 ml-auto">
        <h3>Links</h3>
        <ul className="list-unstyled footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Programs</a></li>
          <li><a href="#">Teachers</a></li>
        </ul>
      </div>

      <div className="col-md-4">
        <h3>Subscribe</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt iure iusto architecto? Numquam, natus?</p>
        <form action="#" className="footer-subscribe">
          <div className="d-flex mb-5">
            <input type="text" className="form-control rounded-0" placeholder="Email"/>
            <input type="submit" className="btn btn-primary rounded-0" value="Subscribe"/>
          </div>
        </form>
      </div>

    </div>

    <div className="row pt-5 mt-5 text-center">
      <div className="col-md-12">
        <div className="border-top pt-5">
        <p>
        Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>

  </p>
        </div>
      </div>
      
    </div>
  </div>
</footer>
</div> 
 </>
     
  )

}
export default App;