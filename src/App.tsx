import MentalHealthSection from "./components/sections/MentalHealthSection"
import Navbar from "./components/sections/Navbar"
import Footer from "./components/sections/Footer"
import './App.css'

function App() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <MentalHealthSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
