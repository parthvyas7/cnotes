import Card from 'react-bootstrap/Card';
import { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

function Notes(props) {
    const context = useContext(noteContext);
    const { note, updateNote } = props;
    const { deleteNote } = context;
    return (
        <div className="col-md-3">
            <Card className="my-3">
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>
                        {note.description}
                    </Card.Text>
                    <i className="bi bi-pencil-square" onClick={() => { updateNote(note) }} />
                    <i className="bi bi-trash" onClick={() => { deleteNote(note._id) }} />
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{note.tag}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Notes