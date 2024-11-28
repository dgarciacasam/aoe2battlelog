import { Header } from '@/components/Header'
import './App.css'

import { Home } from '@/components/Home'
import { Footer } from '@/components/Footer'

export function App() {
  return (
    <div className='bg-background_primary h-screen flex flex-col justify-between px-20'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
