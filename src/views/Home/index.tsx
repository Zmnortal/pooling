import { FC } from "react"
import PButton from "../../components/common/PButton"

const Home: FC = ()  => {
  return (
    <div>
      <div className="w-full h-[700px] flex flex-col justify-center items-center bg-[url('src/assets/bg_circles.svg')] bg-cover">
        <div className="font-playfair text-[86px] font-bold leading-[114.64px]">
          Simplify your sampling process.
        </div>

        <div className="mt-[59.32px] font-playfair font-normal text-[28px] leading-[37.32px]">
          Your go-to research and sampling platform. Reach your ideal participants in one click.
        </div>

        <div className="w-[400px] mt-[56.52px] flex justify-between">
          <PButton>Live 2024</PButton>
          <PButton>Contact Sales</PButton>
        </div>
      </div>
    </div>
  )
}

export default Home
