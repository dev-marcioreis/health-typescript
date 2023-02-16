import useMediaQuery from "@/hooks/mediaQuery";
import TextHeaders from "@/shared/TextHeaders";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import AboutImg from '@/assets/AboutImg.png'
import SparklesImg from '@/assets/sparkles.png'

const benefits: Array<BenefitType> = [
    {
        title: 'Musculação',
        description: 'Os melhores e mais avançados equipamentos.'
    },
    {
        title: 'Ginástica',
        description: 'Ginástica funcional para todo o corpo.'
    },
    {
        title: 'Treinos',
        description: 'Treinos voltados para o melhor rendimento.'
    }
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    const isMediumScreens = useMediaQuery("(min-width:1024px)");

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            <motion.div className="text-center"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ duration: 1 }} 
                variants={{ 
                    hidden: {opacity: 0, y:-50}, 
                    visible: {opacity: 1, y: 0} 
                }}>
                <TextHeaders>Coloque a preguiça para correr</TextHeaders>
                <p className="mt-5 text-md">Nosso objetivo é levar e democratizar a atividade fisica para todos.</p>
                <p className="mb-5 text-md">Nossa principal missão é transformar vidas através da atividade fisica em todas as classes da sociedade Brasileira.</p>
            </motion.div>
            <motion.div className="md:flex items-center justify-between gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={ container }>
                {benefits.map((benefit: BenefitType) => (
                    <Benefit key={benefit.title} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
                ))}
            </motion.div>
            <div className="mt-20 items-stretch justify-center gap-5 md:mt-28 md:flex">
                <motion.div className="relative"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 1 }} 
                    variants={{ 
                        hidden: {opacity: 0, x:-50}, 
                        visible: {opacity: 1, x: 0} 
                    }}>
                    <img src={AboutImg} alt="Aboout image" className="brightness-150" />
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
                    <div className="text-center md:mt-60">
                        <TextHeaders>A sua melhor opção na hora de levar uma vida + saudável</TextHeaders>
                        <motion.div className="mt-5 flex flex-col gap-4"
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
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits