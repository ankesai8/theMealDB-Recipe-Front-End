import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "../../Axios";
import { MYContext } from "../../context";
import { useHistory } from "react-router-dom";
import "./login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(MYContext);
  const history = useHistory();

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      return alert("please Enter Email ");
    }
    axios
      .post("/login", { email, password })
      .then(({ data }) => {
        setUser(data);
        localStorage.setItem("token", data.token);
        history.replace("/");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="login-container">
        <h1>theMealDB</h1>
        <h3>Login </h3>
        <div className="login-inner-container">
          <Container>
            <Row>
              <Col sm={12} md={12}>
                <Form onSubmit={handleLogin} autocomplete="off">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Your Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </Form.Group>

                  <Button variant="danger" type="submit">
                    Login
                  </Button>
                </Form>
              </Col>
             </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Login;
