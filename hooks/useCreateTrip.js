import React, { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { authApi } from '../api'


const useCreateTrip = () => {
    const { user } = useContext(DataContext)
  const [ isLoading, setIsLoading ] = useState()
  const handleCreatetrip = async (trip) => {
    try {
        // const { data } = await authApi.post("/api/v1/trip/create-trip", trip)
        console.log(user.token, "Trip")
    } catch (error) {
        console.log('error', error)

    }
  }
  return { handleCreatetrip, isLoading }
}

export default useCreateTrip