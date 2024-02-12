import React from "react";

import classes from "./MainComponent.module.css";
import TreeImg from "../../images/TreeImg";
//  companyDatabase: {
//     background: "#F9F5FF",
//     border: "2px solid #7F56D9",
//     title: "Company Database",

//     bottomBar: {
//       icon: <Security color="#fff" />,
//       title: "Data Protection Mechanisms",
//       titleColor: "#FFF",
//       bg: "#7F56D9",
//       border: "2px solid #7F56D9",
//     },
//   },
const MainComponent = ({
  facilities,
  outerBox,
  mainBox,
  companyDatabase,
  centerImg,
}) => {
  const { border, header } = mainBox;

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainContainer}>
        <div
          className={classes.mainWrapper}
          style={{
            "--bg": outerBox.background,
            "--boxShadow": outerBox.boxShadow,
            "--border": outerBox.border,
          }}
        >
          <div className={classes.wrapper} style={{ "--border": border }}>
            <div
              className={classes.header}
              style={{
                "--bg": header.background,
                "--color": header.headingColor,
              }}
            >
              <div className={classes.icon}>{header.icon}</div>
              <h3 className={classes.heading}>{header.heading}</h3>
            </div>
            <div className={classes.facilities}>
              <div
                className={classes.left}
                style={{
                  "--color": facilities.left.titleColor,
                  "--bg": facilities.left.bg,
                }}
              >
                <div className={classes.icon}>{facilities.left.icon}</div>
                <p className={classes.title}>{facilities.left.title}</p>{" "}
                <div className={classes.verticleArrow}>
                  {facilities.verticleArrow}
                </div>
              </div>

              <div className={classes.horizontalArrow}>
                {facilities.horizontalArrow}
              </div>
              <div
                className={classes.right}
                style={{
                  "--color": facilities.right.titleColor,
                  "--bg": facilities.right.bg,
                }}
              >
                <div className={classes.icon}>{facilities.right.icon}</div>
                <p className={classes.title}>{facilities.right.title}</p>
                <div className={classes.verticleArrow}>
                  {facilities.verticleArrow}
                </div>
              </div>
            </div>

            <div className={classes.centerImage}>{centerImg}</div>

            <div className={classes.pointContainer}>
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  key={index}
                  className={[classes.point[index + 1], classes.point].join(
                    " "
                  )}
                  style={{
                    "--connectingLineColor":
                      companyDatabase.connectingLineColor,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes.dataBaseWrapper}>
          <div
            className={classes.dataBase}
            style={{
              "--border": companyDatabase.border,
              "--color": companyDatabase.headingColor,
              "--bg": companyDatabase.background,
            }}
          >
            {" "}
            <div className={classes.pointContainer}>
              {Array.from({ length: 4 }, (_, index) => (
                <div
                  key={index}
                  className={[classes.point[index + 1], classes.point].join(
                    " "
                  )}
                  style={{
                    "--connectingLineColor":
                      companyDatabase.connectingLineColor,
                  }}
                ></div>
              ))}
            </div>
            <h3 className={classes.heading}>{companyDatabase.heading}</h3>
            <div
              className={classes.bottomBar}
              style={{
                "--color": companyDatabase.bottomBar.titleColor,
                "--bg": companyDatabase.bottomBar.bg,
                // "--border": companyDatabase.border,
              }}
            >
              <div className={classes.icon}>
                {companyDatabase.bottomBar.icon}
              </div>
              <h3 className={classes.title}>
                {companyDatabase.bottomBar.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
