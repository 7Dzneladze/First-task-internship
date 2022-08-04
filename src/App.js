import Main from "./components/Main"
import Container from "react-bootstrap/esm/Container"
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {

  return (
    <div>
      <Header/>
      <Container style={{display: 'flex', justifyContent: 'center'}}>
        <Routes>
            <Route path="*" element={<Main/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Container>
    </div>
  )
}

export default App;
