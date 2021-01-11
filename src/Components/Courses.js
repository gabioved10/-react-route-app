import { Route,Link } from 'react-router-dom';


function Courses({match}){


    return <div>

    <ul>    
       
    <li> <Link to={`${match.url}/Technology`}>Technolegy</Link></li>
     <li>  <Link to="/Courses/Business">Business</Link></li>
     <li>  <Link to="/Courses/ecoo">My Ecoo</Link></li>
       
         
       </ul>

        <Route exect path ={`${match.path}/Technology`} render={() => (<div> This is technolgy</div>)}/>
        <Route exect path ="/Courses/Business" component={() => (<div> This is Business</div>)}/>
        <Route exect path ="/Courses/ecoo" component={() => (<div> This is ecoo</div>)}/>
    </div>
}

export default Courses;