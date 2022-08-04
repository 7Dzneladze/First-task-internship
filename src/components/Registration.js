import { useEffect, useState } from "react"
import {useDispatch} from "react-redux"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { emailAction, firstnameAction, lastnameAcion,} from "../redux/actions/registrationActions"
import { closePopUp } from "../redux/actions/registrationActions"


function Registration() {
  const dispatch = useDispatch() 
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [submitCondition, setSubmitCondition] = useState(true)

  const handleClose = () => dispatch(closePopUp(false))

 
  const errors = {
    userNameError: "you need at least 6 latters",
    lastNameError: "you need at least 6 latters",
    emailError: "enter email like ...@gmail.com",
  }

  let validRegex = /^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/

  const submitButton = (e) => {
    e.preventDefault()
    if(firstName.length >= 5 && lastName.length > 5 && email.match(validRegex)) {
      dispatch(firstnameAction(firstName))
      dispatch(lastnameAcion(lastName))
      dispatch(emailAction(email))
    } 
    
  }

  useEffect( () => {
    if(firstName.length >= 5 && lastName.length > 5  && email.match(validRegex)){
    setSubmitCondition(false)
  
  }}, [submitButton])
  
  
   
  return (
    <Form onSubmit={submitButton}>
      <Form.Control type="text" 
      placeholder="name"
      onChange={(event)=> setFirstName(event.target.value)}
      style={{margin: "10px 0"}}
      />
      {(firstName === "") ? "" : (firstName.length <= 5) ? errors.userNameError : '' }

      <Form.Control type="text" 
      placeholder="Lastname"
      onChange={(event)=> setLastname(event.target.value)}
      style={{margin: "10px 0"}}
      />
      {(lastName === "") ? "" : (lastName.length < 5) ? errors.lastNameError : ''}

      <Form.Control type="email" 
      placeholder="email"
      onChange={(event)=> setEmail(event.target.value)}
      style={{margin: "10px 0"}}
      />
      { (email === "")  ? "" : (!email.match(validRegex) ? errors.emailError : '')}
      

      <Button type="submit" disabled={submitCondition} onClick={handleClose} > Submit </Button> 
    </Form>
  );
}

export default Registration