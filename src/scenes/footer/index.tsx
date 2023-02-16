import Logo from '@/assets/logo.png'

const Footer = () => {
  return (
    <footer className='bg-blue-900 py-4 shadow-2xl flex items-center justify-center'>
        <div className='flex items-center'>
            <img src={Logo} alt="Logo" className='w-12'/>
            <span className='uppercase font-bold tracking-wide text-blue-600'>Health</span>
        </div>
    </footer>
  )
}

export default Footer