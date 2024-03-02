"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const tools = [
  {
    lable: "Conversation",
    icon: MessageSquare,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/conversation"
  },
  {
    lable: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image"
  },
  {
    lable: "Video Generation",
    icon:  VideoIcon,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    href: "/video"
  },
  {
    lable: "Code Generation",
    icon: CodeIcon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/code"
  },
  
  {
    lable: "Music Generation",
    icon: MusicIcon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-700/10",
    href: "/music"
  }
]

export default function DashboardPage() {
   const router = useRouter();
  return (
      <div>
    <div className="mb-8 space-y-5">
      <h2 className="text-2xl md:text-4xl text-center">
        Explore The Power Of AI
      </h2>
      <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Chat with our AI and explore the world of AI 
      </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4 m-2">
        {tools.map((tool)=>(
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer">
             <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                 <tool.icon className={cn("w-5 h-5",tool.color)}/>
              </div>
              <div className="font-semibold">
                  {tool.lable}
              </div>
             </div>
             <ArrowRight className="w-6 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  )
}