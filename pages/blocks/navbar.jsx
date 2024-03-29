
import styles from '../../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';



function Headernav() {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg"  variant="dark" className={styles.nav_footer_bg}>
      <Container className="pb-1">
        <Navbar.Brand href="/"><img src="/logo.svg" width="150px" height="45px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.res_nav} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fw-bold text-white" href="/about">About</Nav.Link>
            <Nav.Link className="fw-bold text-white" href="/collections">Collections</Nav.Link>
            <Nav.Link className="fw-bold text-white" href="/faqs">FAQs</Nav.Link>
            <Nav.Link className="fw-bold text-white" href="/contact">Contact</Nav.Link>
            {/**<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
          <Nav>
            <Button variant="light">Launch App</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headernav;