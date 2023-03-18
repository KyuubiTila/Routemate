import { Home } from './components/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Admin } from './components/Admin';
import { PAgeNotFound } from './components/PAgeNotFound';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  const user = false;
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />}>
            <Route path="contact" element={<Contact />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="admin" element={user ? <Admin /> : <PAgeNotFound />} />
          <Route path="*" element={<PAgeNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
