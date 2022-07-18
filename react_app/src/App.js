import './App.css';
import InfoCard from './bookData'
import BOOKS from './Books'

function App() {
  return (
    <div>
      <div id= "header"> <h1>React Freeshelf Book List</h1></div>
      <div id = "container">
      {BOOKS.map((book, index) => (
        <InfoCard book = {book} key = {index}/>
      ))} 
        </div>
      </div>
  );
}

export default App;
