import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllBooks from './pages/AllBooks';
import BookDetail from './pages/BookDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';
import UpdateBook from './pages/UpdateBook';

function App() {
  return(
    <Layout>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Navigate to='/books' replace />} />
        <Route path='/books' element={<AllBooks />}/>
        <Route path='/books/:bookId' element={<BookDetail />} />
        <Route path='/update/:bookId' element={<BookDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-book' element={<AddBook />} />
      </Routes>
    </Layout>
  );
};

export default App;
