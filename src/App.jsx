import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar';
import Footer from './components/footer'
import No_Page from './pages/no_page';
import Home from "./pages/home";

function App() {
   return (
     <>
        <NavBar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='*' element={<No_Page />} />
        </Routes>
        <Footer />
     </>
  );
 }
 
 export default App;
