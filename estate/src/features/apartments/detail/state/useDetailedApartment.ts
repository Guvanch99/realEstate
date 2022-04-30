import constate from 'constate'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApartmentBookQuery } from '../../queries'

const useDetailedApartment = () => {
  const [isModal, setModal] = useState<boolean>(false)
  const [isModalSuccess, setModalSuccess] = useState(false)
  const [totalPrice, setTotalPrice] = useState<string>('')
  const navigate = useNavigate()
  const handleSuccessClose = () => {
    setModalSuccess(false)
    navigate('/apartments')
  }
  return {
    totalPrice,
    setTotalPrice,
    isModal,
    setModal,
    isModalSuccess,
    setModalSuccess,
    handleSuccessClose,
    bookApartmentQuery: useApartmentBookQuery()
  }
}

export const [DetailedApartmentProvider, useApartmentContext] = constate(useDetailedApartment)
