import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import NoteSection from './NoteSection'


const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <NoteSection />
        </Container>
    )
}

export default Home;