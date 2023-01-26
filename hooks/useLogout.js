import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React from 'react'

const useLogout = () => {
  const router = useRouter()
  const handleLogout = () => {
    Cookies.remove('user_data')
    router.push('/admin')
  }
  return { handleLogout }
}

export default useLogout