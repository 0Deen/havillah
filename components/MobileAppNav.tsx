"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BriefcaseBusiness, MapPinned, Image as ImageIcon, MessageCircle } from "lucide-react";
const items=[{href:"/",label:"Home",Icon:Home},{href:"/jobs",label:"Jobs",Icon:BriefcaseBusiness},{href:"/destinations",label:"Places",Icon:MapPinned},{href:"/gallery",label:"Gallery",Icon:ImageIcon},{href:"/contact",label:"Contact",Icon:MessageCircle}];
export default function MobileAppNav(){const pathname=usePathname();return <nav className="mobile-app-nav" aria-label="Quick mobile navigation">{items.map(({href,label,Icon})=><Link href={href} key={href} aria-current={pathname===href?"page":undefined} className={pathname===href?"active":""}><Icon size={19} strokeWidth={2}/><span>{label}</span></Link>)}</nav>}
