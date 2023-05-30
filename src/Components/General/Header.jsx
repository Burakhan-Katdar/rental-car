import "../../scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import katleryWhite from "../../img/katlery-white.png";
import katleryBlack from "../../img/katlery1.png";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  const userRole = "CarOwner";
  return <div className="HeaderSection">
    {userRole === 'Admin' && <AdminNav />}
    {userRole === 'Customer' && <CustomerNav />}
    {userRole === 'CarOwner' && <CarOwnerNav />}
    </div>;
}
function AdminNav() {
  return (
    <Navbar className="hs-admin" bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home"><img src={katleryWhite} alt="" /></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#features">İlan Ekle</Nav.Link>
        <Nav.Link href="#pricing">İlan Onayla</Nav.Link>
        <Nav.Link href="#pricing">Eklenen Mevcut İlanlar</Nav.Link>
        <Nav.Link className="logout" href="#home">Çıkış Yap</Nav.Link>
        
        
      </Nav>
    </Container>
  </Navbar>
  );
}

function CustomerNav() {
  return (
    <Navbar className="hs-customer" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={katleryWhite} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="logout" href="#home">Çıkış Yap</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            
          </Nav>
        </Container>
      </Navbar>
  );
}

function CarOwnerNav() {
    return (
        <Navbar className="hs-carowner" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={katleryWhite} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">İlan Ekle</Nav.Link>
            <Nav.Link href="#pricing">Eklenen Mevcut İlanlar</Nav.Link>
            <Nav.Link className="logout" href="#home">Çıkış Yap</Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>
      );
}
export default Header;
