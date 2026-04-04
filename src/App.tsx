import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Cases } from './pages/Cases'
import { Contacts } from './pages/Contacts'
import { Home } from './pages/Home'
import { LegalDesign } from './pages/LegalDesign'
import { Services } from './pages/Services'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="legal-design" element={<LegalDesign />} />
          <Route path="about" element={<About />} />
          <Route path="cases" element={<Cases />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
