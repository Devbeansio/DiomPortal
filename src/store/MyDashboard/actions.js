import {
    GET_BOOKINGS_TODAY,
    GET_BOOKINGS_TODAY_SUCCESS,
    GET_BOOKINGS_TODAY_FAIL,
    GET_CHECKEDIN_CUSTOMER_TODAY,
    GET_CHECKEDIN_CUSTOMER_TODAY_SUCCESS,
    GET_CHECKEDIN_CUSTOMER_TODAY_FAIL
} from "./actionTypes";

export const getBookingsToday = () => ({
    type: GET_BOOKINGS_TODAY,
  })
  
  export const getBookingsTodaySuccess = bookingstoday => ({
    type: GET_BOOKINGS_TODAY_SUCCESS,
    payload: bookingstoday,
  })
  
  export const getBookingsTodayFail = error => ({
    type: GET_BOOKINGS_TODAY_FAIL,
    payload: error,
})
  


export const getCheckinCustomerToday = () => ({
    type: GET_CHECKEDIN_CUSTOMER_TODAY,
  })
  
  export const getCheckinCustomerTodaySuccess = checkincustomertoday => ({
    type: GET_CHECKEDIN_CUSTOMER_TODAY_SUCCESS,
    payload: checkincustomertoday,
  })
  
  export const getCheckinCustomerTodayFail = error => ({
    type: GET_CHECKEDIN_CUSTOMER_TODAY_FAIL,
    payload: error,
  })