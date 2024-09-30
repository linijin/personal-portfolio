function App() {
  return (
    <>
    {/* Navbar Start */}
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5"><span className="text-primary">Free</span>Folio</h1>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">
                <a href="#home" className="nav-item nav-link active">Home</a>
                <a href="#about" className="nav-item nav-link">About</a>
                <a href="#qualification" className="nav-item nav-link">Quality</a>
                <a href="#skill" className="nav-item nav-link">Skill</a>
                <a href="#service" className="nav-item nav-link">Service</a>
                <a href="#portfolio" className="nav-item nav-link">Portfolio</a>
                <a href="#testimonial" className="nav-item nav-link">Review</a>
                <a href="#blog" className="nav-item nav-link">Blog</a>
                <a href="#contact" className="nav-item nav-link">Contact</a>
            </div>
            <a href="" className="btn btn-outline-primary d-none d-lg-block">Hire Me</a>
        </div>
    </nav>
    {/* Navbar End */}


    {/* Video Modal Start */}
    <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>        
                    {/* 16:9 aspect ratio */}
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Video Modal End */}


    {/* Header Start */}
    <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style="min-height: 100vh;">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                    <img className="img-fluid w-100 rounded-circle shadow-sm" src="img/profile.jpg" alt=""/>
                </div>
                <div className="col-lg-7 text-center text-lg-left">
                    <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                    <h1 className="display-3 text-uppercase text-primary mb-2" style="-webkit-text-stroke: 2px #ffffff;">Kate Winslet</h1>
                    <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
                    <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                        <a href="" className="btn btn-outline-light mr-5">Download CV</a>
                        <button type="button" className="btn-play" data-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Header End */}


    {/* About Start */}
    <div className="container-fluid py-5" id="about">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">About</h1>
                <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-5 pb-4 pb-lg-0">
                    <img className="img-fluid rounded w-100" src="img/about.jpg" alt=""/>
                </div>
                <div className="col-lg-7">
                    <h3 className="mb-4">UI/UX Designer & Web Developer</h3>
                    <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor</p>
                    <div className="row mb-3">
                        <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Kate Winslet</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">1 April 1990</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Master</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">10 Years</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+012 345 6789</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">info@example.com</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">123 Street, New York, USA</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
                    </div>
                    <a href="" className="btn btn-outline-primary mr-4">Hire Me</a>
                    <a href="" className="btn btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}


    {/* Qualification Start */}
    <div className="container-fluid py-5" id="qualification">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Quality</h1>
                <h1 className="position-absolute text-uppercase text-primary">Education & Expericence</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h3 className="mb-4">My Education</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                            <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                            <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                            <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="mb-4">My Expericence</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Web Designer</h5>
                            <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Web Designer</h5>
                            <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Web Designer</h5>
                            <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Qualification End */}


    {/* Skill Start */}
    <div className="container-fluid py-5" id="skill">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Skills</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">HTML</h6>
                            <h6 className="font-weight-bold">95%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">CSS</h6>
                            <h6 className="font-weight-bold">85%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">PHP</h6>
                            <h6 className="font-weight-bold">90%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Javascript</h6>
                            <h6 className="font-weight-bold">90%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Angular JS</h6>
                            <h6 className="font-weight-bold">95%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="skill mb-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-bold">Wordpress</h6>
                            <h6 className="font-weight-bold">85%</h6>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Skill End */}


    {/* Services Start */}
    <div className="container-fluid pt-5" id="service">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Service</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Services</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Web Design</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                    <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Web Development</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                    <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fab fa-2x fa-android service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Apps Design</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                    <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fab fa-2x fa-apple service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Apps Development</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                    <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-search service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">SEO</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                    <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-edit service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Content Creating</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                    <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
    {/* Services End */}


    {/* Portfolio Start */}
    <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Gallery</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Portfolio</h1>
            </div>
            <div className="row">
                <div className="col-12 text-center mb-2">
                    <ul className="list-inline mb-4" id="portfolio-flters">
                        <li className="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">All</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Design</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Development</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Marketing</li>
                    </ul>
                </div>
            </div>
            <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-1.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-2.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-3.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-4.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-5.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-6.jpg" alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Portfolio End */}


    {/* Testimonial Start */}
    <div className="container-fluid py-5" id="testimonial">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Review</h1>
                <h1 className="position-absolute text-uppercase text-primary">Clients Say</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="text-center">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita</h4>
                            <img className="img-fluid rounded-circle mx-auto mb-3" src="img/testimonial-1.jpg" style="width: 80px; height: 80px;"/>
                            <h5 className="font-weight-bold m-0">Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita</h4>
                            <img className="img-fluid rounded-circle mx-auto mb-3" src="img/testimonial-2.jpg" style="width: 80px; height: 80px;"/>
                            <h5 className="font-weight-bold m-0">Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita</h4>
                            <img className="img-fluid rounded-circle mx-auto mb-3" src="img/testimonial-3.jpg" style="width: 80px; height: 80px;"/>
                            <h5 className="font-weight-bold m-0">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Testimonial End */}


    {/* Blog Start */}
    <div className="container-fluid pt-5" id="blog">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Blog</h1>
                <h1 className="position-absolute text-uppercase text-primary">Latest Blog</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-5">
                    <div className="position-relative mb-4">
                        <img className="img-fluid rounded w-100" src="img/blog-1.jpg" alt=""/>
                        <div className="blog-date">
                            <h4 className="font-weight-bold mb-n1">01</h4>
                            <small className="text-white text-uppercase">Jan</small>
                        </div>
                    </div>
                    <h5 className="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
                    <a className="btn btn-sm btn-outline-primary py-2" href="">Read More</a>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className="position-relative mb-4">
                        <img className="img-fluid rounded w-100" src="img/blog-2.jpg" alt=""/>
                        <div className="blog-date">
                            <h4 className="font-weight-bold mb-n1">01</h4>
                            <small className="text-white text-uppercase">Jan</small>
                        </div>
                    </div>
                    <h5 className="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
                    <a className="btn btn-sm btn-outline-primary py-2" href="">Read More</a>
                </div>
                <div className="col-lg-4 mb-5">
                    <div className="position-relative mb-4">
                        <img className="img-fluid rounded w-100" src="img/blog-3.jpg" alt=""/>
                        <div className="blog-date">
                            <h4 className="font-weight-bold mb-n1">01</h4>
                            <small className="text-white text-uppercase">Jan</small>
                        </div>
                    </div>
                    <h5 className="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
                    <a className="btn btn-sm btn-outline-primary py-2" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
    {/* Blog End */}


    {/* Contact Start */}
    <div className="container-fluid py-5" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Contact</h1>
                <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" className="form-control p-4" id="name" placeholder="Your Name"
                                        required="required" data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="email" className="form-control p-4" id="email" placeholder="Your Email"
                                        required="required" data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
                                    Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Contact End */}


    {/* Footer Start */}
    <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="container text-center py-5">
            <div className="d-flex justify-content-center mb-4">
                <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="d-flex justify-content-center mb-3">
                <a className="text-white" href="#">Privacy</a>
                <span className="px-3">|</span>
                <a className="text-white" href="#">Terms</a>
                <span className="px-3">|</span>
                <a className="text-white" href="#">FAQs</a>
                <span className="px-3">|</span>
                <a className="text-white" href="#">Help</a>
            </div>
            <p className="m-0">&copy; <a className="text-white font-weight-bold" href="#">Domain Name</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
            </p>
        </div>
    </div>
    {/* Footer End */}

    {/* Scroll to Bottom */}
    <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom"></i>

    {/* Back to Top */}
    <a href="#" className="btn btn-outline-dark px-0 back-to-top"><i className="fa fa-angle-double-up"></i></a>

    </>
  )
}

export default App
