
import Cards from "../components/Cards"
import { Home } from "../components/Home"
import { SearchBar } from "../components/Includes/SearchBar"


export const HomePage = (props) => {
  return <>
   <div className="">
      <SearchBar />
     <Home >
    <div className="container-flex md:d-flex">
      <Cards />

    </div>

     </Home>

   </div>

  </>
}