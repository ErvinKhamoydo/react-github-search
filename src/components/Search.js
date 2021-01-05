import { useContext, useState } from "react"
import { AlertContext } from "../context/alert/alertContext"
import { GitHubContext } from "../context/github/githubContext";

export const Search = () => {
   const [value, setValue] = useState('');
   const {show, hide} = useContext(AlertContext);
   const github = useContext(GitHubContext);

   const onSubmit = event => {
      if (event.key !== 'Enter') {
         return
      }

      github.clearUsers();

      if (value.trim()) {
         github.search(value.trim())
         hide()
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