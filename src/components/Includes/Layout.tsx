import { Footer } from "./Footer"
import { NavBarTop } from "./NavBarTop"
import { Sidebar } from "./Sidebar"


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