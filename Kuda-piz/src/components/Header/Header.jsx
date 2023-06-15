

// export default Header
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample() {
  return (
    <div className="Nav">

   
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Kuda Pizza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="btns">


<Container>

    <div className="buttons">
    <Button className='' variant="outline-primary">Пицца</Button>{' '}
      <Button variant="outline-secondary">Напитки</Button>{' '}
      <Button variant="outline-success">Закуски</Button>{' '}
      <Button variant="outline-warning">Суши</Button>{' '}
      <Button variant="outline-danger">Десерты</Button>{' '}
      <Button variant="outline-info">Соусы</Button>{' '}
      <Button variant="outline-light">Комбо</Button>{' '}
    </div>
     
     {/* <div className="sidebar__button">
     <Button className='col-3' variant="outline-primary">Пицца</Button>{' '}
      <Button className='col-3' variant="outline-secondary">Напитки</Button>{' '}
      <Button className='col-3' variant="outline-success">Закуски</Button>{' '}
      <Button className='col-3'  variant="outline-warning">Суши</Button>{' '}
      <Button className='col-3' variant="outline-danger">Десерты</Button>{' '}
      <Button className='col-3' variant="outline-info">Соусы</Button>{' '}
      <Button className='col-3' variant="outline-light">Комбо</Button>{' '}
     </div> */}
      </Container>

    </div>
    </div>
  );
}

export default BasicExample;