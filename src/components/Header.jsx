import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.webp'
import { Bell, Home, Newspaper } from 'lucide-react'

const navLinks = [
  { text: 'Home', url: '/', icon: Home },
  { text: 'Edital', url: '/edital', icon: Newspaper },
  { text: 'Avisos', url: '/avisos', icon: Bell }
]

const Header = () => {
  return (
    <>
      {/* nav for mobile */}
      <nav className=' h-20 w-full flex lg:hidden justify-between select-none border border-midle-gray fixed bottom-0 bg-light-gray z-10 '>
        <ul className='w-full flex p-1 items-center'>
          {navLinks.map((nav, i) => (
            <li
              key={i}
              className=' hover:text-secondary font-calibri flex-1 '
              translate='no'
            >
              <NavLink
                to={nav.url}
                className={({ isActive }) =>
                  `text-sm grid place-items-center transition duration-300 ${
                    isActive ? 'text-secondary scale-120 ' : ''
                  }`
                }
              >
                <nav.icon size={20} strokeWidth={1.5} />
                {nav.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* nav for desktop */}
      <nav className='hidden h-20 lg:flex select-none shadow-sm sticky top-0 bg-light-gray z-10 pl-8'>
        <NavLink to='/'>
          <img src={logo} alt='Logo do site' className='h-20' />
        </NavLink>
        <ul className='flex flex-1 justify-center items-center gap-20'>
          {navLinks.map((nav, i) => (
            <li key={i} className=' hover:text-secondary' translate='no'>
              <NavLink
                to={nav.url}
                className={({ isActive }) => `p-2 relative transition
                  ${isActive ? 'link-custom after:animate-link-animate' : ''}
                `}
              >
                {nav.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
