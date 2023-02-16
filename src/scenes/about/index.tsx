import { SelectedPage } from "@/shared/types"
import AboutImg from '@/assets/AboutImg.png'
import SparklesImg from '@/assets/sparkles.png'
import TextHeaders from "@/shared/TextHeaders";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/mediaQuery";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const About = ({ setSelectedPage }: Props) => {
    const isMediumScreens = useMediaQuery("(min-width:1024px)")

  return (
    <section className="mx-auto min-h-full w-5/6 md:-mt-24" id="about">
        <motion.div className="items-center justify-center gap-5 md:flex" onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
            <motion.div className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0}
                    }}>
                <img src={AboutImg} alt="Aboout image" className="brightness-150 md:w-5/6" />
                <motion.div className="absolute top-0 -z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: {opacity: 0, y:100},
                        visible: {opacity: 1, y: 0}
                        }}>
                        <img src={SparklesImg} alt="About image" className="grayscale brightness-150" />
                </motion.div>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                    hidden: {opacity: 0, x:50},
                    visible: {opacity: 1, x: 0}
                    }}>
                <div className="text-center md:mt-10">
                    <TextHeaders>A sua melhor opção na hora de levar uma vida + saudável</TextHeaders>
                <motion.div className="mt-5 flex flex-col gap-4 text-gray-100"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: {opacity: 0, y:50},
                        visible: {opacity: 1, y: 0}
                            }}>
                        <p>Nosso exclusivo circuito de emagrecimento, intenso e com duração de 30 minutos.</p>
                        <p>Emagrecimento com ganho de condicionamento físico em apenas 30 minutos.</p>
                        <p>Um treino intervalado de alta intensidade que usa o peso do próprio corpo.</p>
                        <p>É um treino coletivo de hipertrofia, com foco em fortalecimento muscular.</p>
                </motion.div>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default About