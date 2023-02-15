import { SelectedPage } from "@/shared/types";


type Props = {
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ title, description, setSelectedPage }: Props) => {
  return (
    <div className="mt-10 rounded-md bg-blue-900 shadow-2xl px-5 py-16 text-center">
        <div className="mb-4 flex flex-col justify-center">
            <h4 className="font-bold text-white text-2xl">{title}</h4>
            <p className="text-gray-100 text-md mt-5">{description}</p>
        </div>
    </div>
  )
}

export default Benefit