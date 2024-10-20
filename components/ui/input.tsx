import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex rounded-md bg-white py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-stone-950 placeholder:text-stone-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-800 dark:bg-stone-950 dark:file:text-stone-50 dark:placeholder:text-stone-400 w-full h-10 bg-transparent border border-[#474648]/50 outline-0 text-white px-1.5 placeholder:text-white/50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
