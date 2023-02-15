
type Props = {
    children: React.ReactNode;
}

function Headers({ children }: Props) {
  return (
    <h2 className="basis-3/5 font-montserrat text-2xl font-bold">
        {children}
    </h2>
  )
}

export default Headers