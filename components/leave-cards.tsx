import React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface LeaveCardsProps {
  userLeaves: {
    id: string;
    name: string;
    maxAllowed: number | null;
    taken: number;
  }[];
}

export const LeaveCards = ({ userLeaves }: LeaveCardsProps) => {
  if (userLeaves.length === 0) {
    return (
      <section className="mb-8">
        <p>
          An Error Occured while fetching user leave stats, please refresh and
          try again.
        </p>
      </section>
    );
  }

  return (
    <section className="mb-8">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] gap-4">
        {userLeaves.map((userLeave) => (
          <Card key={userLeave.id} className="gap-4 overflow-hidden border-0 bg-gradient-to-br from-card/95 via-card/85 to-secondary/70">
            <CardHeader>
              <CardTitle className="aurora-text-gradient text-3xl font-black">
                {userLeave.taken}
                {userLeave.maxAllowed ? `/${userLeave.maxAllowed}` : ``}
              </CardTitle>
              <CardDescription className="font-semibold">{userLeave.name}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
