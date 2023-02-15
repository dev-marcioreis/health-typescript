import useMediaQuery from "@/hooks/mediaQuery";
import TextHeaders from "@/shared/TextHeaders";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

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
        </motion.div>
    </section>
  )
}

export default Benefits