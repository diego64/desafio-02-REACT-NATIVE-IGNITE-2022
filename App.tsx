import { StatusBar, Text } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import theme from './src/theme'
import { Routes } from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        { fontsLoaded ? <Routes /> : <Text>Loading...</Text> }
    </ThemeProvider>
  )
}
