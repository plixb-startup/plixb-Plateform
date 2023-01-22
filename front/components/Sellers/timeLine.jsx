import React from 'react';
import { Chrono } from 'react-chrono';


export default function TimeLine() {
    const items = [
      {
        title: "Jan 2023",
        cardTitle: "Hire an investment banker or broker",
        cardSubtitle: "2 months",
        cardDetailedText: "Pending",
      },
      {
        title: "Feb 2023",
        cardTitle: "Hire an investment banker or broker ",
        cardSubtitle: "2 months",
        cardDetailedText: "Preparing",
      },
      {
        title: "Mar 2023",
        cardTitle: "Build a data room",
        cardSubtitle: "1 month",
        cardDetailedText: "Preparing",
      },
      {
        title: "Apr 2023",
        cardTitle: "Reach out to buyers",
        cardSubtitle: "2 months",
        cardDetailedText: "Pending",
      },
      {
        title: "May 2023",
        cardTitle: "Reach out to buyers",
        cardSubtitle: "2 months",
        cardDetailedText: "Preparing",
      },
      {
        title: "Jun 2023",
        cardTitle: "The Dog and Pony show",
        cardSubtitle: "2 months",
        cardDetailedText: "Pending",
      },
      {
        title: "Jul 2023",
        cardTitle: "The Dog and Pony show",
        cardSubtitle: "2 months",
        cardDetailedText: "Present",
      },
      {
        title: "Aug 2023",
        cardTitle: "Term Sheets + Negotiation",
        cardSubtitle: "1 month",
        cardDetailedText: "Present",
      },
      {
        title: "Sep 2023",
        cardTitle: "Due Diligence",
        cardSubtitle: "2 months",
        cardDetailedText: "Pending",
      },
      {
        title: "Oct 2023",
        cardTitle: "Due Diligence",
        cardSubtitle: "2 months",
        cardDetailedText: "Present",
      },
      {
        title: "Nov 2023",
        cardTitle: "Haggling + Renegotiation",
        cardSubtitle: "1 month",
        cardDetailedText: "Present",
      },
      {
        title: "Dec 2023",
        cardTitle: "❌80% fail to close ✅20% close successfully",
        cardSubtitle: "2 months",
        cardDetailedText: "Present",
      },
    ];

    return (
      <div className=" flex w-full">
        <div style={{ width: "2250px" }}>
          <Chrono
            items={items}
            cardWidth={400}
            //  mode="VERTICAL_ALTERNATING"
            // mode ="HORIZONTAL"
            slideShow
            slideItemDuration={2500}
            enableOutline
            theme={{
              secondary: "#1D4ED8",
              titleColor: "black",
              titleColorActive: "white",
            }}
          />
        </div>
      </div>
    );
}
