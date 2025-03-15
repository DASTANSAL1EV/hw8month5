import './style.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import CartPage from './pages/CartPage/CartPage';
import Header from './components/Header/Header';
import DetailPage from './pages/DetailPage/DetailPage';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { getCategories } from './redux/reducer';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())
  }, [dispatch])
  return (
    <BrowserRouter>
      <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/category/:category' element={<CategoryPage/>} />
          <Route path='/product/:id' element={<DetailPage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
