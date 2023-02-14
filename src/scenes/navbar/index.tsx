import { useState } from 'react'
import { Bars3Icon as Open, XMarkIcon as Close } from '@heroicons/react/24/solid'
import Logo from '@/assets/logo.png'
import Link from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/mediaQuery'
import ActionButton from '@/shared/ActionButton'



type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ( { selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex items-center justify-between';
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
    const isMediumScreens = useMediaQuery("(min-width: 1024px)");

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-4 shadow-md`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <div className={`${flexBetween}`}>
                        <img src={Logo} alt="Logo" className='w-12'/>
                        <span className='uppercase font-bold tracking-wide text-blue-600'>Health</span>
                    </div>
                    {isMediumScreens ? (<div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} ml-[7%] gap-16 text-md`}>
                            <Link page='Inicio' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Beneficios' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Aulas' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            <Link page='Contato' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Login</p>
                            <ActionButton setSelectedPage={setSelectedPage}>Seja Membro</ActionButton>
                        </div>
                    </div> ) : 
                    ( <button className='rounded-full bg-blue-600 p-2' onClick={() => setIsMenuToggle(!isMenuToggle)}>
                        <Open className='h-6 w-5 text-white' />
                    </button>)}
                </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar