import { cn } from "@/lib/utils"


const CustomButton = ({
    disabled,
    isRounded,
}:{
    disabled: boolean,
    isRounded: boolean
}) => {
  return (
    // <button className={`text-sm ${disabled ? "bg-blue-300" : "bg-blue-500"} ${isRounded && "rounded-full"}`}>
    //     Hello
    // </button>

<button className={cn("text-sm", )}>Hello</button>

  )
}

export default CustomButton
