import './App.css'
import ScrollingBar from './components/ScrollingBar'
import { AppContextProvider } from './AppContext'

export default function App() {
  return (
    <AppContextProvider>
      <ScrollingBar />
    </AppContextProvider>
  )
}