import { useState } from 'react';
import './App.css';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';

function App() {
  const [ideas, setIdeas] = useState([]);

  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }
  function deleteIdea(id) {
    const filteredIdeas = ideas.filter(idea => idea.id !== id);
    setIdeas(filteredIdeas)
  }

  return (
    <>
      <main className='App'>
        <h1>IdeaBox</h1>
        <Form addIdea={addIdea}/>
        {!ideas.length && <h2>Add some new ideas!</h2>}
        <Ideas ideas={ideas} deleteIdea={deleteIdea} />
      </main>
    </>
  );
}

export default App;