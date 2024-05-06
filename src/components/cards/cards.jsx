import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import './cards.css'

const API_URL = 'https://ecommerce-json-jwt.onrender.com'

function Cards () {
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

  return (
    <Container>
      <div className='d-flex justify-content-between flex-wrap'>
        {products.map((product) => (
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
    </Container>
  )
}

export default Cards
