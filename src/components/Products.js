import React,{useEffect, useState} from "react"
import {Card, Button, Container, Form} from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup'
import {useSelector, useDispatch} from "react-redux"
import {addToCart, sortProducts} from '../redux/actions/productsActions'
import {Pagination} from 'react-bootstrap'
import { setCurrentPage } from "../redux/actions/paginationActions"



const Products = (props) => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()
  
    const curretPage = useSelector((state)=> state.pages.currentPage)
    const perPage = useSelector((state)=> state.pages.perPage)

    const [query, setQuery] = useState('')
    
    

let active = curretPage
let items = [];
for (let number = 1; number <= perPage; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} onClick={()=> dispatch(setCurrentPage(number))}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div>
    <Pagination> {items} </Pagination>
  </div>
)

const dispatchProducts = () => {
  dispatch(sortProducts(products))
}




    const searchList = products.filter((item) => item.name.toLowerCase().includes(query))
    .map(
      (item) => { return (
        <Card key={item.id} style={{ width: '18rem', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: "15px" }}>
          <Card.Img variant="top" style={{width: '30%'}} src={item.image_url} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{item.tagline}</ListGroup.Item>
            <ListGroup.Item>First Brewed: {item.first_brewed}</ListGroup.Item>
            <ListGroup.Item>IBU: {item.ibu}</ListGroup.Item>
            <Form.Check type="checkbox" onClick={()=> dispatch(addToCart(item.id))} /> 
            {'Add to cart'}
          </ListGroup>
    </Card>
      )}
    )   

    return(
        <Container style={{alignItems:"center", justifyContent: 'center'}}>
          <Form>
            <Form.Control style={{margin: "15px", width: '300px'}} placeholder="Search" onChange={(e)=> setQuery(e.target.value)}/>
          </Form>
          <Button onClick={ () => dispatchProducts()}> Sort alphabeticly </Button>
          {searchList}
          {paginationBasic}
        </Container>
    )
}

export default Products