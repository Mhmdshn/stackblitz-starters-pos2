import { HomeTabs } from "../components/HomeTabs"
import { Sidebar } from "./Includes/Sidebar"
import { HomeBody } from "./HomeBody"

type propsHomeLayout = {
  children?: React.ReactNode
}

export const HomeLayout = (props: propsHomeLayout) => {
  return <>
   <div className="">
     <div className="row">
       <div className="col-2">
          <Sidebar />
       </div>
       <div className="col">
          {props.children}
       </div>
     </div>

   </div>

  </>
}