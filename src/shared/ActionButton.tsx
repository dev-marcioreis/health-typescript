import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink className="rounded-sm px-2 py-1 text-center 
    transition ease-in-out bg-blue-600 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-500" 
    onClick={() => setSelectedPage(SelectedPage.Contact)} href={`#${SelectedPage.Contact}`}>
        {children}
    </AnchorLink>
  )
}

export default ActionButton