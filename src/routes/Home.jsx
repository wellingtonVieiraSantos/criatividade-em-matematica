import { BookOpen, Instagram, Mail } from 'lucide-react'
import Marquee from 'react-fast-marquee'

import unioeste from '../assets/img/unioeste.webp'
import ifb from '../assets/img/ifb.webp'
import capes from '../assets/img/capes.webp'
import gtie from '../assets/img/gtie.webp'
import ppgecem from '../assets/img/ppgecem.webp'
import gepeem from '../assets/img/gepeem.webp'
import lattes from '../assets/img/lattes.svg'
import { toast, Toaster } from 'sonner'

const marqueeItens = [
  { src: unioeste, alt: 'logo unioeste' },
  { src: ifb, alt: 'logo ifb' },
  { src: capes, alt: 'logo capes' },
  { src: gtie, alt: 'logo gtie' },
  { src: ppgecem, alt: 'logo ppgecem' },
  { src: gepeem, alt: 'logo gepeem' }
]

const Home = () => {
  const handleCopy = async e => {
    e.preventDefault()
    const emailCopied = await navigator.clipboard.writeText(
      e.currentTarget.getAttribute('href')
    )
    toast.promise(emailCopied, {
      loading: 'Copiando...',
      success: {
        message: 'E-mail copiado.',
        description:
          'O e-mail foi copiado para a área de transferência, use ctrl+v para colar'
      },
      error: 'Um erro aconteceu ao copiar o e-mail, tente novamente mais tarde.'
    })
  }

  return (
    <>
      <Toaster />
      <section
        className={`
          bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.9)),url('/landing-page-bg-mobile.jpeg')]
           md:bg-[linear-gradient(to_right,#002b4f,rgba(0,0,0,0.2)),url('/landing-page-bg.jpeg')]
          bg-no-repeat bg-center bg-cover min-h-[calc(100dvh-4rem)] grid place-content-center lg:grid-cols-[1fr_1fr] p-3`}
      >
        <div className='p-4 tracking-wide grid place-items-center place-content-center gap-20 text-light-gray'>
          <h1 className='text-center text-3xl lg:text-5xl text-balance tracking-widest'>
            Formação em Criatividade em Matemática através de Problemas Abertos
          </h1>
          <a
            href='https://editora.ifb.edu.br/editora/livros-editora-ifb/criatividade-em-matem%C3%A1tica-atrav%C3%A9s-de-problemas-abertos/'
            target='_blank'
            className='w-full max-w-sm items-center text-sm bg-gradient-to-tr from-terciary via-primary to-secondary
           p-2 rounded-lg flex lg:hidden gap-2 justify-center hover:shadow-md hover:shadow-secondary transition duration-300'
          >
            <BookOpen />
            Link para o livro
          </a>
        </div>
        <div
          className='hidden w-50 border border-midle-gray lg:flex bg-light-gray rounded-lg 
        overflow-hidden p-3 flex-col text-center items-center gap-4 absolute bottom-4 right-4'
        >
          <h2 className='text-sm font-calibri font-light'>
            Confira o livro no link abaixo
          </h2>
          <img
            src='/livro.jpeg'
            alt='qrcode instagram'
            className='size-60 lg:size-full rounded-lg'
          />
          <a
            href='https://editora.ifb.edu.br/editora/livros-editora-ifb/criatividade-em-matem%C3%A1tica-atrav%C3%A9s-de-problemas-abertos/'
            target='_blank'
            className='text-base text-light-gray bg-gradient-to-br from-secondary
             to-terciary hover:from-terciary hover:to-secondary 
             rounded-lg h-9 w-full flex items-center justify-center gap-4 transition duration-300'
          >
            <BookOpen size={20} />
            Link para o pdf
          </a>
        </div>
      </section>
      <section className='w-full m-auto flex flex-col gap-4 p-3'>
        <h2 className='text-xl text-center lg:text-3xl'>Realização</h2>
        <Marquee
          gradient
          gradientColor='oklch(0.99 0.0146 98.28)'
          autoFill
          className='w-full m-auto max-w-5xl'
        >
          {marqueeItens.map((item, i) => (
            <img
              key={i}
              src={item.src}
              alt={item.alt}
              className='w-14 lg:w-24 aspect-square mx-1 lg:mx-6'
            />
          ))}
        </Marquee>
      </section>
      <section className=' w-full grid place-items-center gap-4 p-3 pt-40 lg:pt-20 bg-gradient-to-b from-secondary via-primary to-terciary'>
        <div className='relative border size-full max-w-5xl p-3 flex flex-col lg:flex-row bg-light-gray rounded-lg'>
          <div
            className='size-50 lg:size-full rounded-full lg:rounded-lg absolute top-0 left-1/2 -translate-1/2
          bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.6)),url("/perfil.jpeg")]
           lg:static lg:translate-0 lg:flex-1 bg-center bg-cover'
          />
          <div className='grid justify-between p-3 pt-25 lg:pt-0 lg:flex-2 text-justify space-y-2'>
            <h2 className='text-xl'>Sobre o autor</h2>
            <p>
              Doutorando em Educação em Ciências e Educação Matemática pela
              Universidade Estadual do Oeste do Paraná, Mestre em Educação pela
              Escola Superior de Educação de Santarém (Portugal) e especialista
              em Ensino de Matemática para o Ensino Médio pelo IFRN – Campus
              Avançado Natal Zona Leste. Atualmente, atua como docente EBTT no
              Instituto Federal de Brasília.
            </p>
            <div className='w-full h-px bg-midle-gray' />
            <div className='grid grid-cols-2 grid-rows-2 text-sm'>
              <p className='col-span-2'>Veja o currículo lattes completo em:</p>
              <a
                href='http://lattes.cnpq.br/1556181022870398'
                target='_blank'
                className='col-span-2 lg:col-span-1 m-auto border border-midle-gray hover:border-dark-gray
                    rounded-lg h-9 flex w-full max-w-sm items-center justify-center gap-4 transition duration-300'
              >
                <img src={lattes} alt='icon lattes' className='w-5' />
                Lattes
              </a>
            </div>
            <div className='w-full h-px bg-midle-gray' />
            <div className='grid grid-cols-2 grid-rows-2 text-sm gap-2'>
              <p className='col-span-2'>E-mails</p>
              <p className='col-span-2 text-dark-gray'>
                Clique no e-mail abaixo para copiá-lo para a área de
                transferência
              </p>
              <a
                onClick={e => handleCopy(e)}
                href='heniooliveira89@gmail.com'
                className='relative col-span-2 lg:col-span-1 m-auto font-calibri py-1
                 after:bg-midle-gray after:bottom-0 after:absolute after:w-0 after:h-px hover:after:w-full
                    rounded-lg h-9 w-full max-w-sm flex items-center justify-center gap-4 transition after:duration-300'
              >
                <Mail strokeWidth={1} className='w-5' />
                E-mail pessoal
              </a>
              <a
                onClick={e => handleCopy(e)}
                href='henio.oliveira@ifb.edu.br'
                className='relative col-span-2 lg:col-span-1 m-auto  font-calibri py-1
                after:bg-midle-gray after:bottom-0 after:absolute after:w-0 after:h-px hover:after:w-full
                    rounded-lg h-9 w-full max-w-sm flex items-center justify-center gap-4 transition after:duration-300'
              >
                <Mail strokeWidth={1} className='w-5' />
                E-mail institucional
              </a>
            </div>
          </div>
        </div>
        <div className='border size-full max-w-5xl p-3 flex flex-col items-center space-y-8 lg:space-y-0 lg:flex-row lg:justify-between bg-light-gray rounded-lg'>
          <div className='h-full grid place-content-between text-sm text-center space-y-2 p-3'>
            <p>
              Escaneie o QR Code e se inscreva no instagram para ficar por
              dentro das novidades que virão
            </p>
            <div className='flex items-center'>
              <div className='flex-1 w-full h-px bg-midle-gray' />
              <span className='flex-1 text-center'>ou pelo link abaixo</span>
              <div className='flex-1 w-full h-px bg-midle-gray' />
            </div>
            <a
              href='https://www.instagram.com/criatividadeemmatematica/'
              target='_blank'
              className='w-full m-auto max-w-sm py-1 font-calibri text-light-gray rounded-lg flex items-center justify-center gap-4
            bg-gradient-to-br from-secondary to-violet-500 hover:shadow hover:shadow-primary duration-300 transition
            cursor-pointer'
            >
              <Instagram strokeWidth={1.4} className='w-5' />
              Ir para instagram
            </a>
          </div>

          <img
            src='/qrcode.jpeg'
            alt='qrcode imagem'
            className='size-50 rounded-xl'
          />
        </div>
      </section>
    </>
  )
}

export default Home
