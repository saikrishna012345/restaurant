import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import FounderStory from './components/FounderStory'
import FoodQuality from './components/FoodQuality'
import SignatureDishes from './components/SignatureDishes'
import Branches from './components/Branches'
import FakeBranchWarning from './components/FakeBranchWarning'
import GoogleReviews from './components/GoogleReviews'
import OrderOnline from './components/OrderOnline'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <FounderStory />
        <FoodQuality />
        <SignatureDishes />
        <Branches />
        <FakeBranchWarning />
        <GoogleReviews />
        <OrderOnline />
      </main>
      <Footer />
    </div>
  )
}

export default App
