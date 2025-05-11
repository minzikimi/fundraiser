import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import QuoteSection from '../components/QuoteSection/QuoteSection'
import FAQ from '../components/FAQ/FAQ'
import DonationSection from '../components/DonationSection/DonationSection'


const Home = () => {
  return (
    <div>
       <NavBar />
       <Banner />
       <QuoteSection />
       <FAQ />
       <DonationSection />
       <Footer />
    </div>
  )
}

export default Home
