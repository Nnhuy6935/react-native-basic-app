import Location from './location'
import LocationData from '../data/LocationData_vi.json'

const locations = LocationData.map(
  item => new Location(item.id, item.name, item.title, item.image, item.description, item.details)
)

export default locations
