import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import QuoteSection from '../components/QuoteSection/QuoteSection'
import FAQ from '../components/FAQ/FAQ'
import DonationSection from '../components/DonationSection/DonationSection'
import Certificate from '../components/Certificate/Certificate'

const Home = () => {
  const name = "Minji Kim"; 
  const date = new Date().toLocaleDateString(); 
  return (
    <div>
       <NavBar />
       <Banner />
       <QuoteSection />
       <FAQ />
       <DonationSection />
       <Footer />
       <Certificate name={name} date={date} />
    </div>
  )
}

export default Home
