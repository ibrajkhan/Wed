import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../Component/Header";
import "./Story.css";
import Img from "../assets/Image/Marriage/groom.png";
import Img1 from "../assets/Image/Marriage/groom2.png";

import Img3 from "../assets/Image/Marriage/diu.jpg";
import Img4 from "../assets/Image/Marriage/diu1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Story = () => {
  return (
    <div id="Story">
      <Header />
      <div className="story_background">
        <div className="story_inn">
          <h4 className="superia ki">A Love Story</h4>
          <h3 className="superia ka">RANVIR & GAYATRI</h3>
        </div>
        <Container className="px-4">
          <Row>
            <Col md={4}>
              <LazyLoadImage
                src={Img}
                placeholderSrc={Img3}
                effect="blur"
                className="img-fluid"
              />
            </Col>
            <Col md={8} className="para">
              <p>
                In the bustling heart of Delhi, the families of Ranvir and
                Gayatri were preparing for an arranged marriage that would
                intertwine their futures. Ranvir, a young entrepreneur in his
                late twenties, was taking his family's manufacturing business to
                new heights. On the other hand, Gayatri, 26, managed her
                family’s catering business, known for its exquisite culinary
                offerings. Both felt the pressure to settle down but were
                focused on their respective careers.
              </p>
              <p>
                Their paths crossed at a family gathering, and the initial
                nervousness soon faded as they discovered a shared passion for
                entrepreneurship. Over several meetings, they engaged in lively
                discussions about business strategies, blending their ambitions
                with laughter and camaraderie. Ranvir admired Gayatri’s
                innovative ideas, while Gayatri respected Ranvir’s ambitious
                vision for his company.
              </p>
            </Col>
          </Row>

          <Row className="imgg">
            <Col md={4} className="dis">
              <LazyLoadImage
                src={Img1}
                placeholderSrc={Img4}
                effect="blur"
                className="img-fluid"
              />
            </Col>
            <Col md={8} className="para">
              <p>
                One evening, in a vibrant café, Ranvir invited Gayatri to
                brainstorm potential collaboration between their businesses. The
                chemistry between them was undeniable, and as they talked about
                dreams and aspirations, Ranvir realized he was falling for her.
              </p>
              <p>
                “I don’t just want a business partner; I want a life partner,”
                he confessed. To his delight, Gayatri felt the same.{" "}
              </p>
              <p>
                With family support, their relationship blossomed into a
                beautiful romance founded on mutual respect and shared goals.
                Months later, they exchanged vows at a joyful wedding,
                celebrating their love and the exciting journey ahead.
              </p>
              <p>
                Together, Ranvir and Gayatri proved that even in the traditional
                framework of arranged marriages, love can flourish in unexpected
                and beautiful ways, combining their dreams to create a promising
                future.
              </p>
            </Col>
            <Col md={4} className="diss">
              <LazyLoadImage src={Img1} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Story;
