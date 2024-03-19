import './Ideas.css';
import Card from '../Card/Card.js';

function Ideas({ ideas }) {
    // console.log(arguments)
    const ideaCards = ideas.map(idea => {
        return (
            <Card title={idea.title}
            description={idea.description}
            // id={idea.id}
            key={idea.id}
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