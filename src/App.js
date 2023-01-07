import './App.css';
import Home from './home';
import Introduce from './introduce';
import Skill from './skill';
import Project from './project';

function App() {

  return (
    <>
      <div>
        <Home />
      </div>
      <div>
        <Introduce />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <Project />
      </div>
    </>
  );
}

export default App;
