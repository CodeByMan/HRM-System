"use client";

import React, { useState } from "react";
import Link from "next/link";

import { authClient } from "@/lib/auth-client";
import { SidebarTrigger } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { SetTheme } from "./set-theme";
import { LoaderCircle } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { SessionType } from "@/types";

export const Header = ({ session }: { session: SessionType }) => {
  const [loggingOut, setLoggingOut] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-card/75 shadow-lg shadow-primary/5 backdrop-blur-xl">
      <div className="flex items-center justify-between py-4 pr-6 pl-4 lg:pr-10">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="text-primary hover:bg-accent hover:text-accent-foreground" />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground">HR Management System</p>
            <p className="text-xs text-muted-foreground">Employee leave operations dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SetTheme />

          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full border border-border/80 bg-background/60 p-1 shadow-sm transition hover:ring-2 hover:ring-primary/30">
              <Avatar className="size-10">
                <AvatarImage src={session.user?.image || ""} />
                <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                  {getInitials(session.user?.name || "")}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="aurora-card">
              <DropdownMenuLabel>
                {session.user?.name || "My Account"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={async () => {
                  setLoggingOut(true);
                  await authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        setLoggingOut(false);
                        window.location.reload();
                      },
                    },
                  });
                }}
              >
                Logout{" "}
                {loggingOut && (
                  <LoaderCircle className="inline-block animate-spin" />
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
