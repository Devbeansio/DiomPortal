import React from 'react'

const useReportRequest = () => {
    const reportTypeOptions = [
        { label: "Booking Report", value: 0 },
        { label: "User Report", value: 1 },
        { label: "User Ananlysis Report", value: 2 },
        { label: "Cancelled Bookings", value: 3 },
      ];
  return (
    {
        reportTypeOptions
    }
  )
}

export default useReportRequest