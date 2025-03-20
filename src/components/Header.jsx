import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/img/logo.webp'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleCloseMenu = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsNavOpen(false)
      setIsClosing(false)
    }, 500) // Duração da animação
  }

  return (
    <header className='grid grid-flow-col place-content-between lg:place-content-around select-none shadow-lg sticky top-0 bg-light-gray z-10'>
      <NavLink to='/'>
        <img src={logo} alt='Logo do site' className='w-16 mx-4 lg:w-28' />
      </NavLink>
      <nav className='grid place-items-center'>
        <section className='lg:hidden'>
          <div className='space-y-2 px-4' onClick={() => setIsNavOpen(true)}>
            <span className='block h-0.5 w-8 bg-black'></span>
            <span className='block h-0.5 w-8 bg-black'></span>
            <span className='block h-0.5 w-8 bg-black'></span>
          </div>
          {isNavOpen && (
            <div
              className={`absolute w-full h-screen top-0 left-0 bg-light-gray z-10 grid place-content-center ${isClosing ? 'animate-menu-out' : 'animate-menu-in'}`}
            >
              <div
                className='absolute top-0 right-0 h-16 aspect-square grid place-items-center'
                onClick={handleCloseMenu}
              >
                <svg
                  className='h-8 w-8 text-black'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </div>
              <ul className='grid grid-flow-row place-items-center sm:grid-flow-col gap-12 sm:gap-8 min-h-[250px] uppercase'>
                <li translate='no'>
                  <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? 'link-custom after:animate-link-animate' : ''
                    }
                    onClick={handleCloseMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/edital'
                    className={({ isActive }) =>
                      isActive ? 'link-custom after:animate-link-animate' : ''
                    }
                    onClick={handleCloseMenu}
                  >
                    Edital
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/avisos'
                    className={({ isActive }) =>
                      isActive ? 'link-custom after:animate-link-animate' : ''
                    }
                    onClick={handleCloseMenu}
                  >
                    Avisos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/links'
                    className={({ isActive }) =>
                      isActive ? 'link-custom after:animate-link-animate' : ''
                    }
                    onClick={handleCloseMenu}
                  >
                    Links Importantes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/contatos'
                    className={({ isActive }) =>
                      isActive ? 'link-custom after:animate-link-animate' : ''
                    }
                    onClick={handleCloseMenu}
                  >
                    Contatos
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </section>
        <ul className='hidden lg:flex space-x-16 px-8 uppercase'>
          <li className='hover:text-secondary' translate='no'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'link-custom after:animate-link-animate' : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li className='hover:text-secondary'>
            <NavLink
              to='/edital'
              className={({ isActive }) =>
                isActive ? 'link-custom after:animate-link-animate' : ''
              }
            >
              Edital
            </NavLink>
          </li>
          <li className='hover:text-secondary'>
            <NavLink
              to='/avisos'
              className={({ isActive }) =>
                isActive ? 'link-custom after:animate-link-animate' : ''
              }
            >
              Avisos
            </NavLink>
          </li>
          <li className='hover:text-secondary'>
            <NavLink
              to='/links'
              className={({ isActive }) =>
                isActive ? 'link-custom after:animate-link-animate' : ''
              }
            >
              Links Importantes
            </NavLink>
          </li>
          <li className='hover:text-secondary'>
            <NavLink
              to='/contatos'
              className={({ isActive }) =>
                isActive ? 'link-custom after:animate-link-animate' : ''
              }
            >
              Contatos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
