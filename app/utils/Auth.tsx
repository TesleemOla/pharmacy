import {ReactNode} from "react"

interface Inode{
    children : ReactNode
}
export const isAuthenticated=({children}:Inode)=>{
    return <div>
        {children}
    </div>
}

