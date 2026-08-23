"use client";

import Link from "next/link";
import {useAuth,useClerk} from "@clerk/nextjs";
import {HomeIcon,FlameIcon,PlayIcon} from "lucide-react";
import {SidebarGroup,SidebarGroupContent,SidebarGroupLabel,SidebarMenu,SidebarMenuButton,SidebarMenuItem} from "@/components/ui/sidebar";

const items=[
    {
        title:"Home",
        url:"/",
        icon:HomeIcon
    },
    {
        title:"Trending",
        url:"/feed/trending",
        icon:FlameIcon  
    },
    {
        title:"Subscriptions",
        url:"/feed/subscriptions",
        icon:PlayIcon,
        auth:true
    }
]

export default function MainSection()
{
    const clerk=useClerk();
    const {isSignedIn}=useAuth();
    return(
        <SidebarGroup>
            <SidebarGroupLabel>Home</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item)=>(
                        <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton
                            tooltip={item.title}
                            isActive={false}
                            render={
                                <Link href={item.url} className="flex items-center gap-4">
                                    <item.icon />
                                    <span className="text-sm">{item.title}</span>
                                </Link>
                            }
                            onClick={(e)=>{
                                if(!isSignedIn && item.auth){
                                    e.preventDefault();
                                    return clerk.openSignIn();
                                }
                            }}
                            />
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}