import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"


const Nav = () => {


    return (
        <nav>

            <SearchBar />

            <Link to="/newActivity"> <button className={style.btn}>Create Activity</button> </Link>
            <Link to="/activities"> <button className={style.btn}>allActivities</button> </Link>

        </nav>)

}


export default Nav;