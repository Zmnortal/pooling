import { FC } from "react"
import PGiganticButton from "../../components/common/PGiganticButton"

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

        <div className="w-[800px] mt-[56.52px] flex justify-between">
          <PGiganticButton>Live 2024</PGiganticButton>
          <PGiganticButton>Contact Sales</PGiganticButton>
        </div>
      </div>

      <div className="px-[42rem]">
        <div className="pt-[82px] pb-[164px] flex justify-center">
          <div className="h-[72px] w-[905px] bg-[url('src/assets/powered_by_bar.png')]" />
        </div>

        <div className="flex justify-center">
          <div className="pt-[16px] h-[160px] w-[1060px] flex flex-col justify-center items-center bg-[url('src/assets/bg_circles2.svg')]">
            <div className="font-playfair text-[52px] font-bold leading-[69.32px]">
              Pooling Research & Sampling Platform
            </div>

            <div className="font-playfair text-[40px] font-bold leading-[53.32px]">
              Live 2024
            </div>
          </div>
        </div>

        <div className="pt-[150px] flex">
          <div className="flex-1 bg-[#DBC6B9]">

          </div>

          <div className="flex-1 pl-[100px]">
            <div className="w-[423px] my-[32px] text-[45px] font-bold font-playfair leading-[53px]">Describe your target group to distribute. We do the rest.</div>
            
            <div className="w-[378px] text-[22px] font-normal font-playfair leading-[25px]">We help you reduce sampling bias that damages your research accuracy.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
