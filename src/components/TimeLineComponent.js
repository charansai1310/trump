import React, { useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import InfoCard from "./InfoCard";
const TimeLineComponent = () => {
  const items = [
    {
      date: "November 15, 2022",
      title: "Trump announces his candidacy.",
      summary:
        "Donald Trump officially announced his run for the 2024 presidential election, marking the beginning of his campaign.",
    },
    {
      date: "January 23, 2023",
      title: "Trump visits New Hampshire for his first rally",
      summary:
        "Donald Trump held a rally in New Hampshire to engage with voters ahead of the 2024 Republican primary season.",
    },
    {
      date: "March 25, 2023",
      title: "Trump's first major rally of the campaign season in Waco, Texas",
      summary:
        "Trump held a large rally in Waco, Texas, marking his first major public campaign event after officially announcing his candidacy.",
    },
    {
      date: "August 23, 2023",
      title: "First Republican Primary Debate.",
      summary:
        "The first primary debate between Republican candidates took place in Milwaukee, Wisconsin. Trump opted not to attend but was still central to the conversation.",
    },
    {
      date: "September 27, 2023",
      title: "Second Republican Primary Debate.",
      summary:
        "The second Republican primary debate took place, with several candidates challenging Donald Trump's leading position in the race. The debate featured heated exchanges as contenders discussed various issues, including the economy, foreign policy, and immigration. While Trump chose to participate in the event remotely, his absence allowed other candidates to voice their stances and differentiate themselves in front of the primary voters.",
    },
    {
      date: "December 19, 2023",
      title: "Colorado Supreme Court Rules Trump Ineligible for 2024 Ballot ",
      summary:
        "The Colorado Supreme Court ruled in Anderson v. Griswold that Trump is ineligible to hold office under section three of the Fourteenth Amendment to the United States Constitution and cannot appear on the ballot for the 2024 United States presidential election in Colorado.",
    },
    {
      date: "January 21, 2024",
      title: "Ron DeSantis Suspends Campaign and Endorses Trump",
      summary:
        "Florida governor Ron DeSantis suspended his campaign and endorsed Trump. The departure of DeSantis left Trump and Haley as the only remaining major candidates for the Republican presidential nomination.",
    },
    {
      date: "March 4, 2024",
      title: "U.S. Supreme Court Overturns Colorado Ruling Disqualifying Trump",
      summary:
        "Former U.N. Ambassador Nikki Haley suspended her campaign for the Republican presidential nomination. Haley's exit left Trump as the uncontested Republican nominee, with her endorsement expected to play a role in the party's unification ahead of the general election.",
    },
    {
      date: "March 6, 2024",
      title: "Nikki Haley Suspends Campaign and Endorses Trump",
      summary:
        "The United States Supreme Court unanimously overturned the Colorado Supreme Court's decision to disqualify Donald Trump from the state's primary ballot. The U.S. Supreme Court’s decision allowed Trump to remain a candidate in Colorado's Republican primary, reversing the state-level legal challenges to his eligibility.",
    },
    {
      date: "June 27, 2024",
      title: "First Presidential Debate: Trump vs. Biden",
      summary:
        "The first debate between incumbent President Joe Biden and former President Donald Trump took place in Atlanta, Georgia.Trump's controversial comment about Biden and a strong defense of his own policies dominated the discourse, setting the tone for the upcoming election.",
    },
    {
      date: "July 13, 2024",
      title: "Assassination Attempt on Donald Trump",
      summary:
        "During a campaign rally in Butler, Pennsylvania, Donald Trump was shot but was stabilized by medical professionals. The gunman was killed by Secret Service agents.",
    },
    {
      date: "July 15, 2024",
      title: "Republican National Convention – Trump Secures Nomination",
      summary:
        "During the Republican National Convention in Milwaukee, Wisconsin, Trump secured the Republican nomination for the 2024 presidential race, officially becoming the GOP's candidate for president.",
    },
    {
      date: "July 21, 2024",
      title: "Biden Suspends Re-Election Campaign and Endorses Kamala Harris",
      summary:
        "President Joe Biden announced the suspension of his re-election campaign, endorsing Vice President Kamala Harris as the Democratic nominee for the upcoming presidential election.",
    },
    {
      date: "September 10, 2024",
      title: "Second Presidential Debate: Trump vs. Harris",
      summary:
        "Former President Donald Trump and Vice President Kamala Harris faced off in their first presidential debate at the National Constitution Center in Philadelphia.Post-debate polls showed Harris gaining ground, with her national lead widening from 1.7 to 2.7 points.",
    },
    {
      date: "November 5, 2024",
      title: "U.S. Presidential Election",
      summary:
        "The general election took place with Donald Trump facing Vice President Kamala Harris. Trump secured a victory, defeating Harris and officially becoming the Republican nominee for president.",
    },
    {
      date: "December 14, 2024",
      title: "Electoral College vote",
      summary:
        "The Electoral College officially voted to confirm Trump’s victory in the presidential election.",
    },
    {
      date: "January 20, 2025",
      title: "Presidential Inauguration",
      summary:
        "Donald Trump was inaugurated as the 47th President of the United States in a ceremony held in Washington, D.C. His inauguration marked the beginning of his second term in office.",
    },
    {},
    {},
  ];
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <div>
      <h3>Time Line of Events</h3>
      <Timeline position="alternate-reverse">
        {items.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{item.date}</TimelineContent>
            {hoveredItem === index && (
              <div>
                <InfoCard item={item} index={index} />
              </div>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLineComponent;
