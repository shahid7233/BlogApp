import React, { useId } from 'react'

const Input = React.forwardRef(function Input (
  { label, type = 'text', className = '', ...props },
  ref
) {

    const id = useId()

    return (
      <div className="w-full">

        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <input
          type={type}
          ref={ref}
          {...props}
          id={id}
          className={`w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ${className}`}
        />

      </div>
    )
})

export default Input
