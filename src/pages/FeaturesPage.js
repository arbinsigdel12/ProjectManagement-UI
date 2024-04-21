import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./FeaturesPage.module.css";
const FeaturesPage = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeadingContainerClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onHeadingContainer2Click = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  const onHeadingContainer3Click = useCallback(() => {
    navigate("/contactsales");
  }, [navigate]);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    window.open("https://pm-system.mstech.com.np/");
  }, []);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://pm-system.mstech.com.np/");
  }, []);

  const onPlaystoreContainerClick = useCallback(() => {
    window.open("*");
  }, []);

  const onAppleContainerClick = useCallback(() => {
    window.open("*");
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    window.open("*");
  }, []);

  const onJoinUsOnClick = useCallback(() => {
    window.open("*");
  }, []);

  const onFrameContainer6Click = useCallback(() => {
    window.open("*");
  }, []);
  const ontermsTextClick = useCallback(() => {
    navigate("terms-of-use");
  }, [navigate]);
  const onPrivacyTextClick = useCallback(() => {
    navigate("privacy-policy");
  }, [navigate]);

  const onAddUsOnClick = useCallback(() => {
    window.open("*");
  }, []);

  return (
    <>
      <div className={styles.featurespage}>
        <header className={styles.navbar1}>
          <div className={styles.image1Wrapper} onClick={onFrameContainerClick}>
            <img className={styles.image1Icon} alt="" src="/undefined1.png" />
          </div>
          <div className={styles.mainlinks}>
            <nav className={styles.links1}>
              <div className={styles.heading} onClick={onHeadingContainerClick}>
                <div className={styles.heading1}>About Us</div>
              </div>
              <div className={styles.heading2}>
                <div className={styles.heading1}>Features</div>
              </div>
              <div
                className={styles.heading}
                onClick={onHeadingContainer2Click}
              >
                <div className={styles.heading1}>Pricing</div>
              </div>
              <div
                className={styles.heading6}
                onClick={onHeadingContainer3Click}
              >
                <div className={styles.heading1}>Contact Sales</div>
              </div>
            </nav>
            <div className={styles.hamburgerMenu} onClick={openDrawer}>
              <div className={styles.hamburgerMenuChild} />
              <div className={styles.hamburgerMenuChild} />
              <div className={styles.hamburgerMenuChild} />
            </div>
            <div className={styles.signinandgetstarted}>
              <div
                className={styles.signInWrapper}
                onClick={onFrameContainer1Click}
              >
                <div className={styles.signIn}>SIGN IN</div>
              </div>
              <button
                className={styles.getStartedWrapper}
                onClick={onFrameButtonClick}
              >
                <div className={styles.getStarted}>Get Started</div>
              </button>
            </div>
          </div>
          <div className={styles.navbarChild} />
        </header>
        <div className={styles.features}>
          <section className={styles.reviewfeaturecontainer1}>
            <div className={styles.chatphoto}>
              <div className={styles.reviewSystemPhotoContainer}>
                <p className={styles.pmSystemThat}>review system photo</p>
              </div>
            </div>
            <div className={styles.connectsPeople}>
              <div className={styles.reviewSystemPhotoContainer}>
                <p className={styles.pmSystemThat}>PM system that</p>
                <p className={styles.makesReviews}>Makes reviews</p>
                <p className={styles.makesReviews}>through approved tasks</p>
                <p className={styles.pmSystemThat}>{` `}</p>
              </div>
              <div className={styles.reviewSystemPhotoContainer}>
                The process of reviewing approved tasks within a performance
                management system involves assessing how well employees or teams
                have accomplished their assigned tasks and contributed to
                overall organizational goals
              </div>
              <div className={styles.seeHow}>SEE HOW</div>
            </div>
          </section>
          <div className={styles.taskbarfeaturecontainer1}>
            <div className={styles.chatphoto1}>
              <div className={styles.chatSystemPhotoContainer}>
                Taskbar system photo
              </div>
            </div>
            <div className={styles.connectsPeople}>
              <div className={styles.reviewSystemPhotoContainer}>
                <p className={styles.pmSystemThat}>PM system that’s</p>
                <p className={styles.makesReviews}>
                  Help individuals or teams track tasks
                </p>
              </div>
              <div className={styles.reviewSystemPhotoContainer}>
                Each task typically includes essential information such as a
                task name, description, due date, priority level, etc. PM system
                helps in connecting staffs and inspiring employees by chat
                system
              </div>
              <div className={styles.seeHow}>SEE HOW</div>
            </div>
          </div>
          <div className={styles.chatfeaturecontainer1}>
            <div className={styles.chatphoto2}>
              <div className={styles.chatSystemPhotoContainer}>
                <p className={styles.pmSystemThat}>Chat system photo</p>
              </div>
            </div>
            <div className={styles.connectsPeople2}>
              <div className={styles.reviewSystemPhotoContainer}>
                <p className={styles.pmSystemThat}>PM system that</p>
                <p className={styles.makesReviews}>
                  Connects staffs and inspire Employees
                </p>
                <p className={styles.pmSystemThat}>{` `}</p>
              </div>
              <div className={styles.reviewSystemPhotoContainer}>
                Inspiring employees in a team is crucial while decision
                making,team building and problem solving.PM system helps in
                connecting staffs and inspiring employees by chat system
              </div>
              <div className={styles.seeHow}>SEE HOW</div>
            </div>
          </div>
          <div className={styles.chatfeaturecontainer1}>
            <div className={styles.chatphoto2}>
              <div className={styles.reviewSystemPhotoContainer}>
                photo of a chart of an employee
              </div>
            </div>
            <div className={styles.connectsPeople2}>
              <div className={styles.reviewSystemPhotoContainer}>
                <p className={styles.pmSystemThat}>PM system were</p>
                <p className={styles.makesReviews}>
                  Where employees’ goal is set and monitored
                </p>
                <p className={styles.pmSystemThat}>{` `}</p>
              </div>
              <div
                className={styles.reviewSystemPhotoContainer}
              >{`Employees may set specific performance goals in collaboration with their supervisors. These goals are then regularly monitored and reviewed. `}</div>
              <div className={styles.seeHow}>SEE HOW</div>
            </div>
          </div>
        </div>
        <section className={styles.footer1}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.performanceManagementSystemWrapper}>
                <div className={styles.performanceManagementSystem1}>
                  PERFORMANCE MANAGEMENT SYSTEM
                </div>
              </div>
              <div className={styles.playstoreParent}>
                <div
                  className={styles.playstore}
                  onClick={onPlaystoreContainerClick}
                >
                  <img
                    className={styles.playsoreIcon1}
                    alt=""
                    src="/undefined14.png"
                  />
                  <div className={styles.getItOnContainer}>
                    <span className={styles.getItOnContainer1}>
                      <p className={styles.pmSystemThat}>Get IT on</p>
                      <p className={styles.playStore}>PLAY STORE</p>
                    </span>
                  </div>
                </div>
                <div className={styles.apple} onClick={onAppleContainerClick}>
                  <img
                    className={styles.playsoreIcon1}
                    alt=""
                    src="/undefined15.png"
                  />
                  <div className={styles.getItOnContainer}>
                    <span className={styles.getItOnContainer1}>
                      <p className={styles.pmSystemThat}>{`Download on `}</p>
                      <p className={styles.playStore}>APP STORE</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.frameChild} />
              <div className={styles.performanceManagementSystem2}>
                @2023,Performance management system .All rights reserved
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div
                className={styles.iconDiscordParent}
                onClick={onFrameContainer5Click}
              >
                <img
                  className={styles.iconDiscord1}
                  alt=""
                  src="/undefined30.png"
                />
                <div className={styles.joinUsOn1} onClick={onJoinUsOnClick}>
                  Join us on Discord
                </div>
              </div>
              <div
                className={styles.facebookParent}
                onClick={onFrameContainer6Click}
              >
                <img
                  className={styles.facebookIcon1}
                  alt=""
                  src="/undefined31.png"
                />
                <div className={styles.joinUsOn1} onClick={onAddUsOnClick}>
                  Add us on Facebook
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.vectorIcon5}
                  alt=""
                  src="/undefined32.png"
                />
                <div className={styles.jhamsikhelsanepa}>Jhamsikhel,Sanepa</div>
              </div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.vectorIcon6}
                  alt=""
                  src="/undefined33.png"
                />
                <div className={styles.jhamsikhelsanepa}>+977 9807654321</div>
              </div>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.vectorIcon7}
                  alt=""
                  src="/undefined34.png"
                />
                <div className={styles.jhamsikhelsanepa}>
                  abccompany@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className={styles.threethings}>
            <div className={styles.disclaimer}>Disclaimer</div>
            <div className={styles.disclaimer}onClick={onPrivacyTextClick}>Privacy</div>
            <div className={styles.disclaimer}onClick={ontermsTextClick}>Term of use</div>
          </div>
        </section>
      </div>
      {isDrawerOpen && (
        <PortalDrawer placement="Right" onOutsideClick={closeDrawer}>
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default FeaturesPage;
