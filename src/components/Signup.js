import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();
    const { name, email, password, cpassword } = credentials

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('auth-token', json.authToken);
            props.showAlert("Account created successfully!", "success")
            navigate("/");
        }
        else {
            props.showAlert("Invalid details!", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Container>
                <h1 className='display-1'>Naya banda</h1>
                <Form onSubmit={handleSubmit}>
                    <Col xs="auto">
                        <Form.Label htmlFor="name" visuallyHidden>
                            Name
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text><i className="bi bi-person-badge"></i></InputGroup.Text>
                            <Form.Control type="text" placeholder="Name" value={name} onChange={onChange} name="name" id="name" required />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="email" visuallyHidden>
                            Email address
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text><i className="bi bi-person"></i></InputGroup.Text>
                            <Form.Control type="email" placeholder="Email" value={email} onChange={onChange} name="email" id="email" required />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="password" visuallyHidden>
                            Password
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text><i className="bi bi-key"></i></InputGroup.Text>
                            <Form.Control placeholder="Password" type="password" value={password} onChange={onChange} name="password" id="password" minLength={5} required />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="cpassword" visuallyHidden>
                            Confirm Password
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text><i className="bi bi-key-fill"></i></InputGroup.Text>
                            <Form.Control placeholder="Confirm Password" type="password" value={cpassword} onChange={onChange} name="cpassword" id="cpassword" minLength={5} required />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2" disabled={name.length < 5 || email.length < 5 || password.length < 5 || cpassword.length < 5 || password !== cpassword}>
                            Signup karu?
                        </Button>
                    </Col>
                </Form>
            </Container>
        </>
    )
}

export default Signup