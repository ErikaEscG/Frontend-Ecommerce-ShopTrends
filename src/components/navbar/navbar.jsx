import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

function NavegationBar () {
  const navigate = useNavigate()
  const loginRoute = () => {
    navigate('/login')
  }
  const signinRoute = () => {
    navigate('/signin')
  }
  const cartRoute = () => {
    navigate('/cart')
  }

  return (
    <Navbar collapseOnSelect expand='lg' className='navegationText text-bg-danger'>
      <Container>
        {/* <Navbar.Toggle aria-controls='responsive-navbar-nav' /> */}
        <Navbar.Collapse id='responsive-navbar-nav' className='custom-margin'>
          <Nav className='me-auto'>
            <NavDropdown title='Moda' id='collapsible-nav-dropdown' className='custom-text-color'>
              <NavDropdown.Item href='#action/3.1'>Niños</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Zapatos</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Deportes</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Joyeria</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.5'>Bebés</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.6'>Belleza</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href='Electronica' className='custom-text-color'>Electronica</Nav.Link>
            <Nav.Link href='Automovilismo' className='custom-text-color'>Automovilismo</Nav.Link>
            <Nav.Link href='Juegos' className='custom-text-color'>Juegos</Nav.Link>
            <Nav.Link href='Jardin' className='custom-text-color'>Jardin</Nav.Link>
            <Nav.Link href='Musica' className='custom-text-color'>Musica</Nav.Link>
            <Nav.Link href='Juguetes' className='custom-text-color'>Juguetes</Nav.Link>
            <Nav.Link href='Libros' className='custom-text-color'>Libros</Nav.Link>
            <Nav.Link href='Supermercado' className='custom-text-color'>Supermercado</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link onClick={loginRoute} className='custom-text-color'>Crea tu cuenta</Nav.Link>
            <Nav.Link eventKey={2} className='custom-text-color' onClick={signinRoute}> Ingresar </Nav.Link>
            <Nav.Link onClick={cartRoute} className='custom-text-color'>Carrito</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavegationBar
