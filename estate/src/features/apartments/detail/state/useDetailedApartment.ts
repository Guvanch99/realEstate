import constate from 'constate'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useDetailedApartment = () => {
  const [isModal, setModal] = useState<boolean>(false)
  const [isModalSuccess, setModalSuccess] = useState(false)
  const handleClose = () => setModal(false)
  const navigate = useNavigate()
  const handleSuccessClose = () => {
    setModalSuccess(false)
    navigate('/apartments')
  }
  return {
    isModal,
    setModal,
    isModalSuccess,
    setModalSuccess,
    handleSuccessClose,
    handleClose
  }
}

export const [DetailedApartmentProvider, useApartmentContext] = constate(useDetailedApartment)
