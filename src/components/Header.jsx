import { Container, Nav, Navbar } from "react-bootstrap";
import { FaHome, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";


const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <FaHome />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/vivek'>
                <Nav.Link>
                  <FaUser /> Vivek
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/yatharth'>
                <Nav.Link>
                  <FaUser /> Yatharth
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/om'>
                <Nav.Link>
                  <FaUser /> Om
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/krunal'>
                <Nav.Link>
                  <FaUser /> Krunal
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  );
};

export default Header;
