import { useState } from 'react';
import './App.css';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';

function App() {
  const defaultIdeas = [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' }
  ];
  const [ideas, setIdeas] = useState(defaultIdeas);

  return (
    <>
      <main className='App'>
        <h1>IdeaBox</h1>
        <p>Heyyy</p>
      </main>
    </>
  );
}

export default App;