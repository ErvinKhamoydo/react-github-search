import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Search = () => {
   const [value, setValue] = useState('');
   const {show} = useContext(AlertContext);

   const onSubmit = event => {
      if (event.key !== 'Enter') {
         return
      } 

      if (value.trim()) {
         console.log('Make request with: ', value);
      } else {
         show('Enter user details in the search bar!')
      }
   }

   return (
      <div className="from-group mb-3">
         <input 
            type="text"
            className="form-control"
            placeholder="Enter username..."
            onKeyPress={onSubmit}
            value={value}
            onChange={event => setValue(event.target.value)}
         />
      </div>
   )
}