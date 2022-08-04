import { Navbar } from "react-bootstrap"
import {Link} from 'react-router-dom'
import Popup from './Popup'
const Header = () => {
    return(
       <Navbar bg="primary" variant="dark">
        <Link to="/cart" style={{color: "white", textDecoration: "none", padding: "10px", fontSize: "20px"}}> Cart </Link>
        <Link to="/" style={{color: "white", textDecoration: "none", padding: "10px", fontSize: "20px"}}> Home </Link>
        <Popup />
       </Navbar>
    )
}

export default Header