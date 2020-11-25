import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Circles />
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="hero-box">
            <h1 className="hero-title">
              {title || 'Hi, my name is'}{' '}
              <span className="text-color-main">{name || 'Your Name'}</span>
              <br />
              {subtitle || "I'm the Unknown Developer."}
            </h1>
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  {cta || 'Know more'}
                </Link>
              </span>
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;

const Circles = () => {
  return (
    <div id="circles">
      <div class="fade-in">
        <svg class="blue" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="cut-off-circle">
              <circle cx="70" cy="50" r="15" />
              <circle cx="50" cy="0" r="15" />
            </clipPath>
          </defs>
          <circle cx="55" cy="30" r="25" fill="#FFB736" />
          <circle cx="20" cy="40" r="15" fill="#2F6BBC" />
          <g clipPath="url(#cut-off-circle)">
            {Array(100)
              .fill(true)
              .map((_l, i) => (
                <line
                  x1={i}
                  y1={0}
                  x2={200 + i * 20}
                  y2={200 + i * 20}
                  className="svg-circle-lines"
                />
              ))}
          </g>
          {/* <circle cx="50" cy="50" r="15" fill="white" /> */}
        </svg>
      </div>
    </div>
  );
};
