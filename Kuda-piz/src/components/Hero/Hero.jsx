import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Pizza1 from "../../assets/pizza1.png"
import Herocs from '../Hero/Hero.css'
function UncontrolledExample() {
  return (
    <Container>

   
    <Carousel>
      <Carousel.Item>
        <div className="img1">
        <img
          className="d-block w-40 "
          src={Pizza1}
          alt="First slide"
        />
        <img
          className="d-block w-40 "
          src={Pizza1}
          alt="First slide"
        />
        <img
          className="d-block w-40 "
          src={Pizza1}
          alt="First slide"
        />
        </div>
      

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="img1">
        <img
          className="d-block w-40 "
          src={Pizza1}
          alt="First slide"
        />
        <img
          className="d-block w-40 "
          src={Pizza1}
          alt="First slide"
        />
        <img
          className="d-block w-40 "
          src={Pizza1}
          alt="First slide"
        />
        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="img1">
        <img
          className="d-block w-40 "
          src={Pizza1}
          alt="First slide"
        />
        <img
          className="d-block w-40 "
          src={Pizza1}
          alt="First slide"
        />
        <img
          className="d-block w-40 "
          src={Pizza1}
          alt="First slide"
        />
        </div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default UncontrolledExample;