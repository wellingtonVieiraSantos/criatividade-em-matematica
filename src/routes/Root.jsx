import { Outlet, ScrollRestoration } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Root() {
  return (
    <div className='min-h-dvh grid grid-rows-[auto_auto_auto] mb-13 lg:mb-0'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default Root
