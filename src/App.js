import logo from './logo2.svg';
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
