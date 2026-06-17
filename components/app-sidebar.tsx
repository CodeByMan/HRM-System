import Link from "next/link";
import Image from "next/image";

import {
  Home,
  Search,
  Send,
  Users,
  SquareKanban,
  UsersRound,
  Coins,
  FileChartColumnIncreasing,
  Columns4,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { ROLE } from "@/enum";

import type { SessionType } from "@/types";

const userItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Apply for Leave",
    url: "/leave/apply",
    icon: Send,
  },
  {
    title: "My Leaves",
    url: "/leave/history",
    icon: Search,
  },
  {
    title: "Policies",
    url: "/policies",
    icon: Columns4,
  },
];

const managerItems = [
  {
    title: "Leave Requests",
    url: "/manager/requests",
    icon: SquareKanban,
  },
  {
    title: "Team Overview",
    url: "/manager/team",
    icon: Users,
  },
];

const adminItems = [
  {
    title: "Users",
    url: "/admin/users",
    icon: UsersRound,
  },
  {
    title: "Leave Balances",
    url: "/admin/balances",
    icon: Coins,
  },
  {
    title: "Leave Management",
    url: "/admin/leave-types",
    icon: FileChartColumnIncreasing,
  },
  {
    title: "Policies Management",
    url: "/admin/policies",
    icon: Columns4,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export const AppSidebar = ({ session }: { session: SessionType }) => {
  const isManager =
    session.user?.role === ROLE.MANAGER || session.user?.role === ROLE.ADMIN;

  const isAdmin = session.user?.role === ROLE.ADMIN;

  return (
    <Sidebar className="border-sidebar-border/80 bg-sidebar/95 shadow-2xl shadow-primary/10 backdrop-blur-xl">
      <SidebarHeader className="border-b border-sidebar-border/70 py-6">
        <Link href="/dashboard" className="mx-auto block">
          <Image
            src="/favicon.png"
            alt="HRMS logo"
            height={80}
            width={80}
            className="h-16 w-16 rounded-2xl border border-border/70 bg-card/70 object-contain p-2 shadow-xl shadow-primary/10 transition hover:-translate-y-0.5 hover:shadow-primary/20"
            priority
          />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold uppercase tracking-[0.16em] text-sidebar-primary/80">
            Your Tools
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {userItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="rounded-xl font-semibold transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground"
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {isManager && (
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold uppercase tracking-[0.16em] text-sidebar-primary/80">
              Team Management
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {managerItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="rounded-xl font-semibold transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground"
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {isAdmin && (
          <SidebarGroup>
            <SidebarGroupLabel className="font-bold uppercase tracking-[0.16em] text-sidebar-primary/80">
              Administrator
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {adminItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="rounded-xl font-semibold transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground"
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
};