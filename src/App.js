import './App.css';
import Header from './components/Header';
import ProjectContainer from './components/ProjectContainer';
import projectData from './data.js'

function App() {
  
  return (
    <div className="App">
      <Header />
      <ProjectContainer projectData={projectData}/>
    </div>
  );
}

export default App;
