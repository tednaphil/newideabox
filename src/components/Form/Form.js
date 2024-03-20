import { useState } from 'react';
import './Form.css';

function Form({ addIdea }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function submitIdeas(event) {
        event.preventDefault();
        const newIdea = {
            id: Date.now(),
            title,
            description
        }
        addIdea(newIdea)
        clearInput()
    }

    function clearInput() {
        setTitle('');
        setDescription('');
    }

    // add labels to form inputs
    return (
        <form onSubmit = {event => submitIdeas(event)}>
            <input
                required
                type='text'
                placeholder='Title'
                name='title'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            
            <input
                required
                type='text'
                placeholder='Description'
                name='description'
                value={description}
                onChange={event => setDescription(event.target.value)}
            />

            <button
            alt='delete icon'>Submit 💾</button>
            {/* this event is triggering the re-rendering after the state change */}
        </form>
    )

};

export default Form;