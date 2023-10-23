import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, orderCountries, getCountriesByName, postActivity, getAux } from "../Redux/actions";
import validation from "./validation";
import { Link } from "react-router-dom";
import style from "./CreateAct.module.css";


const CreateAct = () => {
    const dispatch = useDispatch()
    
    
    const [activity, setActivity] = useState({
        name: "",
        difficulty: 0,
        season: "",
        duration: "",
        countries: []
    });
    
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])
    
    const [errors, setErrors] = useState({});
    
    
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        // Condicional de si existe un pais, guardarlo en mi array de countries
        if (property === 'countries') {
            
            if (activity.countries.length >= 10 || value === "") {
                return;
            }

            setActivity({
                ...activity,
                countries: activity.countries.includes(value)
                ? activity.countries
                : [...activity.countries, value]
            });
            setErrors(validation({ ...activity }))
            
            
        } else if (property === "difficulty") {
            setActivity({ ...activity, difficulty: parseInt(value) })
            setErrors(validation({ ...activity, difficulty: parseInt(value) }))
        }
        else {
            setActivity({ ...activity, [property]: value });
            setErrors(validation({ ...activity, [property]: value }))
        }
        
        
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(activity))
        window.alert("The activity was created succesfully")
    };
    
    const allCountries = useSelector((state) => state.allCountries);
    // const Activities = useSelector((state) => state.Activities);
    // console.log(Activities)
    
    return (
        <div className={style.div}>
            <Link to="/home"><button className={style.back_button}>⬅back</button></Link>

            <form>
                <br />
                <label className={style.form_label}>Name:</label>
                <input className={style.form_input} onChange={handleChange} value={activity?.name} type="text" name="name"></input>
                {errors.name1 ? <p className={style.error_message}>{errors.name1}</p> : <p className={style.error_message}>{errors.name2}</p>}
                
                <label className={style.form_label}>Difficulty:</label>
                <select className={style.form_select} value={activity?.difficulty} onChange={handleChange} type="number" name="difficulty">
                    <option disabled value="0">Selection a difficulty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                {errors.difficulty && <p className={style.error_message}>{errors.difficulty}</p>}

                <br />

                <label className={style.form_label}>Duration:</label>
                <input className={style.form_input} onChange={handleChange} type="text" name="duration"></input>
                {errors.duration && <p className={style.error_message}>{errors.duration}</p>}

                <br />

                <label className={style.form_label}>Season:</label>
                <select className={style.form_select} value={activity?.season} onChange={handleChange} type="text" name="season">
                    <option disabled value="">Selection a Season</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
                {errors.season && <p className={style.error_message}>{errors.season}</p>}

                <br />

                <label className={style.form_label}>Countries:</label>
                <select className={style.form_select} value="" onChange={handleChange} type="text" name='countries'>
                    <option disabled value="">Select Countries </option>
                    {
                        //* mapeo de los paises , para mostrar todas las opciones en el select
                        allCountries?.map((pais) => (
                            <option key={pais.id} value={pais.id}>
                                {pais.name}
                            </option>
                        ))
                    }
                </select>
                {errors.countries && <p className={style.error_message}>{errors.countries}</p>}
                {activity.countries.length >= 10 ? <h4>{activity.countries.length} countries were related(Max)</h4>
                    : <h5>{activity.countries.length} countries were related</h5>
                }

                <br />

                {errors.incomplete === "Please complete all the fields"
                    ? <h4 className={style.error_message}>{errors.incomplete}</h4>
                    : <h4 className={style.ready_message}>{errors.incomplete}</h4>}
                {errors.incomplete === "All ready!"
                    ? <button className={style.submit_button} type="submit" onClick={handleSubmit}>SUBMIT</button>
                    : <button className={style.submit_button_disabled} disabled>Can't Submit</button>}

            </form>
        </div>
    )
}

export default CreateAct;