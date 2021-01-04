import { Card } from "../components/Card"
import { Search } from "../components/Search"

export const Home = () => {
   const cards = new Array(15).fill('')

   return (
      <>
         <Search />
         
         <div className="row">

            {cards.map((_, index) => {
               return (
                  <div className="col-sm-4 mb-4" key={index}>
                     <Card />
                  </div>
               )
            })}
   
         </div>
      </>
   )
}