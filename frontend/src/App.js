import './App.css';


import HomePage from './pages/Home/HomePage';
import PostProductPage from './pages/PostProduct/PostProductPage';
import EditProductPage from './pages/EditProduct/EditProductPage';
import NavBar from './components/NavBar/NavBar'

import { BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
 
  <Router>
     <NavBar/> 
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/post" element={<PostProductPage/>}/>
      <Route path="/edit" element={<EditProductPage/>}/>
    </Routes>
  </Router>
    
    );
}

export default App;
