import { Container } from 'react-bootstrap';
import NoteSection from './NoteSection'

const Home = (props) => {
    const { showAlert } = props;
    return (
        <Container>
            <NoteSection showAlert={showAlert} />
        </Container>
    )
}

export default Home;