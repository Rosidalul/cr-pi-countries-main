import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName, getCountries, getAux } from "../Redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
    const dispatch = useDispatch()

    const handlerBack = () => {
        dispatch(getAux())
    };

    const onSearch = (name) => {
        //onSearch que dispacha la action que pedira al back un pais por su nombre
        dispatch(getCountriesByName(name))
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }
    const [name, setName] = useState("")
    return (<div>
        <button className={style.button} onClick={handlerBack}>🔄</button>
        <input className={style.input} placeholder="Search" type="search" value={name} onChange={handleChange}></input>
        <button className={style.button} onClick={() => { onSearch(name) }}>🔎</button>

    </div>)
}

export default SearchBar;