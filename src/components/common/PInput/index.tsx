import { FC } from "react";
import clsx from "clsx";

interface Props extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {

}

const PInput: FC<Props> = (props) => {
  const { 
    className, 
     ...otherProps
    } = props

  return (
    <input
      className={clsx('input h-[60px] bg-white opacity-60', className)}
      type="text"
      {...otherProps}
    />
  )
}

export default PInput
