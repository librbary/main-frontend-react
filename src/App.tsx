import React from 'react'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './components/screen/Home'

export const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App