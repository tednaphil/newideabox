import './Ideas.css';
import Card from '../Card/Card.js';

function Ideas({ ideas, deleteIdea }) {
    // console.log(arguments)
    const ideaCards = ideas.map(idea => {
        return (
            <Card title={idea.title}
            description={idea.description}
            id={idea.id}
            key={idea.id}
            deleteIdea={deleteIdea}
            />
        )
    });

    return (
    <div className='ideas'>
        {ideaCards}
    </div>
    )
}

export default Ideas;