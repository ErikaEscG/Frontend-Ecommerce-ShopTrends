import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './searcherBar.css'

function SearcherBar () {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' className='text-bg-danger'>
        <Container className='searcherstyles'>
          <Form inline className=' col-xxl'>
            <Row>
              <Col className='col-4'>
                <h4>ShopTrends</h4>
              </Col>

              <Col className='col-3'>
                <Form.Control
                  type='text'
                  placeholder='Busca un producto'
                  className=' mr-sm-2'
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
