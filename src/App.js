import './App.css';
import Landing from './views/landing';
import Counter from './views/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing lastletter='o' name='Gabriel'/> {/*property name calls (push to Landing.js) props.name*/}
        <Counter/> {/*llamo a Counter*/}
        </header>
    </div>
  );
}

export default App;
