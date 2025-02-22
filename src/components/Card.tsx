import grainImage from "@/assets/images/grid.png"
import { ComponentPropsWithoutRef, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"
export const Card = ({className, children, ...other}: ComponentPropsWithoutRef<'div'>)=> {
    return(
        <div 
            className={twMerge(
                "bg-gray-600 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6 transition-all duration-700 transform opacity-0 translate-y-4 motion-safe:opacity-100 motion-safe:translate-y-0",
                className
            )}
            {...other}
        >
            <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`
            }}></div>
            {children}
        </div>
    )
}
