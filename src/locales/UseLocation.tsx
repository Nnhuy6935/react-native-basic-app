import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
// import dữ liệu về danh sách địa điểm
import LocationVi from '../data/LocationData_vi.json'
import LocationEn from '../data/locationData_en.json'
import Location from '../model/location'

export const UseLocation = () => {
  const { i18n } = useTranslation()
  const [locations, setLocations] = useState<Location[]>([])

  useEffect(() => {
    // Chọn danh sách dữ liệu theo ngôn ngữ
    setLocations(i18n.language === 'vi' ? LocationVi : LocationEn)
  }, [i18n.language])
  return locations
}
