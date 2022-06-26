import './App.css';
import { Route, Routes } from 'react-router-dom';
import Details from './Pages/About/Details/Details';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import BreakFirst from './Pages/Home/Foods/BreakFirst/Breakfirst'
import Lunch from './Pages/Home/Foods/Lunch/Lunch'
import Dinner from './Pages/Home/Foods/Dinner/Dinner'
import Banner from './Pages/Home/Banner/Banner';
import NotFound from './Pages/NotFounf/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
        <Route path='/breakfirst' element={<BreakFirst></BreakFirst>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
