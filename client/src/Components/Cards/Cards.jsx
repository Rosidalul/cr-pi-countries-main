import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Redux/actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import style from "./Cards.module.css"

const Cards = ({pagina, setPagina, porPagina, startIndex, endIndex, input, setInput}) => {
    const countriesAux = useSelector((state) => state.countriesAux);

    return (
        <div>
            <Paginado pagina={pagina} setPagina={setPagina} maximo={Math.ceil(countriesAux.length / porPagina)} input={input} setInput={setInput}/>
            <div className= {style.divCard}>
            {typeof countriesAux !== "string" ? countriesAux
                .slice(startIndex, endIndex)
                .map((country, index) => (
                    <Card
                        key={index}
                        id={country?.id}
                        name={country?.name}
                        flagImg={country?.flagImg}
                        continent={country?.continent}
                    />
                )): <h2>{countriesAux}</h2>}
                </div>
        </div>
    );
};

export default Cards;

