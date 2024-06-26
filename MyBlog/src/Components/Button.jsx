import React from 'react'
import {useId, forwardRef} from "react"

const Button = ({
  children,
  bgColor ="bg-slate-700",
  textColor = "text-white",
  type="button",
  ...props
}) => {
  const id = useId()
  return (
    <button className={`text-center py-3 px-1 rounded-sm ${bgColor} ${textColor}`} type={type} id={id}>
      {children}
    </button>
  )
}

export default forwardRef(Button)
