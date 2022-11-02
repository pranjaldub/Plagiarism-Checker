import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Plagiarism Checker</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid px-md-5">
          <div className="row justify-content-between">
            <div className="col-md-8 order-md-last">
              <div className="row">
                <div className="col-md-6 text-center">
                  <h3 className="sub-heading-section">100% free plagiarism checker</h3>
                </div>
                <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                  <form action="#" className="searchform order-lg-last">
                    <div className="form-group d-flex">
                      <input type="text" className="form-control pl-3" placeholder="Search" />
                      <button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="social-media">
                <p className="mb-0 d-flex">

                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-linkedin"><i className="sr-only">Linkedin</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-github"><i className="sr-only">Github</i></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active"><a href="#" className="nav-link">Home</a></li>

                <li className="nav-item"><a href="#" className="nav-link">Check grammar</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Header