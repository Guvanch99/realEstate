import constate from 'constate'
import { useEffect, useMemo, useState } from 'react'
import { useApartmentsQuery } from '../../queries'
import { TApartments, TFormData } from '../types'
import { getUnique } from '../utils/apartmentsUtils'

type TSort = 'notSelected' | 'priceLowest' | 'priceHighest' | 'nameAZ' | 'nameZA'

function useApartments() {
  const [sort, setSort] = useState<TSort>('notSelected')

  const [apartments, setApartments] = useState<TApartments[]>([])

  const { data: apartmentsData, isLoading, isIdle } = useApartmentsQuery()

  useEffect(() => {
    if (apartmentsData) {
      setApartments(apartmentsData.filter((apartment) => apartment.status === 'AVAILABLE'))
    }
  }, [apartmentsData])

  useEffect(() => {
    if (apartments.length) {
      let temp = [...apartments]
      if (sort === 'priceLowest') {
        temp = temp.sort((a, b) => +a.price - +b.price)
      }
      if (sort === 'priceHighest') {
        temp = temp.sort((a, b) => +b.price - +a.price)
      }
      if (sort === 'nameAZ') {
        temp = temp.sort((a, b) => a.location.localeCompare(b.location))
      }
      if (sort === 'nameZA') {
        temp = temp.sort((a, b) => b.location.localeCompare(a.location))
      }
      setApartments(temp)
    }
  }, [sort])

  const resultRoom = useMemo(
    () => getUnique('room', apartmentsData).map((item) => ({
      label: `${item} room`,
      value: item
    })),
    [apartmentsData]
  )

  const optionCapacity = useMemo(() =>
    getUnique('guest', apartmentsData).map((item) => ({
      label: item,
      value: item
    })), [apartmentsData])

  const squares = useMemo(() => getUnique('square', apartmentsData).map((square) => +square), [apartmentsData])
  const prices = useMemo(() => getUnique('price', apartmentsData).map((price) => +price), [apartmentsData])

  const maxSizeRoom = Math.max(...squares)
  const minSizeRoom = Math.min(...squares)
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  const optionRoom = [{
    label: 'All rooms',
    value: 'ALL'
  }, ...resultRoom]

  const onSubmit = (data: TFormData) => {
    const { room, price, capacity, maxSize, minSize } = data
    if (!apartmentsData) {
      return
    }
    let temp = apartmentsData
    if (room !== 'ALL') {
      temp = temp.filter((apartments) => +apartments.room === +room)
    }
    if (+capacity !== 1) {
      temp = temp.filter((apartments) => apartments.guest >= +capacity)
    }

    temp = temp.filter((apartments) => +apartments.price <= +price)
    temp = temp.filter(
      (apartments) =>
        +apartments.square >= +minSize && +apartments.square <= +maxSize
    )

    setApartments(temp)
  }

  return {
    isIdle,
    isLoading,
    apartments,
    optionCapacity,
    optionRoom,
    minPrice,
    maxSizeRoom,
    maxPrice,
    minSizeRoom,
    onSubmit,
    sort,
    setSort
  }
}

export const [
  ApartmentsProvider,
  useApartmentsContext
] = constate(useApartments)
