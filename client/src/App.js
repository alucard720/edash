import './App.css';
import SignUp from './component/SignUp';
import Footer from './component/Footer';
import Nav from './component/Nav';
import Login from './component/Login'
import AddProduct from './component/AddProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './component/PrivateComponent';
import ProductList from './component/ProductList';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>

    <Routes>
    <Route element={<PrivateComponent/>}>
    <Route path='/' element={<ProductList />}/>
    <Route path='/add' element={<AddProduct/>}/>
    <Route path='/update' element={<h1>Update Product</h1>}/>
    <Route path='/logout' element={<h1>LogOut</h1>}/>
    <Route path='/profile' element={<h1>Profile component</h1>}/>     
     </Route>
     <Route path='/login' element={<Login/>}/>
     <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
