import Link from "next/link"
import { IoLogIn } from "react-icons/io5"

interface ButtonProps {
  href: string
  text: string
  icon?: React.ReactNode
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ 
  href, 
  text = "Button", 
  icon = <IoLogIn />, 
  className = ""
}) => {
  return (
    <Link href={href} className={`btn flex items-center ${className}`}>
      {icon && <span className="icon mr-2">{icon}</span>}
      {text}
    </Link>
  )
}
