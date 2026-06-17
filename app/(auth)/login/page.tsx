import React from "react";
import Image from "next/image";
import Link from "next/link";

import { LoginForm } from "@/components/login-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session && session.user.id) {
    redirect("/dashboard");
  }

  return (
    <main className="aurora-page-shell relative flex min-h-svh items-center justify-center overflow-hidden p-4 text-foreground sm:p-6 lg:p-8">
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/15" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-fuchsia-300/25 blur-3xl dark:bg-fuchsia-400/15" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-400/10" />

      <div className="grid w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/75 shadow-2xl shadow-primary/15 backdrop-blur-2xl lg:grid-cols-[1fr_0.9fr]">
        {/* Left Content */}
        <section className="relative hidden overflow-hidden bg-gradient-to-br from-cyan-300/35 via-violet-400/30 to-fuchsia-300/35 p-7 dark:from-cyan-400/15 dark:via-violet-500/20 dark:to-fuchsia-400/15 lg:block">
          <div className="absolute inset-5 rounded-[1.5rem] border border-white/25 bg-white/15 backdrop-blur-md dark:bg-white/5" />

          <div className="relative z-10 flex h-full min-h-[430px] flex-col justify-center">
            <p className="mb-3 inline-flex w-fit rounded-full bg-white/50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-primary backdrop-blur dark:bg-white/10">
              Smart HR Workflow
            </p>

            <h1 className="max-w-sm text-3xl font-black leading-tight tracking-tight text-foreground">
              Employee leave management made simple.
            </h1>

            <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-muted-foreground">
              Manage employees, approvals, balances, and HR policies from one
              secure dashboard.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Employees", "Leave Flow", "Policies", "Approvals"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/30 bg-white/35 px-4 py-2.5 text-sm font-bold text-foreground backdrop-blur dark:bg-white/10"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Right Form */}
        <section className="flex min-h-[430px] items-center justify-center p-6 sm:p-7 lg:p-8">
          <div className="mx-auto w-full max-w-sm">
            <div className="mb-4 flex justify-center">
              <Link
                href="/"
                aria-label="Go to landing page"
                className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border/70 bg-card/80 p-3 shadow-xl shadow-primary/15 backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-primary/25"
              >
                <Image
                  src="/favicon.png"
                  alt="HR Management System Logo"
                  width={56}
                  height={56}
                  priority
                  className="h-14 w-14 object-contain"
                />
              </Link>
            </div>

            <LoginForm />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
