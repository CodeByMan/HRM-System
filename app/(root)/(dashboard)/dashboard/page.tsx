import Link from "next/link";
import LeaveRemarks from "@/components/LeaveRemarksForm";
import ToastError from "@/components/toast-error";

import { LEAVE_STATUS } from "@/enum";
import { redirect } from "next/navigation";
import { getUserLeavesByStatus } from "@/lib/helpers/dashboard";
import { clipText, cn, formatDate, getLeaveStatusClass } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Home = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user.id) {
    redirect("/login");
  }

  const [pendingLeaves, approvedLeaves] = await Promise.all([
    getUserLeavesByStatus(session.user.id, [
      LEAVE_STATUS.PENDING,
      LEAVE_STATUS.ACCEPTED,
    ]),
    getUserLeavesByStatus(
      session.user.id,
      [LEAVE_STATUS.APPROVED, LEAVE_STATUS.REJECTED],
      2
    ),
  ]);

  if (!pendingLeaves || !approvedLeaves) {
    return <ToastError message="Error fetching leaves data." />;
  }

  return (
    <>
      <div className="mb-8 rounded-3xl border border-border/80 bg-card/70 p-6 shadow-xl shadow-primary/10 backdrop-blur-xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.22em] text-primary">Dashboard</p>
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Hi, <span className="aurora-text-gradient">{session?.user?.name?.split(" ")[0]}</span>
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Review recent leave activity, pending approvals, and HR workflow updates in your dashboard.
        </p>
      </div>

      <section className="mb-8">
        <h3 className="mb-3 text-lg font-black text-foreground">
          Recent Leaves
        </h3>
        <div className="aurora-card overflow-hidden rounded-2xl">
          <Table>
            {approvedLeaves.length === 0 ? (
              <TableCaption>No applied leave.</TableCaption>
            ) : null}

            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {approvedLeaves.map((leave, index) => (
                <TableRow key={leave.leave.id} className="relative isolate">
                  <TableCell>
                    <Link
                      href={`/leave/view/${leave.leave.id}`}
                      className="absolute inset-0"
                    ></Link>
                    {index + 1}
                  </TableCell>
                  <TableCell>{formatDate(leave.leave.fromDate)}</TableCell>
                  <TableCell>{formatDate(leave.leave.toDate)}</TableCell>
                  <TableCell>{leave.leaveType?.name}</TableCell>
                  <TableCell>{leave.leave.numberOfDays}</TableCell>
                  <TableCell
                    className={cn(
                      "font-medium",
                      getLeaveStatusClass(leave.leave.leaveStatus)
                    )}
                  >
                    {leave.leave.leaveStatus}
                  </TableCell>
                  <TableCell>{clipText(leave.leave.reason)}</TableCell>
                  <TableCell>
                    <LeaveRemarks
                      leaveId={leave.leave.id}
                      leaveStatus={leave.leave.leaveStatus}
                      remarkCount={leave.remarkCount}
                      session={session}
                      bubbleUp
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-black text-foreground">
          Applied Leaves
        </h3>
        <div className="aurora-card overflow-hidden rounded-2xl">
          <Table>
            {pendingLeaves.length === 0 ? (
              <TableCaption>No leave requested.</TableCaption>
            ) : null}

            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingLeaves.map((leave, index) => (
                <TableRow key={leave.leave.id} className="relative isolate">
                  <TableCell>
                    <Link
                      href={`/leave/view/${leave.leave.id}`}
                      className="absolute inset-0"
                    ></Link>
                    {index + 1}
                  </TableCell>
                  <TableCell>{formatDate(leave.leave.fromDate)}</TableCell>
                  <TableCell>{formatDate(leave.leave.toDate)}</TableCell>
                  <TableCell>{leave.leaveType?.name}</TableCell>
                  <TableCell>{leave.leave.numberOfDays}</TableCell>
                  <TableCell
                    className={cn(
                      "font-medium",
                      getLeaveStatusClass(leave.leave.leaveStatus)
                    )}
                  >
                    {leave.leave.leaveStatus}
                  </TableCell>
                  <TableCell>{clipText(leave.leave.reason)}</TableCell>
                  <TableCell>
                    <LeaveRemarks
                      leaveId={leave.leave.id}
                      leaveStatus={leave.leave.leaveStatus}
                      remarkCount={leave.remarkCount}
                      session={session}
                      bubbleUp
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default Home;
