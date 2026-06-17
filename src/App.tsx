import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import WhyChoose from './components/WhyChoose'
import Services from './components/Services'
import Quote from './components/Quote'
import Testimonials from './components/Testimonials'
import Brands from './components/Brands'
import ServiceAreas from './components/ServiceAreas'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyChoose />
        <Services />
        <Brands />
        <Quote />
        <Testimonials />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
