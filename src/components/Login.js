import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

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
            navigate("/");
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
            <Container>
                <h1 className='display-1'>Aur bhai kese ho?</h1>
                <Form onSubmit={handleSubmit}>
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
                </Form>
            </Container>
        </>
    )
}

export default Login