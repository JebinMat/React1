import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './components/home';
import AllUsers from './components/users';
import UserReview from './components/userreview';
import AllBooks from './components/books';
import BookDetails from './components/bookdetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/users" element={<AllUsers />} />
      <Route path="/review/:userId" element={<UserReview />} />
      <Route path="/genres" element={<AllBooks />} />
      <Route path="/book/:bookID" element={<BookDetails />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
