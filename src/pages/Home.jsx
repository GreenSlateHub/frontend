import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
   <Header />
      <p className='test-after text-3xl font-bold text-red-700 underline text-center'>Hello from  greenslate header</p>
      <Footer />
    </>
   
  )
}

export default Home