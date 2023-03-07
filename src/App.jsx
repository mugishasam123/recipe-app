import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import SearchResults from './components/SearchResults/SearchResults'
import Cuisines from './components/Cuisines/Cuisines'

const App = () => {
  const location = useLocation()

  return (
    <Routes Location={location} key={location.pathname}>
      <Route path="/" element={<Home />}>
        <Route path="searched/:search" element={<SearchResults />} />
        <Route path="searched/:search/:type" element={<Cuisines />} />
      </Route>
    </Routes>
  )
}

export default App
