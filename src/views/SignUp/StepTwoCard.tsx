import { FC } from "react"
import PCard from "../../components/common/PCard"
import PTitle from "../../components/common/PTitle"
import PInput from "../../components/common/PInput"
import FormRow from "./FormRow"

const StepTwoCard: FC = () => {
  return (
    <PCard className="w-[1120px] p-[50px] pr-[70px]" bodyClass="p-0">
      <form>
        <PTitle>You are</PTitle>

        <FormRow className="mr-[700px]">
          <PInput />
        </FormRow>

        <FormRow className="mr-[380px]">
            <PInput label="Institute" />
            <PInput label="Title" />
        </FormRow>

        <FormRow>
          <PInput  />
        </FormRow>

        <FormRow>
          <PInput />
        </FormRow>

        <FormRow>
          <PInput />
        </FormRow>
      </form>
    </PCard>
  )
}

export default StepTwoCard
