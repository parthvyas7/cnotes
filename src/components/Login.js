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
    const { email, password } = credentials

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const json = await response.json()
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('auth-token', json.authToken);
            props.showAlert("Logged in successfully!", "success")
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
                <h1 className='display-1'>Aur kese ho?</h1>
                <Form onSubmit={handleSubmit}>
                    <Col xs="auto">
                        <Form.Label htmlFor="email" visuallyHidden>
                            Email address
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text><i className="bi bi-person"></i></InputGroup.Text>
                            <Form.Control type="email" id="email" name="email" placeholder="Email" value={email} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Form.Label htmlFor="password" visuallyHidden>
                            Password
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Text><i className="bi bi-key"></i></InputGroup.Text>
                            <Form.Control type="password" id="password" name="password" placeholder="Password" value={password} onChange={onChange} />
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
                            Chal
                        </Button>
                    </Col>
                </Form>
            </Container>
        </>
    )
}

export default Login