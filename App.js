import { StatusBar } from 'react-native'

import Routes from './src/routes'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Inter_700Bold } from '@expo-google-fonts/inter'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Inter_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <>
      <Routes />
      <StatusBar></StatusBar>
    </>
  )
}
