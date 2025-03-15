import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

function OffcanvasExample() {
  return (
    <Navbar expand={false} className="bg-body-tertiary-mod mb-3">
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton style={{ backgroundColor: "#550C55" }}>
            <style>{`
              .btn-close {
                filter: invert(1);
                border: 2px solid white;
              }
            `}</style>
            <Offcanvas.Title id="offcanvasNavbarLabel">
            <img
              alt="Vexo Logo"
              loading="lazy"
              width={152}
              height={48}
              decoding="async"
              data-nimg="1"
              className="h-9 w-[121px]"
              srcSet="
                https://vexo.cdn.prismic.io/vexo/ZgGCx8cYqOFdyEDR_Logo.svg?auto=compress%2Cformat&fit=max&w=256 1x, 
                https://vexo.cdn.prismic.io/vexo/ZgGCx8cYqOFdyEDR_Logo.svg?auto=compress%2Cformat&fit=max&w=384 2x
              "
              src="https://vexo.cdn.prismic.io/vexo/ZgGCx8cYqOFdyEDR_Logo.svg?auto=compress%2Cformat&fit=max&w=384"
              style={{ color: "transparent" }}
            />

            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ backgroundColor: "#550C55" }}>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home" style={{ textAlign: "center",color:"white" }}>Inicio</Nav.Link>
              <Nav.Link href="#link" style={{ textAlign: "center",color:"white"  }}>Para você</Nav.Link>
              <Nav.Link href="#home" style={{ textAlign: "center",color:"white"  }}>Para seu negócio</Nav.Link>
              <Nav.Link href="#link" style={{ textAlign: "center",color:"white"  }}>A Vexo</Nav.Link>
              <Nav.Link href="#home" style={{ textAlign: "center",color:"white"  }}>Duvidas</Nav.Link>
              <Nav.Link href="#link" style={{ textAlign: "center",color:"white"  }}>Blog</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;