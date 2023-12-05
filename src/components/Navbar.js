import { Component } from "react"
import {
  
  Link
} from "react-router-dom"

export class Navbar extends Component {
  

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsRadio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
       <li className="nav-item"> <Link className="nav-link" style={{backgroundColor: 'lightblue', color:'white'}} aria-current="page" to="/business">business</Link> </li>
       <li className="nav-item"> <Link className="nav-link" style={{backgroundColor: 'indigo', color:'white'}} aria-current="page" to="/entertainment">entertainment </Link></li>
       <li className="nav-item"><Link className="nav-link" style={{backgroundColor: 'brown', color:'white'}} aria-current="page" to="/general">general </Link></li>
       <li className="nav-item"> <Link className="nav-link" style={{backgroundColor: 'grey', color:'white'}} aria-current="page" to="/health">health </Link></li>
       <li className="nav-item"><Link className="nav-link" style={{backgroundColor: 'yellow', color:'black'}} aria-current="page" to="/sciencesports">sciencesports </Link> </li>
       <li className="nav-item"> <Link className="nav-link" style={{backgroundColor: 'orange', color:'white'}} aria-current="page" to="technology/">technology </Link></li>
        
       
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
