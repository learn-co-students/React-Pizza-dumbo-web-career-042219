import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pieDeets.topping}</td>
      <td>{props.pieDeets.size}</td>
      <td>{props.pieDeets.vegetarian.toString()}</td>
      <td><button type="button" 
      			  className="btn btn-primary"
      			  onClick={props.editPie} 
      			  id={props.pieDeets.id} >Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
