import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './searcherBar.css'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'

import { TextInputContext } from '../../context/contex'

function SearcherBar () {
  const { text, setText } = useContext(TextInputContext)

  const changeText = (e) => {
    console.log('comparación onchange ', text)
    setText(e.target.value)
  }

  const navigate = useNavigate()
  const indexRoute = () => {
    navigate('/')
  }

  return (
    <>
      <Navbar collapseOnSelect expand='lg' className='text-bg-danger'>
        <Container className='searcherstyles'>
          <Form inline className=' col-xxl'>
            <Row>
              <Col className='col-4'>
                <href className='h3' onClick={indexRoute}>ShopTrends</href>
              </Col>

              <Col className='col-3'>
                <Form.Control
                  type='text'
                  placeholder='Busca un producto'
                  className=' mr-sm-2'
                  onChange={changeText}
                  value={text}
                />
              </Col>
              <Col className='col-4'>
                <Button type='submit'>Buscar</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>

    </>
  )
}

export default SearcherBar
