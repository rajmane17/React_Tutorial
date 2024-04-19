import { forwardRef } from "react"
import { useId } from "react"

const Input = forwardRef( function Input ({
    label,
    type= "text",
    className="",
    ...props
}, ref) {

    const id = useId()
    return (
        <>
        {
            label && (
                <label htmlFor={id}>
                    {label}
                </label>
            )
        }
        <input type={type} className={`${className}`} ref={ref} id={id}/>
        </>
    )
})



export default Input
