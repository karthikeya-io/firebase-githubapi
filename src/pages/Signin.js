import React, { useContext, useState } from 'react'
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from "reactstrap";

import { UserContext } from '../context/UserContext';
import {Navigate} from "react-router-dom"
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';


const Signin = () => {
  
  const context = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth();

const handleSignup = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential);
    const user = userCredential.user;
    context.setUser({email: user.email, uid: user.uid})
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    toast(errorMessage, {
      type: "error"
    })
    // ..
  });
}


  const handleSubmit = e => {
    e.preventDefault()
    handleSignup()
  }

  if (context.user?.uid) {
    return <Navigate replace to="/"></Navigate>
  }

  return (
    <Container className="text-center">
    <Row>
      <Col lg={6} className="offset-lg-3 mt-5">
        <Card>
          <Form onSubmit={handleSubmit}>
            <CardHeader className="">Signin here</CardHeader>
            <CardBody>
              <FormGroup row>
                <Label for="email" sm={3}>
                  Email
                </Label>
                <Col sm={9}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="provide your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" sm={3}>
                  Password
                </Label>
                <Col sm={9}>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="your password here"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button type="submit" block color="primary">
                Sign in
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Signin