
import {Link} from 'react-router-dom';






const Header = (props) => {
    return(
        <div className="header">
       <h1> Home</h1>
        <Link to="/"> Home </Link>
   <Link to="/bookcase" className="bookLink"> Bookcase</Link>
     
 </div>
    )
}

export default Header;


