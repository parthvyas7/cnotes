import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/");

        }
        else {
            alert("Invalid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}

            <div>
                <Form onSubmit={handleSubmit}>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                Email address
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text><i className="bi bi-person"></i></InputGroup.Text>
                                <Form.Control id="inlineFormInputGroup" placeholder="Email" value={credentials.email} onChange={onChange} />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                Password
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text><i className="bi bi-key"></i></InputGroup.Text>
                                <Form.Control id="inlineFormInputGroup" placeholder="Password" value={credentials.password} onChange={onChange} />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Form.Check
                                type="checkbox"
                                id="autoSizingCheck"
                                className="mb-2"
                                label="Remember me"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                Bheju?
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default Login