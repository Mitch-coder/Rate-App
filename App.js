import react from 'react';
import { StatusBar } from 'expo-status-bar'
import Main from './src/components/Main.jsx';
import { NativeRouter } from 'react-router-native'

export default function App() {
  return(
    <><StatusBar style='light' /><NativeRouter>
      <Main />
    </NativeRouter></>
  )
}