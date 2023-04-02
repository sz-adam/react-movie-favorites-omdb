
import '../styles/Header.css'
import {Link} from 'react-router-dom'
export default function Header({menu}){ 
    return (
        <div className="navbar">
            <div className="navbar-left"><p className='omdb'>OMDB</p> <p className='omovie'>Movie</p> </div>
            <div className="navbar-right">
               {menu.filter(e=>e.menubar ===true).map(element => <Link key={element.path} to={element.path}>{element.name}</Link>)}   
            </div>
        </div>
    )
}