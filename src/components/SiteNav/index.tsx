import { FC } from "react"
import { Link } from 'react-router-dom'
import logoSrc from '../../assets/logo.png'
import PButton from "../common/PButton"

const SiteNav: FC = () => {
  return (
    <header>
      <nav className="h-[45px] pl-[66px] pr-[123px] pr bg-[#302929] flex items-center justify-between">
        <Link to='/'><img className="h-[32px] w-[26px]" src={logoSrc} /></Link>

        <div>
          <PButton className="text-white" type="ghost">Home</PButton>
          <PButton className="text-white" type="ghost">Sign in</PButton>
          <PButton>Sign Up</PButton>
        </div>
      </nav>
    </header>
  )
}

export default SiteNav
