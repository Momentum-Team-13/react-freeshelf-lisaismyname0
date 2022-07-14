import logo from './logo.svg';
import './App.css';
import InfoButton from './bookData'
import BookInfo from './bookData'

function App() {
  return (
    <div>
      <div id= "header"> <h1>Book List</h1></div>
      <div id = "container">
        <div id = "books">
          <div> Book1
          <InfoButton/>
          <BookInfo/> 
          </div>
          <div> Book2</div>
          <InfoButton/>
          <div> Book3</div>
          <div> Book4</div>
        </div>
      </div>
    </div>
  );
}

export default App;
