import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

const childrenVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
}

type Props = {
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ title, description, setSelectedPage }: Props) => {
  return (
    <motion.div variants={childrenVariant} className="mt-10 rounded-md bg-blue-900 shadow-2xl px-5 py-16 text-center">
        <div className="mb-4 flex flex-col justify-center">
            <h4 className="font-bold text-white text-2xl">{title}</h4>
            <p className="text-gray-100 text-md mt-5">{description}</p>
        </div>
    </motion.div>
  )
}

export default Benefit