import { useState } from 'react'
import { Bars3Icon as Open, XMarkIcon as Close } from '@heroicons/react/24/solid'
import Logo from '@/assets/logo.png'
import Link from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/mediaQuery'
import ActionButton from '@/shared/ActionButton'



type Props = {
    topPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ( { topPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex items-center justify-between';
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
    const isMediumScreens = useMediaQuery("(min-width: 1024px)");
    const navbarBg = topPage ? "" : "bg-blue-600 drop-shadow";

  return (
    <nav>
        <div className={`${navbarBg} ${flexBetween} fixed top-0 z-30 w-full py-4 shadow-md`}>
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
                            <div className="rounded-sm px-2 py-1 text-center transition ease-in-out bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-500" >
                                <ActionButton setSelectedPage={setSelectedPage}>Seja Membro</ActionButton>
                            </div>
                        </div>
                    </div> ) : 
                    ( <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
                        <Open className='w-8 text-blue-600' />
                    </button>)}
                </div>
            </div>
        </div>
        {!isMediumScreens && isMenuToggle && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[220px] bg-bg-color drop-shadow-xl transition'>
                <div className='flex justify-end p-6'>
                    <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
                        <Close className='w-8 text-blue-600' />
                    </button>
                </div>
                <div className='ml-[33%] flex flex-col gap-10 mt-10'>
                    <Link page='Inicio' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page='Beneficios' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page='Aulas' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page='Contato' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className="flex flex-col gap-10">
                    <p className=' mt-6 ml-[33%]'>Login</p>
                    <div className="bg-blue-600 rounded-sm mr-7 ml-7 text-center px-2 py-1">
                        <ActionButton setSelectedPage={setSelectedPage}>Seja Membro</ActionButton>
                    </div>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar