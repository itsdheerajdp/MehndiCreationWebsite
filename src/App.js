import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import NoPage from './Pages/NoPage';
import ContactPage from './Pages/ContactPage';
import './App.css';
import HomePage from './Pages/HomePage';
import ServicePage from './Pages/ServicePage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<HomePage></HomePage>}/>
        <Route path='/blog' element={<BlogPage></BlogPage>}/>
        <Route path='/aboutus' element={<AboutPage></AboutPage>}/>
        <Route path='/contactus' element={<ContactPage></ContactPage>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='*' element={<NoPage></NoPage>}/>
        </Routes>
      </Router>
     
    </div>
  );
  
}

export default App;
