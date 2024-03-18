import logo from '../../logo.svg';
import './App.css';
import Form from '../Form/Form';
import Idea from '../Ideas/Ideas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thee new <code>react.js</code> ideaBox App.
        </p>
      </header>
      <Form/>
        <div className="Cards">
          <Idea title='1'/>
          <Idea title='2'/>
          <Idea title='3'/>
        </div>
    </div>
  );
}

export default App;
