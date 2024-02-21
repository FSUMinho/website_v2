import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar';
import No_Page from './pages/no_page';
import Home from "./pages/home";

const App = () => {
  return (
     <>
        <NavBar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='*' element={<No_Page />} />
        </Routes>
     </>
  );
 };
 
 export default App;
