import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Root() {

  return (
    <div className="text-terciary bg-light-gray min-h-[100dvh] grid grid-rows-[auto_auto_auto]">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Root
