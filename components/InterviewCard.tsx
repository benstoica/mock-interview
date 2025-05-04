import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechStack from "./DisplayTechStack";

const InterviewCard = (props: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedInterviewType = /mix/gi.test(props.type)
    ? "Mixed"
    : props.type;
  const formattedDate = dayjs(
    feedback?.createdAt || props.createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedInterviewType}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />
          <h3 className="mt-5 capitalize">{props.role} interview</h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image src="calendar.svg" alt="calendar" width={22} height={22} />
              <p>{formattedDate}</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" alt="star" width={22} height={22} />
              <p>{feedback?.totalScore ?? "---"}/100</p>
            </div>
          </div>

          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment ??
              "You haven't interviewed yet, Interview now to improve your skills."}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <DisplayTechStack techStack={props.techstack} />
          <Button className="btn-primary">
            <Link
              href={
                feedback
                  ? `/interview/${props.interviewId}/feedback`
                  : `/interview/${props.interviewId}`
              }
            />
            {feedback ? "View Feedback" : "Start Interview"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
