import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header'
import Home from '../src/Pages/Home/Home/Home'
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer'
import PackageDetails from './Pages/PackageDetails/PackageDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/home' element={<Home/>}>Home</Route>
        <Route path='/package/:packageId' element={<PackageDetails></PackageDetails>}></Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/blogs' element={<Blogs/>}>Blogs</Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
