import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Registration from './Registration';
import {useSelector, useDispatch} from 'react-redux'
import { closePopUp, openPopUp } from '../redux/actions/registrationActions';


function Popup() {

  const popupState = useSelector((state)=> state.registration.popup)
  const dispatch = useDispatch()
  

  const handleClose = () => dispatch(closePopUp(false))
  //const handleShow = () => setShow(true);
  const handleShow = () => dispatch(openPopUp(true))

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{fontSize: "15px",}}>
        Register
      </Button>

      <Modal show={popupState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Registration </Modal.Title>
        </Modal.Header>
        <Modal.Body> <Registration/> </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup