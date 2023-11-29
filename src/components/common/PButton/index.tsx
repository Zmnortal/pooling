import { CSSProperties, FC, PropsWithChildren } from "react"
import clsx from 'clsx'

interface Props extends PropsWithChildren {
  style?: CSSProperties
  className?: string
  type?: 'default' | 'ghost' | 'primary'
}

const PButton: FC<Props> = (props) => {
  const {
    className,
    style,
    type = 'default',
    children
  } = props

  return (
    <button
      className={
        clsx(
          'btn',
          'h-[27px]',
          'min-h-[27px]',
          'text-xs',
          {
            'btn-primary': type === 'primary',
            'btn-ghost': type === 'ghost'
          },
          className
        )
      }
      style={style}
    >
      { children }
    </button>
  )
}

export default PButton
