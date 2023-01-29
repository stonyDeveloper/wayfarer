import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React from 'react'

const useLogout = () => {
  const router = useRouter()
  const handleLogout = () => {
    Cookies.remove('user_data')
    Cookies.remove('available_buses')
    router.push('/admin')
  }
  return { handleLogout }
}

export default useLogout