import React from 'react';
import style from './landing.module.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className={style.container}>
        <div className={style.div}>
      <h3 className={style.title}>Bienvenidos</h3>

      <h1 className={style.heading} >Countries Web</h1>
      


      <Link to="/home">
        <button className={style.button}>Entrar</button>
      </Link>
      </div>
    </div>
  );
}

export default Landing;