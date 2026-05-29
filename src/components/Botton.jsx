import React from "react";

function Button (
    {
      children,
      type="button",
      textColor="text-white",
      className = '',
      ...props
    }
){
    return (
        <button 
          type={type} 
          className={`px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 font-medium ${textColor} ${className}`}
          {...props}
        >
            {children}
        </button>
    )
}

export default Button;