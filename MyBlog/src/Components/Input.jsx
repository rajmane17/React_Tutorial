import React from 'react'
import { forwardRef } from 'react'
import { useId } from 'react'

function Input({
  placeholder = "",
  label,
  type = "text",
  className = "",
  ...props
})
{

  const id = useId();
  return (
    <div>
      {
        label && <label htmlFor={label}>{label}</label>
      }
      {
        <input type={type} placeholder={placeholder} className={`px-4 py-2 rounded-lg`} ref={ref} id={id} />
      }
    </div>
  )
}

export default forwardRef(Input)
