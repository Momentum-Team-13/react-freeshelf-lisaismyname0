import logo from './logo.svg';
import './App.css';
import InfoCard from './bookData'

function App() {
  return (
    <div>
      <div id= "header"> <h1>Book List</h1></div>
      <div id = "container">
          <div>
          <InfoCard/> 
          </div>
        </div>
      </div>
  );
}

export default App;
