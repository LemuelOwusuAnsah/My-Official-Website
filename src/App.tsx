import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Philosophy from './pages/Philosophy'
import Career from './pages/Career'
import Skills from './pages/Skills'
import About from './pages/About'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Wallet from './pages/Wallet'
import Contracts from './pages/Contracts'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/career" element={<Career />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/contracts" element={<Contracts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
