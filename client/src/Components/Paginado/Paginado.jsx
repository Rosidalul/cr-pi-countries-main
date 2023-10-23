import { useState } from "react";
import style from "./Paginado.module.css"


const Paginado = ({pagina, setPagina, maximo, input, setInput}) => {
        // console.log(pagina, setPagina, maximo)
        

        const nextPage= () =>  {
            setInput(parseInt(input) +1);
            setPagina(parseInt(pagina) + 1)
        };

        const prevPage = () => {
            setInput(parseInt(input) -1);
            setPagina(parseInt(pagina) -1)
        };

        const onKeyDown = (event) => {
            if(event.keyCode === 13) {
                setPagina(parseInt(event.target.value))
            }
            if(parseInt(event.target.value < 1 )||
             parseInt(event.target.value) > Math.ceil(maximo)||
              isNaN(parseInt(event.target.value)))
            {setPagina(1);
                setInput(1);
            }else {
                setPagina(parseInt(event.target.value))
            }
        };

        const onChange= (event) =>{
            setInput(event.target.value)
        }
    return (
        <div>
            <button className={style.button} disabled = {pagina === 1 || pagina < 1} onClick = {prevPage}>◀</button>
            <input className={style.input} onChange={(event)=> onChange(event)} onKeyDown={(event)=> onKeyDown(event)} name ="page" autoComplete = "off" value = {`${input} / ${maximo}`}></input>
            <button className={style.button} disabled = {pagina === Math.ceil(maximo || pagina > maximo)} onClick = {nextPage}>▶</button>
        </div>
    )
}

export default Paginado;