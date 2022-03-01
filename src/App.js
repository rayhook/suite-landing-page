import React from "react";
import "./App.css";
import heroPort from "./assets/image-hero-portrait.png";
import testimony from "./assets/image-jeremy-large.png";
import { ReactComponent as SuiteLogo } from "./assets/logo.svg";
import { ReactComponent as FacebookIcon } from "./assets/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "./assets/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "./assets/icon-twitter.svg";
import { ReactComponent as PatternCurved } from "./assets/pattern-curved-line-1.svg";

function App() {
  return (
    <div className="main">
      <div className="narrow">
        <SuiteLogo />
        <button className="req-beta-button-light">Request Beta Access</button>
      </div>
      <div className="main-content">
        <PatternCurved className="pattern-curved" />
        <div className="title">
          <p className="top-title">
            A super solution for
            <br /> your business.
          </p>
          <p className="sub-heading">
            Our marketing and sales automations help <br /> you scale your outreach to get more
            leads <br /> for your company
          </p>
          <button className="req-beta-button-dark">Request Beta Access</button>
        </div>
        <div className="main-content-image">
          <img src={heroPort} alt="business solution" />
        </div>
        <div className="stats-container">
          <div className="main-content-stats">
            <div className="stat1">
              <p className="stat-main">2K+</p>
              <p className="stat-secondary">Companies</p>
            </div>
            <div className="stat2">
              <p className="stat-main">8</p>
              <p className="stat-secondary">Languages</p>
            </div>
            <div className="stat3">
              <p className="stat-main">1.2M</p>
              <p className="stat-secondary">Leads</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content-testimony">
        <div className="testimony-image">
          <img src={testimony} alt="man writiing" />
        </div>
        <div className="testimony-text">
          <h1 className="testimony-text-title">It just works.</h1>
          <p className="testimony-text-subTitle">
            "I really like how it is an all-in-one solution that handle many of the tasks that you
            would normally need seperate tools to do the same job. This thing is a miracle worker."
            <br />
          </p>
          <p className="testimony-text-subTitle">
            JEREMY ROBINSON <br />
            CMO, FYLO
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="logo">
          <SuiteLogo fill="currentColor" />
        </div>
        <div className="copy-right">Copyright - Suite</div>
        <div className="social-media">
          <FacebookIcon className="facebook-icon" fill="currentColor" />
          <TwitterIcon className="twitter-icon" fill="currentColor" />
          <InstagramIcon className="instagram-icon" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

export default App;
