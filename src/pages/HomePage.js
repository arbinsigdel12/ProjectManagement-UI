import { useState, useCallback } from "react";
import MainImage from "../components/MainImage";
import PortalPopup from "../components/PortalPopup";
import ApprovedTask from "../components/ApprovedTask";
import Reviewing from "../components/Reviewing";
import Incentives from "../components/Incentives";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./HomePage.module.css";
import dynamicloop from "./dynamicloop.json";
import Lottie from "lottie-react";
import companylogo from "./companylogo.json"
const HomePage = () => {
  const [isMainImagePopupOpen, setMainImagePopupOpen] = useState(false);
  const [isApprovedTaskPopupOpen, setApprovedTaskPopupOpen] = useState(false);
  const [isReviewingPopupOpen, setReviewingPopupOpen] = useState(false);
  const [isIncentivesPopupOpen, setIncentivesPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heroMenu']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHeadingContainerClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onHeadingContainer1Click = useCallback(() => {
    navigate("/featurespage");
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
  const onGetstarted1click = useCallback(() => {
    window.open("https://pm-system.mstech.com.np/");
  }, []);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://pm-system.mstech.com.np/");
  }, []);

  const onSignINClick = useCallback(() => {
    window.open("*");
  }, []);

  const onWatchDemoClick = useCallback(() => {
    window.open("www.youtube.com");
  }, []);

  const openMainImagePopup = useCallback(() => {
    setMainImagePopupOpen(true);
  }, []);

  const closeMainImagePopup = useCallback(() => {
    setMainImagePopupOpen(false);
  }, []);

  const openApprovedTaskPopup = useCallback(() => {
    setApprovedTaskPopupOpen(true);
  }, []);

  const closeApprovedTaskPopup = useCallback(() => {
    setApprovedTaskPopupOpen(false);
  }, []);

  const openReviewingPopup = useCallback(() => {
    setReviewingPopupOpen(true);
  }, []);

  const closeReviewingPopup = useCallback(() => {
    setReviewingPopupOpen(false);
  }, []);

  const openIncentivesPopup = useCallback(() => {
    setIncentivesPopupOpen(true);
  }, []);

  const closeIncentivesPopup = useCallback(() => {
    setIncentivesPopupOpen(false);
  }, []);

  const onPlaystoreContainerClick = useCallback(() => {
    window.open("*");
  }, []);

  const onAppleContainerClick = useCallback(() => {
    window.open("*");
  }, []);

  const onFrameContainer14Click = useCallback(() => {
    window.location.href = "*";
  }, []);

  const onJoinUsOnClick = useCallback(() => {
    window.open("*");
  }, []);

  const onFrameContainer15Click = useCallback(() => {
    window.location.href = "*";
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
      <div className={styles.homepage}>
        <header className={styles.navbar1}>
          <div className={styles.image1Wrapper} onClick={onFrameContainerClick}>
            <img className={styles.image1Icon} alt="" src="/undefined1.png" />
          </div>
          <div className={styles.navbarChild} />
          <div className={styles.mainlinks}>
            <nav className={styles.links1}>
              <div className={styles.heading} onClick={onHeadingContainerClick}>
                <div className={styles.pricing}>About Us</div>
              </div>
              <div
                className={styles.heading}
                onClick={onHeadingContainer1Click}
              >
                <div className={styles.pricing}>Features</div>
              </div>
              <div
                className={styles.heading}
                onClick={onHeadingContainer2Click}
              >
                <div className={styles.pricing}>Pricing</div>
              </div>
              <div
                className={styles.heading5}
                onClick={onHeadingContainer3Click}
              >
                <div className={styles.pricing}>Contact Sales</div>
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
        </header>
        <section className={styles.heroMenu1} data-scroll-to="heroMenu">
          <div className={styles.projecttitleframeParent}>
            <div className={styles.projecttitleframe}>
              <h1 className={styles.projectManagementPlatform1}>
                Project management platform build for
              </h1>
            
            </div>
            <Lottie className={styles.httpsapplottiefilescomanIcon} animationData={dynamicloop} />
            <div className={styles.signupframe}>
              <div className={styles.workfeatureRow11}>
                <div className={styles.workfeature1}>
                  <div className={styles.managesYourWorkflow1}>
                    ✔Manages your workflow
                  </div>
                </div>
                <div className={styles.workfeature1}>
                  <div className={styles.managesYourWorkflow1}>
                    ✔Organizes staffs and Projects
                  </div>
                </div>
              </div>
              <div className={styles.workfeatureRow21}>
                <div className={styles.workfeature1}>
                  <div className={styles.managesYourWorkflow1}>
                    ✔Facilitates continuous learning
                  </div>
                </div>
                <div className={styles.workfeature1}>
                  <div className={styles.managesYourWorkflow1}>
                    ✔One app for all departments
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.signupandwatchvideo}>
              <button className={styles.signIn1} onClick={onSignINClick}>
                <div className={styles.signUpNow}>SIGN UP NOW</div>
              </button>
              <button className={styles.watchDemo1} onClick={onWatchDemoClick}>
                <div className={styles.watchVideo}>WATCH VIDEO</div>
              </button>
            </div>
          </div>
          <div className={styles.mainImagecontainer}>
          <img className={styles.mainImageIcon} alt="" src="/undefined4.png" /></div>
        </section>
        <section className={styles.companylogo1}>
          <h1 className={styles.trustedBy1001}>Trusted By 100+ Offices</h1>
          <Lottie className={styles.companiesLogoIcon} animationData={companylogo}/>
        </section>
        <section className={styles.featureframe1}>
          <div className={styles.featuresSimpleYetEnhancedParent}>
            <div className={styles.featuresSimpleYetContainer}>
              <p className={styles.features}>Features:</p>
              <p className={styles.features}>&nbsp;</p>
              <p className={styles.features}>&nbsp;</p>
              <p className={styles.simpleYetEnhanced}>
                Simple Yet Enhanced Performance Management System Has
              </p>
              <p className={styles.simpleYetEnhanced}>
                User Friendly Dashboard And High Performance Culture That works
                for Everyone
              </p>
            </div>
            <h1 className={styles.showMore1}>Show More</h1>
          </div>
          <img
            className={styles.image3Icon}
            alt=""
            src="/undefined6.png"
            onClick={openMainImagePopup}
          />
        </section>
        <section className={styles.systemSteps1}>
          <h1
            className={styles.systemsStepsFor1}
          >{`Systems Steps for Effective Performance `}</h1>
          <div className={styles.clickAnyBlock1}>
            Click any block to know the details
          </div>
          <div className={styles.step}>
            <div
              className={styles.documents1Parent}
              onClick={openApprovedTaskPopup}
            >
              <img
                className={styles.documents1Icon}
                alt=""
                src="/undefined7.png"
              />
              <div className={styles.approvedTask}>Approved Task</div>
            </div>
            <div
              className={styles.customerFeedback1Parent}
              onClick={openReviewingPopup}
            >
              <img
                className={styles.documents1Icon}
                alt=""
                src="/undefined8.png"
              />
              <div className={styles.approvedTask}>Reviewing</div>
            </div>
            <div className={styles.rating1Parent} onClick={openIncentivesPopup}>
              <img
                className={styles.rating1Icon}
                alt=""
                src="/undefined9.png"
              />
              <div className={styles.approvedTask}>Incentives</div>
            </div>
          </div>
        </section>
        <section className={styles.customerReview1}>
          
          <div className={styles.headingcustomer}>
            <div className={styles.someReviewOnContainer}>
              <p className={styles.features}>Some Review on</p>
              <p className={styles.pmSystem}>PM system</p>
            </div>
          </div>
          <section className={styles.pathao1}>
            <div className={styles.frame1}>
              <img
                className={styles.image11Icon}
                alt=""
                src="/undefined12.png"
              />
            </div>
            <div className={styles.asAFullServiceAppweNeedWrapper}>
              <div className={styles.asAFull1}>
                “As a Full Service App,We need a report on how each Staff are
                carry out their services.Performance management System have Help
                us to deal with the report of each Staffs and review their
                Performance Accordingly”
              </div>
            </div>
          </section>
          <section className={styles.cg}>
            <div className={styles.frame1}>
              <img
                className={styles.image12Icon}
                alt=""
                src="/undefined13.png"
              />
            </div>
            <div className={styles.asAPubliclyHeldCompanyweWrapper}>
              <div className={styles.asAPublicly1}>
                “As a publicly held company,We need to present HR data every
                quarter to the compensation committee and the Board.This system
                makes it simple,providing all the data that we need in an easy
                to understand format”
              </div>
            </div>
          </section>
        </section>
        <section className={styles.frame3}>
          <div className={styles.frequentlyAskedQuestions1}>
            Frequently Asked Questions
          </div>
          <div className={styles.performanceManagementSystemContainer}>
            <span>PERFORMANCE MANAGEMENT SYSTEM</span>
            <span className={styles.boosted}> BOOSTED</span>
          </div>
          <div className={styles.faq}>
            <div className={styles.faq1}>
              <div className={styles.question}>
                <div className={styles.whatIsA1}>
                  What is a performance management system, and why is it
                  important for organizations?
                </div>
              </div>
              <div className={styles.answer}>
                <div className={styles.whatIsA1}>
                  A performance management system is a comprehensive process
                  that involves setting clear expectations, regularly assessing
                  employee performance, providing feedback, and aligning
                  individual goals with organizational objectives. It is crucial
                  for organizations to enhance employee productivity, identify
                  areas for improvement, and foster professional development.
                </div>
              </div>
            </div>
            <div className={styles.faq1}>
              <div className={styles.question}>
                <div className={styles.whatIsA1}>
                  How often should performance evaluations be conducted within
                  the system?
                </div>
              </div>
              <div className={styles.answer}>
                <div className={styles.whatIsA1}>
                  The frequency of performance evaluations can vary, but it is
                  common for organizations to conduct them annually. However,
                  some companies adopt a more continuous approach, providing
                  regular feedback through quarterly or monthly check-ins.
                </div>
              </div>
            </div>
            <div className={styles.faq1}>
              <div className={styles.question}>
                <div className={styles.whatIsA1}>
                  What components make up an effective performance management
                  system?
                </div>
              </div>
              <div className={styles.answer}>
                <div className={styles.whatIsA1}>
                  {" "}
                  An effective performance management system typically includes
                  goal setting, regular performance reviews, feedback
                  mechanisms, development plans, and performance improvement
                  processes. It may also involve the use of key performance
                  indicators (KPIs) and employee self-assessments to ensure a
                  comprehensive evaluation.
                </div>
              </div>
            </div>
            <div className={styles.faq1}>
              <div className={styles.question}>
                <div className={styles.whatIsA1}>
                  What challenges might organizations face in implementing a
                  performance management system?
                </div>
              </div>
              <div className={styles.answer}>
                <div className={styles.whatIsA1}>
                  Common challenges include resistance to change, lack of
                  clarity in goal setting, and the potential for biased
                  evaluations. To address these challenges, organizations can
                  focus on effective communication, provide training for
                  managers and employees, ensure transparency in the process,
                  and regularly review and update the system based on feedback
                  and evolving organizational needs.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <button className={styles.getStartedSecondButton1}>
              <div className={styles.getStarted1} onClick={onGetstarted1click}>Get Started</div>
            </button>
          </div>
        </section>
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
                      <p className={styles.features}>Get IT on</p>
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
                      <p className={styles.features}>{`Download on `}</p>
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
                onClick={onFrameContainer14Click}
              >
                <img
                  className={styles.iconDiscord1}
                  alt=""
                  src="/undefined16.png"
                />
                <div className={styles.joinUsOn1} onClick={onJoinUsOnClick}>
                  Join us on Discord
                </div>
              </div>
              <div
                className={styles.facebookParent}
                onClick={onFrameContainer15Click}
              >
                <img
                  className={styles.iconDiscord1}
                  alt=""
                  src="/undefined17.png"
                />
                <div className={styles.joinUsOn1} onClick={onAddUsOnClick}>
                  Add us on Facebook
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.iconDiscord1}
                  alt=""
                  src="/undefined18.png"
                />
                <div className={styles.jhamsikhelsanepa}>Jhamsikhel,Sanepa</div>
              </div>
              <div className={styles.vectorGroup}>
                <img
                  className={styles.vectorIcon6}
                  alt=""
                  src="/undefined19.png"
                />
                <div className={styles.jhamsikhelsanepa}>+977 9807654321</div>
              </div>
              <div className={styles.vectorContainer}>
                <img
                  className={styles.iconDiscord1}
                  alt=""
                  src="/undefined20.png"
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
      {isMainImagePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.85)"
          placement="Centered"
          onOutsideClick={closeMainImagePopup}
        >
          <MainImage onClose={closeMainImagePopup} />
        </PortalPopup>
      )}
      {isApprovedTaskPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeApprovedTaskPopup}
        >
          <ApprovedTask onClose={closeApprovedTaskPopup} />
        </PortalPopup>
      )}
      {isReviewingPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeReviewingPopup}
        >
          <Reviewing onClose={closeReviewingPopup} />
        </PortalPopup>
      )}
      {isIncentivesPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeIncentivesPopup}
        >
          <Incentives onClose={closeIncentivesPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomePage;
