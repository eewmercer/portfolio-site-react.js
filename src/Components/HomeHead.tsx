import '../App.scss'
import nameIntro from '../assets/nameIntro.svg'

function HomeHead() {

  return (
      <>
        <nav className='nav-menu'>
          <img src={nameIntro}/>
          <ul className='nav-menu-items'>
            <li><div>Home</div></li>
            <li><div>About</div></li>
            <li><div>Projects</div></li>
            <li><div>Skills</div></li>
          </ul>
        </nav>
      </>
  )
}

export default HomeHead