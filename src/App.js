import logo from './logo.svg';
import './App.css';
import { Route,Link } from 'react-router-dom';
import './Components/Home'
import Home from './Components/Home';
import City from './Components/City';
import Courses from './Components/Courses';




function App() {
  return (
    <div >
     
     <ul>
       
     <li> <Link to="/">Home</Link></li>
     <li>  <Link to="/City">City</Link></li>
     <li>  <Link to="/Courses">My Courses</Link></li>
       
     </ul>
   <Route path ="/" component={Home}></Route>
   <Route path ="/City" component={City}></Route>
   <Route path ="/Courses" component={Courses}></Route>
  
     
    </div>
  );
}

export default App;
