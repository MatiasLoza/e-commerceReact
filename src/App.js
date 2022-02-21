import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemList from './components/ItemList';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
      <ItemList></ItemList>
      </ItemListContainer>
    </div>
  );
}

export default App;
