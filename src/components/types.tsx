import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import Location from '../model/location'

// Định nghĩa kiểu dữ liệu cho Navigation
export type RootStackParamList = {
  HomeScreen: undefined
  DetailScreen: { location: Location } // AboutScreen nhận tham số location
  AboutScreen: undefined
}

// Kiểu dữ liệu cho navigation của HomeScreen
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>

// Kiểu dữ liệu cho navigation của AboutScreen
export type AboutScreenRouteProp = StackScreenProps<RootStackParamList, 'DetailScreen'>
