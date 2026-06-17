import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <main className="aurora-page-shell relative min-h-svh overflow-hidden px-6 text-foreground sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -left-40 -top-44 h-[34rem] w-[34rem] rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/15" />
        <div className="absolute right-[-12rem] top-[-10rem] h-[38rem] w-[38rem] rounded-full bg-fuchsia-300/25 blur-3xl dark:bg-fuchsia-400/15" />
        <div className="absolute bottom-[-16rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-400/15" />
      </div>

      {/* Top-right Login Button */}
      <div className="absolute right-6 top-6 z-40 sm:right-10 lg:right-14">
        <Link
          href="/login"
          className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary/90"
        >
          Login
        </Link>
      </div>

      <section className="relative z-10 flex min-h-svh items-center py-10">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <p className="mb-5 inline-flex rounded-full border border-border/70 bg-card/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-primary shadow-sm backdrop-blur">
              Smart HR Workflow
            </p>

            <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-[0.04em] text-foreground sm:text-6xl md:text-7xl xl:text-8xl">
              Human Resource
              <br />
              <span className="aurora-text-gradient">Management</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-muted-foreground sm:text-base lg:text-lg">
              Manage employees, leave requests, approvals, policies, balances,
              and role-based HR operations from one polished dashboard.
            </p>
          </div>

          {/* Right Image */}
          <div id="overview" className="relative">
            <div className="pointer-events-none absolute inset-x-8 top-10 h-56 rounded-full bg-gradient-to-r from-cyan-300/25 via-violet-300/25 to-fuchsia-300/25 blur-3xl dark:from-cyan-400/10 dark:via-violet-400/15 dark:to-fuchsia-400/10" />

            <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/65 p-3 shadow-2xl shadow-primary/10 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-5 dark:bg-card/50">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-fuchsia-300/10 dark:from-cyan-400/10 dark:to-fuchsia-400/10" />

              <Image
                src="/leave-management-system.png"
                alt="Employee leave management calendar illustration"
                width={850}
                height={386}
                priority
                className="relative z-10 mx-auto w-full rounded-[1.5rem] object-contain shadow-xl shadow-violet-500/10 dark:brightness-90 dark:saturate-125"
              />
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="relative z-30 px-6 pb-5 text-center text-xs font-semibold text-muted-foreground sm:text-sm"
      >
        HR Management System · Developed by Muhammad Ali Nawaz
      </footer>
    </main>
  );
};

export default LandingPage;