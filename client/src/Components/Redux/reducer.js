import { all } from "axios";
import { GET_COUNTRIES, GET_BY_NAME, GET_BY_ID, ORDER, GET_AUX, FILTER, POST_ACTIVITY, GET_ACTIVITY, ORDER_PUPULATION, FILTER_BY_ACTIVITY } from "./action-types"


let initialState = {
    allCountries: [],
    countriesAux: [],
    countryDetail: {},
    Activities: [],
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state, allCountries: action.payload,
                countriesAux: action.payload
            };

        case GET_BY_NAME:
            return { ...state, countriesAux: action.payload };

        case GET_BY_ID:
            return { ...state, countryDetail: action.payload };

        case ORDER:
            let now = [...state.countriesAux]
            const OrderNow = now.sort((a, b) => a.name.localeCompare(b.name))
            const disorder = () => Math.random() - 0.5;

            return {
                ...state,
                countriesAux:
                    action.payload === "A-Z"
                        ? OrderNow
                        : action.payload === "Z-A" ? OrderNow.reverse()
                            : now.sort(disorder)
            };

        case GET_AUX:
            return { ...state, countriesAux: state.allCountries };

        case FILTER:
            let copia = [...state.allCountries];
            const filtrado = copia.filter((country) => country.continent === action.payload);

            return {
                ...state,
                countriesAux:
                    action.payload !== "Filtern't"
                        ? filtrado
                        : state.allCountries
            }

        case POST_ACTIVITY:
            return { ...state, Activities: [...state.Activities, action.payload] };

        case GET_ACTIVITY:
            return { ...state, Activities: action.payload };

        case ORDER_PUPULATION:
            let noww = [...state.countriesAux]
            const OrderPopulation = noww.sort((a, b) => a.population - b.population);
            const disorderPopulation = () => Math.random() - 0.5;

            return {
                ...state,
                countriesAux:
                    action.payload === "min-max"
                        ? OrderPopulation
                        : action.payload === "max-min" ? OrderPopulation.reverse()
                            : noww.sort(disorderPopulation)
            };

        case FILTER_BY_ACTIVITY:
            const countryActivities = state.allCountries.filter((pais) => {
                return pais.Activities.some((actividad) => actividad.season === action.payload);
              });
              return {
                ...state,
                countriesAux: countryActivities.length
                ?countryActivities
                :`There are no countries with activities to do in ${action.payload}`
              }

        default: return { ...state } //caso de default, devolver la copia del estado.
    }
}
// console.log(initialState.countriesAux);

export default reducer;