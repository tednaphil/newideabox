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

    return (
        <form onSubmit = {event => submitIdeas(event)}>
            <input
                // make these inputs required - why doesn't adding this attribute work?
                //is it the prevent default?
                //commenting out the prevent default shows the requirement,
                //but an empty card is still created - need a conditional statement in submitIdeas?
                //using the onSubmit on the form 
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