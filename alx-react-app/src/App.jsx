import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      </div>
          <div>
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
    </div>
    </>
  )
}



export default App
