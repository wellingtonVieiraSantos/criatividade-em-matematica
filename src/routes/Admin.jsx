import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate('/')
  }, 2000)

  return (
    <section className='xl:w-[1280px] m-auto flex justify-center'>
      <form className='border w-1/2 aspect-square flex flex-col items-center justify-center'>
        <label htmlFor='login' className='self'>
          Login
        </label>
        <input type='text' name='login' className='border' />
        <label htmlFor='password'>Senha</label>
        <input type='text' name='password' className='border' />
      </form>
    </section>
  )
}

export default Admin
