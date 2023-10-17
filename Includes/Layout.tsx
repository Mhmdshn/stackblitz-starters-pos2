import { Footer } from "../Includes/Footer"
import { NavBarTop } from "../Includes/NavBarTop"
import { Sidebar } from "../Includes/Sidebar"


type propsNav = {
  children: React.ReactNode
}

export const Layout = (props: propsNav) => {
  return <>
    <NavBarTop />
    {props.children}
    <Footer />
  </>
}