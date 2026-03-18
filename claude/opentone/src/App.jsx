import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Support from './pages/Support'
import Privacy from './pages/Privacy'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  )
}
