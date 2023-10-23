import axios from "axios";
import {GET_COUNTRIES, GET_BY_NAME, GET_BY_ID, ORDER, GET_AUX, FILTER, POST_ACTIVITY, GET_ACTIVITY, ORDER_PUPULATION, FILTER_BY_ACTIVITY, GET_2_ACT} from "./action-types"



export const getCountries = ()=> {

    return async(dispatch) => {
         const {data} = await axios.get('http://localhost:3001/countries')

         // console.log(data)
         
           return dispatch({
              type: GET_COUNTRIES,
              payload: data,
           });
}
};


export const getCountriesByName = (name) => {

   return async(dispatch) => {
      try {
         const {data} = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
         
         return dispatch({type: GET_BY_NAME, payload:data});
      }catch(error) {
         console.log(error.message);
      }
   }

};

export const getById = (id) => {

   return async(dispatch) => {
      try{
         const {data} = await axios.get(`http://localhost:3001/countries/${id}`);
         return dispatch({type: GET_BY_ID, payload:data});
      } catch(error) {
         console.log(error.message);
      }
   }
};

export const orderCountries = (value) => {
   return (dispatch) => {
      return dispatch({type: ORDER, payload: value});
   }
};

export const getAux = () => {
   return (dispatch) => {
      return dispatch({type: GET_AUX})
   }
};

export const  filterCountries = (value) => {

   return (dispatch) => {
      dispatch({type: FILTER, payload: value});
   }

}

export const postActivity = (activity) => {
   return async (dispatch) => {
      try{
         const {data} = await axios.post("http://localhost:3001/activities", activity)
         // console.log(data)
         return dispatch({type: POST_ACTIVITY, payload: data});
      } catch(error) {
         console.log(error.message);
      }
   }
};

export const getActivity = ()=> {

   return async(dispatch) => {
      try{
         const {data} = await axios.get("http://localhost:3001/activities");

         return dispatch({type: GET_ACTIVITY, payload: data})  
      }catch(error) {
         console.log(error.message);
      }
   }
};

export const orderPupulation = (value) => {
   return (dispatch) => {
      return dispatch({type: ORDER_PUPULATION, payload: value});
   }
};


export const filterByActivity = (value) => {
   return (dispatch) => {
     dispatch({type: FILTER_BY_ACTIVITY, payload: value}); 
   }
};