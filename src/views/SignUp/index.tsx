import { FC } from "react"
import PCard from "../../components/common/PCard"
import PInput from "../../components/common/PInput"
import PButton from "../../components/common/PButton"
import PTitle from "../../components/common/PTitle"

const SignUp: FC = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div>
          START FOR FREE
        </div>

        <div>
          Create new account.
        </div>

        <div className="flex">
          <PCard className="p-[50px]" bodyClass="p-0">
            <form>
              <div className="py-2">
                <PTitle>Create your email account</PTitle>
                <PInput />

                <PButton>Send</PButton>
              </div>

              <div>
                <PInput />

                <PButton>Check</PButton>
              </div>
            </form>

            <form>
              <div className="py-2">
                <PTitle>Password</PTitle>
              </div>

              <div className="py-2">
                <PInput />
              </div>

              <div>
                <PInput />
              </div>
            </form>
          </PCard>

          <PCard>
            <form>
              <div className="py-2">
                <PTitle>Personal details</PTitle>
              </div>

              <div className="py-2">
                <PInput />
              </div>

              <div className="flex">
                <PInput />

                <PInput />
              </div>
            </form>

            <form>
              <div className="py-2">
                <PTitle>Area</PTitle>
              </div>

              <div className="py-2">
                <PInput />
              </div>

              <div>
                <PInput />
              </div>
            </form>
          </PCard>
        </div>
      </div>
    </div>
  )
}

export default SignUp
