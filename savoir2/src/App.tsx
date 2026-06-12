import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<div className="pt-[72px] min-h-[100dvh] flex items-center justify-center"><p className="text-ka-medium text-lg">Catalogue - En construction</p></div>} />
          <Route path="/cours/:id" element={<div className="pt-[72px] min-h-[100dvh] flex items-center justify-center"><p className="text-ka-medium text-lg">Détail du cours - En construction</p></div>} />
          <Route path="/enseignants" element={<div className="pt-[72px] min-h-[100dvh] flex items-center justify-center"><p className="text-ka-medium text-lg">Enseignants - En construction</p></div>} />
          <Route path="/enseignants/:id" element={<div className="pt-[72px] min-h-[100dvh] flex items-center justify-center"><p className="text-ka-medium text-lg">Profil enseignant - En construction</p></div>} />
          <Route path="/panier" element={<div className="pt-[72px] min-h-[100dvh] flex items-center justify-center"><p className="text-ka-medium text-lg">Panier - En construction</p></div>} />
          <Route path="/tableau-de-bord" element={<div className="pt-[72px] min-h-[100dvh] flex items-center justify-center"><p className="text-ka-medium text-lg">Tableau de bord - En construction</p></div>} />
          <Route path="/admin" element={<div className="pt-[72px] min-h-[100dvh] flex items-center justify-center"><p className="text-ka-medium text-lg">Administration - En construction</p></div>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
