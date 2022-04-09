import { call, put, takeEvery } from "redux-saga/effects"
import {
    GET_BOOKINGS_TODAY,
GET_BOOKINGS_TODAY_SUCCESS,
GET_BOOKINGS_TODAY_FAIL,
GET_CHECKEDIN_CUSTOMER_TODAY,
GET_CHECKEDIN_CUSTOMER_SUCCESS,
GET_CHECKEDIN_CUSTOMER_FAIL,
} from "./actionTypes"

import {
  
getBookingsTodaySuccess,
getBookingsTodayFail,
getCheckinCustomerTodaySuccess,
getCheckinCustomerTodayFail,
} from "./actions"

//Include Both Helper File with needed methods
import {
    getBookingsToday,
    getCheckinCustomerToday

  } from "../../helpers/fackBackend_Helper"