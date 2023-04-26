import './App.css';
import SignUp from './SignUp';
import Footer from './component/Footer';
import Nav from './component/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>

    <Routes>
    <Route path='/' element={<h1>Product component</h1>}/>
    <Route path='/add' element={<h1> add Product</h1>}/>
    <Route path='/update' element={<h1>Update Product</h1>}/>
    <Route path='/logout' element={<h1>LogOut</h1>}/>
    <Route path='/profile' element={<h1>Profile component</h1>}/>
    <Route path='/SignUp' element={<SignUp/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
