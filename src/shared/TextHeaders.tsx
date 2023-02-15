
type Props = {
    children: React.ReactNode;
}

const TextHeaders = ({ children }: Props) => {
  return (
    <h2 className="basis-3/5 font-montserrat text-2xl text-blue-600">
        {children}
    </h2>
  )
}

export default TextHeaders