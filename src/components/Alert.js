import { useContext } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Alert = () => {
   const {alert, hide} = useContext(AlertContext);

   if (!alert) return null

   return (
      <div 
         className={`alert alert-${alert.type || 'info'} alert-dismissible fade show`} 
         role="alert"
      >
         {alert.text}
         <button type="button" className="close" onClick={hide} data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
         </button>
      </div>
   )
}