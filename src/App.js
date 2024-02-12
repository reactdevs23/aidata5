import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

import PreBuilts from "./images/PreBuilts";
import Insights from "./images/Insights";
import Brain from "./images/Brain";
import Security from "./images/Security";
import CenterImg from "./images/TreeImg";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#FFF",
    outerBox: {
      background: "#FFF",
      boxShadow: "1px 1px 34px 0px rgba(0, 0, 0, 0.05)",
      border: "1px solid  #D0D5DD",
    },
    centerImg: (
      <CenterImg
        lineColor="#D0D5DD"
        firstColor="#000"
        secondColor="#667085"
        thirdColor="#475467"
        fourthColor="#98A2B3"
        fifthColor="#EAECF0"
      />
    ),
    mainBox: {
      border: "2px solid  #7F56D9",
      header: {
        heading: "AI Co-Pilot",
        headingColor: "#FFF",
        icon: <Brain color="#F9F5FF" />,
        background: "#7F56D9",
      },
    },
    facilities: {
      left: {
        icon: <Insights color="#7F56D9" />,
        title: "Real-Time Insights",
        titleColor: "#000",
        bg: "#F2F4F7",
      },

      right: {
        icon: <PreBuilts color="#7F56D9" />,
        title: "Pre-Built & Custom Agents",
        titleColor: "#000",
        bg: "#F2F4F7",
      },
    },
    companyDatabase: {
      background: "#F9F5FF",
      border: "2px solid #7F56D9",
      heading: "Company Database",
      headingColor: "#000",
      connectingLineColor: "#7F56D9",

      bottomBar: {
        icon: <Security color="#fff" />,
        title: "Data Protection Mechanisms",
        titleColor: "#FFF",
        bg: "#7F56D9",
        border: "2px solid #7F56D9",
      },
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
