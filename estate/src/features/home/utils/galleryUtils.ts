import { TGallery, TOption } from '../type'

export const galleryFilter = (gallery: TGallery[], filter: Omit<TOption, 'All'>) => (filter !== 'All'
  ? gallery.filter((item) => item.status === filter)
  : gallery)
