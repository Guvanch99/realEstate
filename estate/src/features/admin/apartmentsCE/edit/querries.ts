import { useMutation, useQueryClient } from 'react-query'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../firebase-config'

async function editApartments({ id, editData }: any): Promise<void> {
  try {
    const docRef = doc(db, 'rent', id)
    console.log('da', editData)
    const res = await updateDoc(docRef, { ...editData })
    console.log('res', res)
  } catch (e: any) {
    throw new Error('Something went wrong')
  }
}

async function deleteApartment(id: string): Promise<void> {
  try {
    const docRef = doc(db, 'rent', id!)
    await deleteDoc(docRef)
  } catch (e: any) {
    throw new Error(e)
  }
}

export const useEditApartment = () => {
  const queryCache = useQueryClient()
  return useMutation<any, Error, any>(({ id, editData }) => editApartments({ id, editData }), {
    onSuccess: () => queryCache.invalidateQueries('Apartments')
  })
}

export const useDeleteApartment = () => {
  const queryCache = useQueryClient()

  return useMutation<any, Error, any>((id) => deleteApartment(id), {
    onSuccess: () => queryCache.invalidateQueries('Apartments')
  })
}
