"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, Settings, VideoIcon } from "lucide-react";

const montserret=Montserrat({weight:"500", subsets:["latin"] });

const routes = [
    {
        lable: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        lable: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-orange-500",
    },
    {
        lable: "ImageGeneration",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-500",
    },
    {
        lable: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-green-500",
    },
    {
        lable: "Code Generation",
        icon: CodeIcon,
        href: "/code",
        color: "text-emerald-500",
    },
    {
        lable: "Music Generation",
        icon: MusicIcon,
        href: "/music",
        color: "text-yellow-500",
    },
    {
        lable: "Setting",
        icon: Settings,
        href: "/setting",
        color: "text-silver-500",
    }
]

const SideBar = () => {
    const pathname = usePathname();
    return(
        <div className="space-y-4 py-3 flex flex-col h-full bg-[#35363d] text-white ">
           <div className="px-3 py-2 flex-1">
            <Link href="/dashboard">
               <div className="relative w-8 h-8 mr-4">
                   <Image
                   fill
                   sizes="10px"
                   alt="Logo"
                   src="/logo.png" />
                </div> 
                  <h1 className={cn("text-2xl font-bold mb-10", montserret.className)}>
                    ProTalk
                    </h1>
            </Link>
            <div>
                {routes.map((route) =>(
                    <Link
                    href={route.href}
                    key={route.href}
                    className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",)}>
                        <div className="flex items-center flex-1">
                              <route.icon className={cn("h-5 w-5 mr-3", route.color
                              )}/>
                              {route.lable}
                        </div>
                    </Link>
                ))}
            </div>
           </div>
        </div>
    )
}

export default SideBar;