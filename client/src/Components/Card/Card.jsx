import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getById } from "../Redux/actions";
import style from "./card.module.css"

const Card = ({id, flagImg, name, continent})=> {



return(
    <div className={style.div}>
        <Link to ={`/detail/${id}`}>
        <img className={style.img} src= {flagImg}/></Link>
        <h2 >{name}</h2>

        <h3 >Continent: {continent}</h3>
    </div>
)
}

export default Card;