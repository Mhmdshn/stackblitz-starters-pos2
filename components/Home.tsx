import { HomeTabs } from "../components/HomeTabs"
import { Sidebar } from "../Includes/Sidebar"
import { HomeBody } from "./HomeBody"
import { HomeLayout } from "./HomeLayout"

type propsHomee = {
  children: React.ReactNode
}

export const Home = (props: propsHomee) => {
  return <>
   <div>
   <HomeLayout>
     <HomeBody />
      {props.children}
    </HomeLayout>

   </div>

  </>
}