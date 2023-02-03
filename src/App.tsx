// import { Application } from './components/application/Application';
import './App.css';
import { Skills } from './components/skills/skills';

function App() {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={skills} />
    </div>
  );
}

export default App;
