"use client";

import Link from "next/link";
import {useAuth,useClerk} from "@clerk/nextjs";
import { ListVideoIcon, ThumbsUpIcon, HistoryIcon} from "lucide-react";
import {SidebarGroup,SidebarGroupContent,SidebarMenu,SidebarMenuButton,SidebarMenuItem,SidebarGroupLabel} from "@/components/ui/sidebar";

const items=[
    {
        title:"History",
        url:"/playlist/history",
        icon:HistoryIcon,
        auth:true
    },
    {
        title:"Liked Videos",
        url:"/playlists/liked",
        icon:ThumbsUpIcon,
        auth:true  
    },
    {
        title:"All Playlists",
        url:"/playlists",
        icon:ListVideoIcon,
        auth:true
    }
]

export default function PersonalSection()
{
    const clerk=useClerk();
    const {isSignedIn}=useAuth();
    return(
        <SidebarGroup>
            <SidebarGroupLabel>You</SidebarGroupLabel>
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