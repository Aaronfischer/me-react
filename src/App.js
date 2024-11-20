import React, { Component } from "react";
import "./App.css";
import SwiperWrapper from "./SwiperWrapper";
import SwiperSlide from "./SwiperSlide";
import GitHubProfile from "./components/GitHubProfile";
import FlickrSlider from "./components/FlickrSlider";
import FlickrProfile from "./components/FlickrProfile";
import TwitterProfile from "./components/TwitterProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleIsExpandedToggle = this.handleIsExpandedToggle.bind(this);
    this.state = { isExpanded: false };
  }

  handleIsExpandedToggle() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  render() {
    const isExpanded = this.state.isExpanded;
    return (
      <div className="App container fh">
        <div className="row fh cf">
          <div className="pad-col-5 desk-col-4"></div>
          <aside className="col-16 pad-col-5 desk-col-4">
            <div className="row cf">
              <div className="col-16 pad-col-5 desk-col-4 ac">
                <div className="top-img">
                  {/* TODO: swap below */}
                  <FlickrSlider />
                  {/* <img src="assets/media/img/laytart-class.png" alt="me" /> */}
                  {/* <img src="assets/media/img/orlando-class.png" alt="me" /> */}
                </div>
                <figure className="circle  col-5 pad-col-2 desk-col-1 ci">
                  {/* TODO: swap below */}
                  <img src="assets/media/img/me.jpg" alt="me" />
                  {/* <img src="assets/media/img/orlando-profile.png" alt="me" /> */}
                </figure>
                <div className="vcard">
                  <h1 className="h2">Aaron Fischer</h1>
                  <h2 className="h5">Software Engineer</h2>
                  <div className="about-me ac">
                    <a
                      className={`btn btn-sm btn-animate-icon ${
                        isExpanded ? "active" : ""
                      }`}
                      onClick={this.handleIsExpandedToggle}
                    >
                      About{" "}
                      <i
                        className={`icon ${
                          isExpanded
                            ? "icon-left-open-big"
                            : "icon-right-open-big"
                        }`}
                      ></i>
                    </a>
                  </div>
                  <ul className="social list-unstyled ac">
                    <TwitterProfile
                      username="aaronfischer"
                      fetchCount="10"
                      callbackName="callbackCity"
                    />
                    <FlickrProfile />
                    <GitHubProfile />
                    <li>
                      <a
                        href="https://dribbble.com/aaronfischer"
                        target="_blank"
                      >
                        <i className="fab fa-dribbble"></i>
                        <span className="hoverable ac">Dribbble</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://500px.com/aaronfischer" target="_blank">
                        <i className="fab fa-500px"></i>
                        <span className="hoverable ac">500px</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/aaronbrycefischer/"
                        target="_blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                        <span className="hoverable ac">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:aaron@gofisching.com?subject=Contacting you via your website">
                        <i className="icon-mail-1"></i>
                        <span className="hoverable ac">Email</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <section
            className={`section-about-me col-16 pad-col-10 desk-col-10 ${
              isExpanded ? "active" : ""
            }`}
          >
            {isExpanded ? (
              <div className="row cf padding-top-80">
                <div className="row cf">
                  <div className="col-14 pad-col-8 desk-col-8 ci">
                    <h3 className="h1 margin-bottom-50">
                      {/* This is Mrs Laytart's Class Website of all the things we
                      love. */}
                      {/* REMOVE BELOW */}I am a Senior Front-End Engineer,{" "}
                      <a
                        href="https://dribbble.com/aaronfischer"
                        target="_blank"
                      >
                        designer
                      </a>
                      ,{" "}
                      <a href="https://valenciacollege.edu/" target="_blank">
                        educator
                      </a>
                      , forever-student, husband, and father. Working{" "}
                      <a href="https://art19.com/" target="_blank">
                        @amazon
                      </a>
                      , previously{" "}
                      <a href="https://art19.com/" target="_blank">
                        @art19
                      </a>
                      ,{" "}
                      <a href="https://www.caxiam.com/" target="_blank">
                        @caxiam
                      </a>{" "}
                      , and{" "}
                      <a href="https://purplerockscissors.com/" target="_blank">
                        @prplrckscssrs
                      </a>
                      .
                    </h3>
                  </div>
                </div>
                <div className="row cf padding-top-25 padding-bottom-25">
                  {/* TODO: REMOVE CONTENT */}
                  <div className="col-14 pad-col-8 desk-col-8 ci">
                    <h5 className="margin-top-0">Technologies I Use(d):</h5>
                    <ul className="social list-unstyled">
                      <li>
                        <a href="https://bitbucket.org/" target="_blank">
                          <i className="fab fa-bitbucket"></i>
                          <span className="hoverable ac">BitBucket</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                          target="_blank"
                        >
                          <i className="fab fa-html5"></i>
                          <span className="hoverable ac">HTML5</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://sass-lang.com/" target="_blank">
                          <i className="fab fa-sass"></i>
                          <span className="hoverable ac">SASS</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://m.do.co/c/a22e29aebfa1"
                          target="_blank"
                        >
                          <i className="fab fa-digital-ocean"></i>
                          <span className="hoverable ac">Digital Ocean</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                          target="_blank"
                        >
                          <i className="fab fa-js"></i>
                          <span className="hoverable ac">Javascript</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.emberjs.com/" target="_blank">
                          <i className="fab fa-ember"></i>
                          <span className="hoverable ac">Ember.js</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://reactjs.org/" target="_blank">
                          <i className="fab fa-react"></i>
                          <span className="hoverable ac">React.js</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.npmjs.com/" target="_blank">
                          <i className="fab fa-npm"></i>
                          <span className="hoverable ac">npm</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://git-scm.com/" target="_blank">
                          <i className="fab fa-git"></i>
                          <span className="hoverable ac">Git</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/" target="_blank">
                          <i className="fab fa-github"></i>
                          <span className="hoverable ac">Github</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://gulpjs.com/" target="_blank">
                          <i className="fab fa-gulp"></i>
                          <span className="hoverable ac">Gulp</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row cf">
                  <div className="col-14 pad-col-8 desk-col-8 ci">
                    <a
                      className={`btn btn-sm btn-animate-icon btn-mobile-only ${
                        isExpanded ? "active" : ""
                      }`}
                      onClick={this.handleIsExpandedToggle}
                    >
                      Go Back{" "}
                      <i
                        className={`icon ${
                          isExpanded
                            ? "icon-left-open-big"
                            : "icon-right-open-big"
                        }`}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </section>
          <section className="section-slider col-16 pad-col-11 desk-col-12">
            <SwiperWrapper>
              {/* <SwiperSlide
                name="Summerlake"
                slide="omnigage"
                responsibilities="We love our mascot"
                img="assets/media/img/summerlake-gator.png"
                link="https://omnigage.com/"
                linkName="Visit Site"
              /> */}

              {/* <SwiperSlide
                name="Roblox"
                slide="roblox"
                responsibilities="We love to build things on roblox"
                img="https://imgs.search.brave.com/1byETDEMB_kGKw_5SQqK-QyMlO3Lwxy5yCozvWKHy9M/rs:fit:1200:1069:1/g:ce/aHR0cHM6Ly9leHB1/dGVyLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMS9y/b2Jsb3gtd2FsbHBh/cGVyLmpwZw"
                link="https://www.roblox.com/"
                linkName="Visit Site"
              /> */}

              <SwiperSlide
                name="Omnigage"
                slide="omnigage"
                responsibilities="Development | EmberJS | Application"
                img="assets/media/img/work/omnigage.png"
                link="https://omnigage.com/"
                linkName="Visit Site"
              />
              <SwiperSlide
                name="Meyers Research"
                slide="meyers"
                responsibilities="Development | Wordpress | Frontend | Backend"
                img="assets/media/img/work/meyers.png"
                link="https://meyersresearchllc.com/"
                linkName="Visit Site"
              />
              <SwiperSlide
                name="Ember Tabular"
                slide="tabular"
                responsibilities="Development | EmberJS | Ember Addon"
                img="assets/media/img/work/tabular.png"
                link="http://caxiam.github.io/ember-tabular/"
                linkName="Visit Github"
              />
              <SwiperSlide
                name="Phil Kean Designs"
                slide="phil"
                responsibilities="Development | Wordpress | Frontend | Backend"
                img="assets/media/img/work/phil.png"
                link="https://philkeandesigns.com/"
                linkName="Visit Site"
              />
              <SwiperSlide
                name="AdventHealth University"
                slide="ahu"
                responsibilities="Development | Drupal | Frontend | Backend"
                img="assets/media/img/work/ahu.png"
                link="https://www.ahu.edu/"
                linkName="Visit Site"
              />
              <SwiperSlide
                name="BAC Sales"
                slide="bacsales"
                responsibilities="Development | EmberJS | Application"
                img="assets/media/img/work/bacsales.png"
                link="https://bacsales.com/"
                linkName="Visit Site"
              />
              <SwiperSlide
                name="Modernizing Medicine"
                slide="mmi"
                responsibilities="Development | Wordpress | Frontend | Backend"
                img="assets/media/img/work/mmi.png"
                link="http://modmed.com"
                linkName="Visit Site"
              />
              <SwiperSlide
                name="Wedding"
                slide="wedding"
                responsibilities="Design | Branding | Letterpress"
                img="assets/media/img/work/wedding.png"
                link="https://www.facebook.com/mamassauce/photos/a.379061322209.157805.360217092209/10151652833417210"
                linkName="See More"
              />
              <SwiperSlide
                name="RMCAD | The Dome"
                slide="dome"
                responsibilities="Development | Drupal | Frontend | Backend"
                img="assets/media/img/work/dome.png"
                link="http://dome.rmcad.edu"
                linkName="Visit Site"
              />
              <SwiperSlide
                name="FHFC | Specialist Directory"
                slide="fhfc"
                responsibilities="Design | Development | Web App | Frontend | Backend"
                img="assets/media/img/work/fhfcdirectory.png"
              />
            </SwiperWrapper>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
