import useMediaQuery from "@/hooks/mediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomeTextImg from '@/assets/text.png'
import HomeCirclesImg from '@/assets/circles.png'
import HomeSparklesImg from '@/assets/sparkles.png'
import HomeWavesImg from '@/assets/waves.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Home({ setSelectedPage }: Props) {
  return (
    <div>
       home
    </div>
  )
}

export default Home