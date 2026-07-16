"use client"

import * as React from "react"

import { NavResources } from "@/components/nav-resources"
import { NavProcurements } from "@/components/nav-procurements"
import { NavMiscellaneous } from "@/components/nav-miscellaneous"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  GalleryVerticalEndIcon,
  AudioLinesIcon,
  TerminalIcon,
  HandCoinsIcon,
  ShoppingCartIcon,
  MonitorSmartphoneIcon,
  HardDriveIcon,
  KeyboardIcon,
  DropletsIcon,
  SaveIcon,
  UsersIcon,
  FileIcon,
  BotMessageSquareIcon,
} from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: <GalleryVerticalEndIcon />,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: <AudioLinesIcon />,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: <TerminalIcon />,
      plan: "Free",
    },
  ],
  procurements: [
    {
      title: "Purchases",
      url: "#",
      icon: <ShoppingCartIcon />,
      flatItems: [
        {
          title: "Create Purchase Request",
          url: "#",
          icon: <ShoppingCartIcon />,
        },
      ],
      items: [
        {
          title: "Purchase Requests",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Payables",
      url: "#",
      icon: <HandCoinsIcon />,
      items: [
        {
          title: "Inbox",
          url: "#",
        },
        {
          title: "Bills",
          url: "#",
        },
        {
          title: "Batch Payments",
          url: "#",
        },
        {
          title: "Payment History",
          url: "#",
        },
        {
          title: "Vendor Credits",
          url: "#",
        },
      ],
    },
  ],
  resources: [
    {
      name: "Assets",
      url: "#",
      icon: <MonitorSmartphoneIcon />,
    },
    {
      name: "Components",
      url: "#",
      icon: <HardDriveIcon />,
    },
    {
      name: "Peripherals",
      url: "#",
      icon: <KeyboardIcon />,
    },
    {
      name: "Consumables",
      url: "#",
      icon: <DropletsIcon />,
    },
    {
      name: "Licenses",
      url: "#",
      icon: <SaveIcon />,
    },
  ],
  miscellaneous: [
    {
      name: "Users",
      url: "#",
      icon: <UsersIcon />,
    },
    {
      name: "Files",
      url: "#",
      icon: <FileIcon />,
    },
    {
      name: "Chatbot",
      url: "#",
      icon: <BotMessageSquareIcon />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProcurements procurements={data.procurements} />
        <NavResources resources={data.resources} />
        <NavMiscellaneous miscellaneous={data.miscellaneous} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
