import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink onClick={() => setSelectedPage(SelectedPage.Contact)} href={`#${SelectedPage.Contact}`}>
      {children}
    </AnchorLink>
  )
}

export default ActionButton