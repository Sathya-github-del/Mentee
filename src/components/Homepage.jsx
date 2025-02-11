import './Homepage.css';

const Homepage = () => {
    return (
        <div className="homepage">
            {/* Add Logo */}
            <div className="logo-container">
                <span className="logo-text">
                    <span>Dyn</span><span>Pro</span>
                </span>
                <img
                    src="src/assets/logo.png"
                    alt="Mentee Logo"
                    className="logo-image"
                />
            </div>

            {/* Existing navbar */}
            <nav className="navbar">
                <button className="nav-btn">
                    <div className="nav-icon">
                        <svg viewBox="0 0 448 512">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                    </div>
                    <div className="nav-text">Find Mentor</div>
                </button>
                {/* Apply Button with new icon */}
                <button className="nav-btn settings-btn">
                    <div className="nav-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.435 2.582a1.933 1.933 0 00-1.93-.503L3.408 6.759a1.92 1.92 0 00-1.384 1.522c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.929z"
                                fill="#5d41de" />
                        </svg>
                    </div>
                    <div className="nav-text">Apply</div>
                </button>

                <div className="login-buttons">
                    <button className="nav-btn login-btn mentee-login">
                        <div className="nav-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </div>
                        <div className="nav-text">Mentee</div>
                    </button>
                    <button className="nav-btn login-btn mentor-login">
                        <div className="nav-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                        </svg>
                        </div>
                        <div className="nav-text">Mentor</div>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <video autoPlay muted loop className="hero-video">
                    <source src="src/assets/vidbg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-content">
                    <h1>Find Your Perfect Mentor</h1>
                    <p>Connect with experienced professionals who can guide your career journey</p>

                    <div className="input-container">
                        <input
                            type="text"
                            name="search"
                            className="input"
                            placeholder="Search for a mentor or skill u want to learn..."
                        />
                        <span className="icon">
                            <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_iconCarrier">
                                    <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </span>
                    </div>

                    <button className="button button-item">
                        <span className="button-bg">
                            <span className="button-bg-layers">
                                <span className="button-bg-layer button-bg-layer-1 -purple"></span>
                                <span className="button-bg-layer button-bg-layer-2 -turquoise"></span>
                                <span className="button-bg-layer button-bg-layer-3 -yellow"></span>
                            </span>
                        </span>
                        <span className="button-inner">
                            <span className="button-inner-static">Apply Now</span>
                            <span className="button-inner-hover">Let&apos;s Start!</span>
                        </span>
                    </button>
                </div>
            </section>

            {/* Companies Section */}
            <section className="companies">
                <div className="companies-track">
                    {/* First set of logos */}
                    <div className="company">
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" />
                    </div>
                    <div className="company">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="Microsoft" />
                    </div>
                    <div className="company">
                        <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" alt="Apple" />
                    </div>
                    <div className="company">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" />
                    </div>
                    <div className="company">
                        <img src="https://scontent.fblr25-1.fna.fbcdn.net/v/t39.8562-6/256577725_612381820192785_1516860531882870200_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f537c7&_nc_ohc=zWOCdP8Sn20Q7kNvgFIFvLN&_nc_zt=14&_nc_ht=scontent.fblr25-1.fna&_nc_gid=AWKcRmmpkBEWROgTcDGMxJV&oh=00_AYC-l-PFqGg0ZbIkyXoA91PxZ4FDNrBu-hSdiHrmaOeUjw&oe=67AFAF68" alt="Meta" />
                    </div>
                    <div className="company">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="LinkedIn" />
                    </div>
                    <div className="company">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter" />
                    </div>
                    {/* Duplicate set for seamless loop - same images */}
                    <div className="company">
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" />
                    </div>
                    <div className="company">
                        <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="Microsoft" />
                    </div>
                    <div className="company">
                        <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" alt="Apple" />
                    </div>
                    <div className="company">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" />
                    </div>
                    <div className="company">
                        <img src="https://scontent.fblr25-1.fna.fbcdn.net/v/t39.8562-6/256577725_612381820192785_1516860531882870200_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f537c7&_nc_ohc=zWOCdP8Sn20Q7kNvgFIFvLN&_nc_zt=14&_nc_ht=scontent.fblr25-1.fna&_nc_gid=AWKcRmmpkBEWROgTcDGMxJV&oh=00_AYC-l-PFqGg0ZbIkyXoA91PxZ4FDNrBu-hSdiHrmaOeUjw&oe=67AFAF68" alt="Meta" />
                    </div>
                    <div className="company">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="LinkedIn" />
                    </div>
                    <div className="company">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter" />
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section className="how-it-works">
                <h2 className="section-title">How it Works</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/1189/1189182.png" alt="Sign Up" />
                        </div>
                        <h3>1. Sign Up</h3>
                        <p>Create your profile and tell us about your goals and interests</p>
                    </div>

                    <div className="step">
                        <div className="step-icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/1189/1189172.png" alt="Match" />
                        </div>
                        <h3>2. Get Matched</h3>
                        <p>Our AI matches you with mentors who align with your career goals</p>
                    </div>

                    <div className="step">
                        <div className="step-icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/1189/1189163.png" alt="Connect" />
                        </div>
                        <h3>3. Connect</h3>
                        <p>Schedule sessions and start learning from your mentor's experience</p>
                    </div>

                    <div className="step">
                        <div className="step-icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/1189/1189160.png" alt="Grow" />
                        </div>
                        <h3>4. Grow</h3>
                        <p>Achieve your goals with personalized guidance and support</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2 className="section-title">Testimonials</h2>
                <div className="testimonials-container">
                    <div className="testimonial">
                        <p>"This platform has been a game-changer for my career. My mentor provided invaluable advice and support."</p>
                        <h4>Name</h4>
                    </div>
                    <div className="testimonial">
                        <p>"I found the perfect mentor who helped me navigate my career path and achieve my goals."</p>
                        <h4>Name</h4>
                    </div>
                    <div className="testimonial">
                        <p>"The mentorship I received was top-notch. I highly recommend this platform to anyone looking for guidance."</p>
                        <h4>Name</h4>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="success-stories">
                <h2 className="section-title">Success Stories</h2>
                <div className="stories-container">
                    <div className="story">
                        <img src="src/assets/success1.jpg" alt="Success Story 1" />
                        <h3>Journey1</h3>
                        <p>From a novice to a data scientist at a leading tech company.</p>
                    </div>
                    <div className="story">
                        <img src="src/assets/success2.jpg" alt="Success Story 2" />
                        <h3>Journey2</h3>
                        <p>transitioned from a junior developer to a senior engineer.</p>
                    </div>
                    <div className="story">
                        <img src="src/assets/success3.jpg" alt="Success Story 3" />
                        <h3>Journey3</h3>
                        <p>Journey from a marketing intern to a marketing manager.</p>
                    </div>
                </div>
            </section>

            {/* Advanced Section 2 */}
            <section className="advanced-section">
                <h2 className="section-title">Upcoming Events</h2>
                <div className="events-container">
                    <div className="event">
                        <h3>Webinar: AI in 2023</h3>
                        <p>Join us for an insightful webinar on the latest trends in AI.</p>
                        <button className="event-btn">Register Now</button>
                    </div>
                    <div className="event">
                        <h3>Workshop: Career Growth</h3>
                        <p>Learn how to advance your career with our expert-led workshop.</p>
                        <button className="event-btn">Register Now</button>
                    </div>
                    <div className="event">
                        <h3>Networking Event</h3>
                        <p>Connect with industry professionals and expand your network.</p>
                        <button className="event-btn">Register Now</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="src/assets/logo.png" alt="Mentee Logo" />
                        <span className="logo-text">
                            <span>Dyn</span><span>Pro</span>
                        </span>
                    </div>
                    <div className="footer-links">
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="footer-social">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2023 DynPro. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
