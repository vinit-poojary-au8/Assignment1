import React from 'react'
import Appointment from './components/Appointment'
import Header from './components/Header'
import Main from './components/Main'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import Customer from './components/Customer'
import GettingStartedForm from './components/GettingStartedForm'
import Footer from './components/Footer'

function HomePage() {
    return (
        <div>
            <Header/>
            <Main/>
            <Appointment/> 
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <Customer/>
            <GettingStartedForm/>
            <Footer/>
        </div>
    )
}

export default HomePage
