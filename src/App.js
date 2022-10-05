import BooksForm from './components/BooksForm';
import BooksList from './components/BooksList';

function App() {

  return (
    <div className="App">
      <h1>Books App</h1>

      <BooksForm/>
      <BooksList/>
    </div>
  );
}

export default App;