import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import './cards.css'
import { TextInputContext } from '../../context/searchContex'
import { useCategory } from '../../context/navbarContext'

const API_URL = 'https://ecommerce-json-jwt.onrender.com'

function Cards () {
  const { text } = useContext(TextInputContext)
  const { selectedCategory } = useCategory()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/items`)
        setProducts(response.data)
      } catch (error) {
        console.error('Error al obtener productos:', error)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products.filter((product) => product.product_name.toLowerCase().includes(text.toLowerCase()))

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const scrollToDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }
  return (
    <Container>
      <div className='d-flex justify-content-between flex-wrap'>
        {filteredProducts.map((product) => (
          <Card key={product.id} style={{ width: '300px', marginBottom: '20px' }}>
            <Card.Img className='image align-self-center' variant='top' src={product.image} alt={product.product_name} />
            <Card.Body className='d-flex align-content-between flex-wrap justify-content-center'>
              <Card.Title>{product.product_name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div className='d-flex justify-content-center'>
                <Button variant='danger'>Agregar al carrito</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className='fb-location-top' onClick={scrollToTop}>
        <div className='fb'>
          <FaArrowUp className='arrow' />
        </div>
      </div>
      <div className='fb-location' onClick={scrollToDown}>
        <div className='fb'>
          <FaArrowDown className='arrow' />
        </div>
      </div>
    </Container>
  )
}

export default Cards
