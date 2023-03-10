import useMediaQuery from "@/hooks/mediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomeImg from '@/assets/homeImg.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Home({ setSelectedPage }: Props) {
    const isMediumScreens = useMediaQuery("(min-width:1024px)");

  return (
    <section id="home" className="py-10 md:h-full md:pb-0 mr-5">
        <motion.div className="md:flex mx-auto items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <motion.div className="z-10 mt-20 md:basis-3/5 ml-10" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 1 }} 
                variants={{ 
                    hidden: {opacity: 0, x:100}, 
                    visible: {opacity: 1, x: 0} 
                }} >
                <div className="flex flex-col items-center justify-center">
                    <div className="md:-mt-20 text-center">
                        <h1 className="md:text-5xl font-bold text-blue-500 uppercase mb-3">Evolução constante</h1>
                        <p className="mb-5 text-md text-gray-100">Os melhores equipamentos, infraestrutura e muito mais com mensalidades acessíveis.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Seja Membro
                        </ActionButton>
                        <div className="rounded-sm px-2 py-1 text-center shadow-md border transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500">
                            <AnchorLink onClick={() => setSelectedPage(SelectedPage.Contact)} href={`#${SelectedPage.Contact}`} >
                                <p>Saiba Mais</p>
                            </AnchorLink>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div className="flex items-center justify-center md:mt-16 md:mr-5" 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 1 }} 
                variants={{ 
                    hidden: {opacity: 0, x:-100}, 
                    visible: {opacity: 1, x: 0} 
                }}>
                <img src={HomeImg} alt="Home image" className="w-96 mt-16 grayscale brightness-150 ml-5" />
            </motion.div>
        </motion.div>
        <div className="h-14 w-full bg-gradient-to-r from-sky-500 blur-2xl"></div>
    </section>
  )
}

export default Home