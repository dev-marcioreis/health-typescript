import useMediaQuery from "@/hooks/mediaQuery";
import Headers from "@/shared/Headers";
import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    const isMediumScreens = useMediaQuery("(min-width:1024px)");

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            <div>
                <Headers>Coloque a preguiça para correr</Headers>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits