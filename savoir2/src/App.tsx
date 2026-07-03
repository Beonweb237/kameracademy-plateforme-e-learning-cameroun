import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Catalogue from '@/pages/Catalogue'
import CourseDetail from '@/pages/CourseDetail'
import Enseignants from '@/pages/Enseignants'
import InstructorProfile from '@/pages/InstructorProfile'
import Panier from '@/pages/Panier'
import TableauDeBord from '@/pages/TableauDeBord'
import Admin from '@/pages/Admin'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/cours/:id" element={<CourseDetail />} />
          <Route path="/enseignants" element={<Enseignants />} />
          <Route path="/enseignants/:id" element={<InstructorProfile />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/tableau-de-bord" element={<TableauDeBord />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
