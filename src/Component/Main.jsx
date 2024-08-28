import "./Main.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Banner from "../assets/Image/Marriage/inn.jpg";
import Banner2 from "../assets/Image/Marriage/img.png";
import Banner3 from "../assets/Image/Marriage/img1.png";
import Banner4 from "../assets/Image/Marriage/img.jpg";
import Banner6 from "../assets/Image/Marriage/img1 (1).jpg";
import Banner5 from "../assets/Image/Marriage/in.png";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const Main = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="bannerbox" id="home">
        <LazyLoadImage
          src={Banner5}
          placeholderSrc={Banner}
          className="banner-image"
          effect="blur"
        />
      </div>
      <div className="bannerbox">
        <LazyLoadImage
          src={Banner2}
          placeholderSrc={Banner4}
          className="banner-image"
          effect="blur"
        />
      </div>
      <div className="iternary" id="iternary">
        <h3>Itinerary</h3>
        <div className="date">
          <p
            id="1"
            className="mx-5"
            onClick={() => setActive(1)}
            style={{ color: active === 1 ? "#c6754d" : "#2b1105" }}>
            Saturday, Nov 16
          </p>
          <p
            id="2"
            onClick={() => setActive(2)}
            style={{ color: active === 2 ? "#c6754d" : "#2b1105" }}>
            Thursday, Nov 21
          </p>
          <p
            id="3"
            onClick={() => setActive(3)}
            className="mx-5"
            style={{ color: active === 3 ? "#c6754d" : "#2b1105" }}>
            Friday, Nov 22
          </p>
          <p
            id="4"
            onClick={() => setActive(4)}
            style={{ color: active === 4 ? "#c6754d" : "#2b1105" }}>
            Saturday, Nov 23
          </p>
        </div>
        {active == 1 && (
          <div className="centerIne">
            <div>
              <div className="event__container">
                <div className="montaga-regular center__items">
                  <div className="timeing">
                    <h4 className="montaga-regular">7 Pm Onward</h4>
                  </div>
                  <div>
                    <h4 className="montaga-regular ">Engagement</h4>
                    {/* <p>
                    Phasellus accumsan neque viverra ut sem aliquam purus
                    rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra
                    magna dignissim sit. Libero eu euismod risus, mauris etiam
                    ut morbi amet in. Tortor duis dignissim adipiscing sem.
                  </p> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="event__container">
              <div className="montaga-regular center__items">
                <div className="timeing">
                  <h4 className="montaga-regular">12pm</h4>
                </div>
                <div>
                  <h4 className="montaga-regular">Item Title</h4>
                  <p>
                    Phasellus accumsan neque viverra ut sem aliquam purus
                    rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra
                    magna dignissim sit. Libero eu euismod risus, mauris etiam
                    ut morbi amet in. Tortor duis dignissim adipiscing sem.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        )}

        {active == 2 && (
          <div className="centerIne">
            <div>
              <div className="event__container">
                <div className="montaga-regular center__items">
                  <div className="timeing">
                    <h4 className="montaga-regular">8 Pm</h4>
                  </div>
                  <div>
                    <h4 className="montaga-regular">Welcome Dinner</h4>
                    {/* <p>
                    Phasellus accumsan neque viverra ut sem aliquam purus
                    rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra
                    magna dignissim sit. Libero eu euismod risus, mauris etiam
                    ut morbi amet in. Tortor duis dignissim adipiscing sem.
                  </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {active == 3 && (
          <div className="centerIne">
            <div>
              <div className="event__container">
                <div className="montaga-regular center__items">
                  <div className="timeing">
                    <h4 className="montaga-regular ">12 Pm</h4>
                  </div>
                  <div>
                    <h4 className="montaga-regular">Mehndi</h4>
                  </div>
                </div>
              </div>
              <div className="event__container">
                <div className="montaga-regular center__items">
                  <div className="timeing">
                    <h4 className="montaga-regular">8 Pm</h4>
                  </div>
                  <div>
                    <h4 className="montaga-regular">Cocktail</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {active == 4 && (
          <div className="centerIne">
            <div>
              <div className="event__container">
                <div className="montaga-regular center__items">
                  <div className="timeing">
                    <h4 className="montaga-regular ">4:00 Pm</h4>
                  </div>
                  <div>
                    <h4 className="montaga-regular">Barat Assembly</h4>
                  </div>
                </div>
              </div>

              <div className="event__container">
                <div className="montaga-regular center__items">
                  <div className="timeing">
                    <h4 className="montaga-regular ">4:00 Pm</h4>
                  </div>
                  <div>
                    <h4 className="montaga-regular">Sehrabandi</h4>
                  </div>
                </div>
              </div>
              <div className="event__container">
                <div className="montaga-regular center__items">
                  <div className="timeing">
                    <h4 className="montaga-regular">6:00 Pm</h4>
                  </div>
                  <div>
                    <h4 className="montaga-regular">Jaimala</h4>
                  </div>
                </div>
              </div>

              <div className="event__container">
                <div className="montaga-regular center__items">
                  <div className="timeing">
                    <h4 className="montaga-regular">7:00 Pm</h4>
                  </div>
                  <div>
                    <h4 className="montaga-regular">Phere</h4>
                  </div>
                </div>
              </div>
              <div className="event__container">
                <div className="montaga-regular center__items">
                  <div className="timeing">
                    <h4 className="montaga-regular">8:30 Pm</h4>
                  </div>
                  <div>
                    <h4 className="montaga-regular">Vidaii</h4>
                  </div>
                </div>
              </div>

              <div className="event__container">
                <div className="montaga-regular center__items">
                  <div className="timeing">
                    <h4 className="montaga-regular">8:30 Pm</h4>
                  </div>
                  <div>
                    <h4 className="montaga-regular">Reception</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bannerbox imn" id="venue">
        <LazyLoadImage
          src={Banner3}
          placeholderSrc={Banner6}
          className="banner-image"
          effect="blur"
        />
      </div>
      <Container fluid className="map">
        <Row>
          <Col md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3233571263827!2d73.69821187393207!3d24.784378748300444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968084aea666db9%3A0x90ff0f546ba69fcc!2sMementos%20by%20ITC%20Hotels%2C%20Ekaaya%20Udaipur!5e0!3m2!1sen!2sin!4v1724393041998!5m2!1sen!2sin"
              className="hotel_map"
              allowfullscreen=""
              loading="lazy"></iframe>
          </Col>
          <Col md={6} className="map_text montaga-regular ">
            <div>
              <h3 className="help">Need Help in Booking Flights</h3>
              <div className="booking_button">
                <HashLink to="/flight-booking/#flightBooking">
                  <Button className="button-sub">Click Here</Button>
                </HashLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
