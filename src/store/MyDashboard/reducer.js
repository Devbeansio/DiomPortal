import {
    GET_BOOKINGS_TODAY,
    GET_BOOKINGS_TODAY_SUCCESS,
    GET_BOOKINGS_TODAY_FAIL,
    GET_CHECKEDIN_CUSTOMER_TODAY,
    GET_CHECKEDIN_CUSTOMER_TODAY_SUCCESS,
    GET_CHECKEDIN_CUSTOMER_TODAY_FAIL
} from "./actionTypes";

const INIT_STATE = {
    bookingstoday: [],
    checkincustomertoday: [],
    error: {},
  
}
  

const MyDashboard = (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_CHECKEDIN_CUSTOMER_TODAY_SUCCESS:
            return {
              ...state,
              checkincustomertoday: action.payload,
            }
      
        case GET_CHECKEDIN_CUSTOMER_TODAY_FAIL:
            return {
              ...state,
              error: action.payload,
            }
      
          case GET_BOOKINGS_TODAY_SUCCESS:
            return {
              ...state,
              bookingstoday: action.payload,
            }
      
        case GET_BOOKINGS_TODAY_FAIL:
            return {
              ...state,
              error: action.payload,
            }
      
          default:
            return state

    }
}

    export default MyDashboard