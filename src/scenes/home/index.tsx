import useMediaQuery from "@/hooks/mediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomeImg from '@/assets/homeImg.png'
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Home({ setSelectedPage }: Props) {
    const isMediumScreens = useMediaQuery("(min-width:1024px)");

  return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0 bg-blue-900">
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
            <div className="z-10 mt-20 md:basis-3/5 ml-10">
                <div className="md:-mt-20">
                    <h1 className="text-4xl font-bold text-blue-500 uppercase mb-3">Evolução constante</h1>
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
            <div className="flex justify-center md:ml-30 md:mt-16 md:justify-items-end">
                <img src={HomeImg} alt="Home image" className="w-96 mt-16 grayscale brightness-150" />
            </div>
        </div>
        <div className="h-14 w-full bg-gradient-to-l from-sky-500 blur-2xl"></div>
    </section>
  )
}

export default Home