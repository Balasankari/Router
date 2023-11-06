
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Back from './Back';
import ContactUs from './components/ContactUs';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Sliders from './components/Sliders';
import Review from './components/Review';
import Footer from './components/Footer';
import Signup from './Signup';
import Example from './components/Example';




function App() {
  return (
   <BrowserRouter>
    <Home/>
   
    <Routes>
     <Route path="/" element={<Back/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/signup" element={<Signup/>}/>
     
    </Routes>
   </BrowserRouter>
  
  );
}

export default App;
