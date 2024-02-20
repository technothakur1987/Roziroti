import React from 'react';
import './Test.css'

const Test = () => {
    return (
        <section className="square-slider-block">
            <div className="square-slider js-is-ready" data-js="square-slider">
                <div className="square-slider__container">
                    <div data-js="square-slider-track" className="flickity-enabled is-draggable" tabIndex="0">
                        <div className="flickity-viewport" style={{ height: '537.594px', touchAction: 'pan-y' }}>
                            <div className="flickity-slider" style={{ left: '0px', transform: 'translateX(-144.71%)' }}>
                                <div className="square-slider__slide" style={{ position: 'absolute', left: '0px', transform: 'translateX(0%)' }} aria-hidden="true">
                                    <a href="https://24carrots.com/venue/the-richland/" className="venue-sq-preview">
                                        <div className="venue-sq-preview__bg">
                                            <img decoding="async" className="js-is-active" src="https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg" alt="The Richland Ballroom" data-slide-num="0" />
                                        </div>
                                        <div className="venue-sq-preview__overlay"></div>
                                        <button className="venue-sq-preview__btn btn-outline white">Explore Venue</button>
                                        <div className="venue-sq-preview__content">
                                            <div className="venue-sq-preview__name">The Richland</div>
                                            <div className="venue-sq-preview__meta">
                                                <div>Orange</div>
                                                <div>{/* Capacity: 300 */}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                {/* Add other slides here */}
                            </div>
                        </div>
                    </div>
                    <div className="square-slider__controls">
                        <div className="range-scrubber dragdealer" data-js="scrubber">
                            <div className="range-scrubber__handle handle" style={{ perspective: '1000px', backfaceVisibility: 'hidden', transform: 'translateX(140px)' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Test;
