import Image from "next/image"

export const Loader = () => {
    return(
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
             <div className="relative w-10 h-10 animate-bounce">
             <Image
                alt="Logo"
                fill
                src="/logo.png"
               />
         </div>
         <p className="text-sm text-muted-foreground">
            ProTalk Is Thinking
         </p>
        </div>
    )
};