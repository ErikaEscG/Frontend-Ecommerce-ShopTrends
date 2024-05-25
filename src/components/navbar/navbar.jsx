import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6'

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

  const handleCategorySelect = (categoryId) => {
    navigate(`/items/${categoryId}`)
  }
  const categoryMap = {
    Kids: '5fbc19a65a3f794d72471163',
    Zapatos: '5fbc19a65a3f794d72471164',
    // Todos con el ID
    Deportes: '3',
    Joyeria: '4',
    Bebés: '5',
    Belleza: '6',
    Electronica: '7',
    Automovilismo: '8',
    Juegos: '9',
    Jardin: '10',
    Musica: '11',
    Juguetes: '12',
    Libros: '13',
    Supermercado: '14'
  }

  return (
    <Navbar collapseOnSelect expand='lg' className='navegationText text-bg-danger'>
      <Container>
        {/* <Navbar.Toggle aria-controls='responsive-navbar-nav' /> */}
        <Navbar.Collapse id='responsive-navbar-nav' className='custom-margin'>
          <Nav className='me-auto'>
            <NavDropdown title={<span className='nav-dropdown-title'>Moda</span>} id='collapsible-nav-dropdown' className='custom-text-color'>

              <NavDropdown.Item onClick={() => handleCategorySelect(categoryMap.Kids)}>Niños</NavDropdown.Item>
              {/* Todos con el oncick */}
              <NavDropdown.Item href='#action/3.2'>Zapatos</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Deportes</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.4'>Joyeria</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.5'>Kids</NavDropdown.Item>
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
            <Nav.Link onClick={cartRoute} className='custom-text-color'> <FaCartShopping /></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavegationBar
