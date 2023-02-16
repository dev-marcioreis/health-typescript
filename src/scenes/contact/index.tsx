import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import TextHeaders from "@/shared/TextHeaders";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({ setSelectedPage }: Props) => {

    const inputStyles = `w-full mt-5 rounded-md bg-blue-900 px-5 py-2 placeholder-gray-100`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm()

    const onSubmit = async(e: any) => {
        const isValid = await trigger();

        if(!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section className="flex items-center justify-center mx-auto w-5/6 pt-24 pb-32" id="contact">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 1 }} 
            variants={{ 
                hidden: {opacity: 0, y:50}, 
                visible: {opacity: 1, y: 0} 
            }} >
            <div className="md:w-3/5">
                <TextHeaders>Fale Conosco</TextHeaders>
                <p className="my-2">Você pode entrar em contato conosco todos dias do ano.</p>
            </div>
            <div className="mt-10">
                <div className="mt-10 basis-3/5 md:mt-0">
                        <form target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/07647060589245ea9407e4ec17060f85" method="POST">
                            <input className={inputStyles} type="text" placeholder="Nome" {...register("name", {
                                required: true, maxLength: 100, })} />
                                {errors.name && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.name.type === "required" && "Todos os campos devem ser preenchidos."}
                                        {errors.name.type === "maxLength" && "Permitido 100 caracteres."}
                                    </p>
                                )}
                            <input className={inputStyles} type="text" placeholder="E-mail" {...register("email", {
                                required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
                                {errors.email && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.email.type === "required" && "Todos os campos devem ser preenchidos."}
                                        {errors.email.type === "pattern" && "E-mail inválido."}
                                    </p>
                                )}
                            <textarea className={inputStyles} placeholder="Mensagem" {...register("messege", {
                                required: true, maxLength: 2000, })} />
                                {errors.messege && (
                                    <p className="mt-1 text-primary-500">
                                        {errors.messege.type === "required" && "Todos os campos devem ser preenchidos."}
                                        {errors.messege.type === "maxLength" && "Permitido 2000 caracteres."}
                                    </p>
                                )}
                                <button type="submit" className="mt-5 rounded-sm px-10 py-2 text-center transition ease-in-out bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-500">
                                    Enviar
                                </button>
                        </form>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact