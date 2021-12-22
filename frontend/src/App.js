import './App.css';
import Products from './components/Products/Products';
import NewTask from './components/NewTask/NewTask';
import EditProduct from './components/EditProduct/EditProduct';

import Home from './pages/Home/Home';
import PostProduct from './pages/PostProduct/PostProduct';

import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";

function App() {
  return (
    
    <Router>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    <Routes>
      <Route path="/post" element={<PostProduct/>}/>
    </Routes>
    <Routes>
      <Route path="/edit" element={<EditProduct/>}/>
    </Routes>
  </Router>
    
    );
}

export default App;
