import { useState } from 'react'
import { Bars3Icon as Open, XMarkIcon as Close } from '@heroicons/react/24/solid'
import Logo from '@/assets/logo.png'
import Link from './Link'

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Navbar = ( { selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex items-center justify-between'

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-4 shadow-md`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <div className={`${flexBetween}`}>
                        <img src={Logo} alt="Logo" className='w-12'/>
                        <span>Health</span>
                    </div>
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Beneficios' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Aulas' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contato' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Login</p>
                            <button>Seja Membro</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar