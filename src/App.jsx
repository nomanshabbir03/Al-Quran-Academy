import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMarquee from './components/AboutMarquee'
import Teachers from './components/Teachers'
import Courses from './components/Courses'
import HowItWorks from './components/HowItWorks'
import BecomeTeacher from './components/BecomeTeacher'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-primary)]">
      <Navbar />
      <Hero />
      <AboutMarquee />
      <Teachers />
      <Courses />
      <HowItWorks />
      <BecomeTeacher />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
