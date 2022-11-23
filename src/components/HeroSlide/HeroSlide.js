import React, { Component } from 'react';

class HeroSlide extends Component {
    render() {
        return (
            <div id="home" className="main-demo-hero">
            <div className="bg-overlay">


                <div className="hero-content-wrapper">
                    <div className="hero-content">

                        <h1 className="hero-lead wow fadeInLeft" data-wow-duration="1.5s">Created<br /> for creatives</h1>
                        <h4 className="h-alt hero-subheading wow fadeIn" data-wow-duration="2s" data-wow-delay=".7s">Multipage &amp; Onepage HTML5 Templates</h4>
                        <a href="#about" className="btn wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">Learn More</a>

                    </div>
                </div>


                <a href="#welcome" className="scroller scroller-dark">
                    <span className="scroller-text">scroll down</span>
                    <span className="linea-basic-magic-mouse"></span>
                </a>

            </div>
        </div>
        )
    }
}

export default HeroSlide;