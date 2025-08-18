function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='text-center text-sm bg-terciary text-midle-gray p-5 mb-7 lg:mb-0'>
      <span>
        Criatividade em matemática - {year} &copy; Todos os direitos reservados.
      </span>
    </footer>
  )
}

export default Footer
