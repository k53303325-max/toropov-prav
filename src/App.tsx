import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Blog } from './pages/Blog'
import { Cases } from './pages/Cases'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { LegalDesign } from './pages/LegalDesign'
import { ServiceCategory } from './pages/ServiceCategory'
import { ServiceTaskPage } from './pages/ServiceTaskPage'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { Services } from './pages/Services'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/:slug/:taskSlug" element={<ServiceTaskPage />} />
          <Route path="services/:slug" element={<ServiceCategory />} />
          <Route path="services" element={<Services />} />
          <Route path="legal-design" element={<LegalDesign />} />
          <Route path="politika-personalnyh-dannyh" element={<PrivacyPolicy />} />
          <Route path="about" element={<Navigate to="/" replace />} />
          <Route path="cases" element={<Cases />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contacts" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
