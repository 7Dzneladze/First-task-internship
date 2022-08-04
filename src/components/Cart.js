import { useDispatch, useSelector } from "react-redux"
import { Button, Card, ListGroup } from "react-bootstrap"
import {removeFromCart} from '../redux/actions/productsActions'


const Cart = () => {
    const cart = useSelector((state) => state.allProducts.cart)
    const dispatch = useDispatch()
    const cartList = cart.map(
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
              <Button onClick={()=> dispatch(removeFromCart(item.id))}> Remove from cart </Button>
            </ListGroup>
      </Card>
        )})
    return(
        <div>
            {cartList}
        </div>

    )
}

export default Cart