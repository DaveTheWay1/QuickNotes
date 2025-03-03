import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service';

export default function NavBar({user, SetUser}){

    function handleLogOut() {
        userService.logOut();

        SetUser(null);
    }

    return(
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp;&nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link to="/notes">Notes</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}