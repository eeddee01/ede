import Link from 'next/link'
import Style from '../../../styles/Nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
export default function Nav() {
  return (
    <>
      <nav className={Style.nav}>
        <h1>ed</h1>
        <ul>
          <li><Link href="/"><FontAwesomeIcon size="lg" icon={faHome} /></Link></li>
        </ul>
      </nav>
    </>
  )
}
  