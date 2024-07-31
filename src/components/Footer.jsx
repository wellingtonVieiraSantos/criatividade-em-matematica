import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import instagram from '../assets/img/instagram.svg'
import logo from '../assets/img/logo.webp'

function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer className="flex flex-col gap-8 bg-terciary text-light-gray py-8">
      <div className="grid grid-flow-col place-content-around place-items-center">
        <img src={logo} alt="logo criatividade em matematica" className='hidden lg:block bg-light-gray rounded-full w-32 opacity-50 hover:opacity-90 transition-all'/>
        <ul className="grid grid-flow-col lg:grid-flow-row place-items-center gap-2 lg:gap-4">
          <a href="https://www.instagram.com/criatividadeemmatematica?utm_source=qr&igsh=MXFqZnBobGQxdDhlNA==" target='_blank'>
            <li className='flex items-center justify-around gap-2 p-2 border rounded-full lg:w-40 lg:hover:underline'><img src={instagram} alt="logo instagram" className='w-5' /><span className='hidden lg:block'>Instagram</span></li>
          </a>
          <a href="mailto:henio.oliveira@ifb.edu.br" target="_blank">
            <li className='flex items-center justify-around gap-2 p-2 border rounded-full lg:w-40 lg:hover:underline'><Mail size={20} color='#f2f2f2'/><span className='hidden lg:block'>E-mail</span></li>
          </a>
        </ul>
        <ul className="grid gap-4">
          <li className='hover:underline'><Link to="/"  >Home</Link></li>
          <li className='hover:underline'><Link to="/edital">Edital</Link></li>
          <li className='hover:underline'><Link to="/avisos">Avisos</Link></li>
          <li className='hover:underline'><Link to="/links">Links Importantes</Link></li>
          <li className='hover:underline'><Link to="/contatos">Contatos</Link></li>
        </ul>
      </div>
      <span className="text-center text-sm text-dark-gray">Criatividade em matemática - {year} &copy; Todos os direitos reservados.</span>
    </footer>
  )
}

export default Footer

