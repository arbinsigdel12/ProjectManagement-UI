import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
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

  const onFrameButtonClick = useCallback(() => {
    window.open("https://pm-system.mstech.com.np/");
  }, []);

  const onPlaystoreContainerClick = useCallback(() => {
    window.open("*");
  }, []);

  const onAppleContainerClick = useCallback(() => {
    window.open("*");
  }, []);

  const onFrameContainer9Click = useCallback(() => {
    window.open("*");
  }, []);

  const onJoinUsOnClick = useCallback(() => {
    window.open("*");
  }, []);

  const onFrameContainer10Click = useCallback(() => {
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
      <div className={styles.aboutus}>
        <header className={styles.navbar1}>
          <div className={styles.image1Wrapper} onClick={onFrameContainerClick}>
            <img className={styles.image1Icon} alt="" src="/undefined1.png" />
          </div>
          <div className={styles.mainlinks}>
            <nav className={styles.links1}>
              <div className={styles.heading}>
                <div className={styles.heading1}>About Us</div>
              </div>
              <div
                className={styles.heading2}
                onClick={onHeadingContainer1Click}
              >
                <div className={styles.heading1}>Features</div>
              </div>
              <div
                className={styles.heading2}
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
        <div className={styles.aboutusframe}>
          <div className={styles.aboutAbcCompany}>About ABC Company</div>
          <div className={styles.aboutusframeChild} />
          <div className={styles.aboutusquestions}>
            <div className={styles.whyDoWeNeedPerformanceManParent}>
              <div className={styles.aboutAbcCompany}>
                <ul className={styles.whyDoWe1}>
                  Why do we need Performance Management System
                </ul>
              </div>
              <div className={styles.performanceManagementIs2}>
                Performance management is a comprehensive process that involves
                the planning, monitoring, and assessment of an individual's or
                an organization's performance in order to achieve predetermined
                goals and objectives. It encompasses a range of activities and
                strategies aimed at optimizing the efficiency, effectiveness,
                and productivity of individuals, teams, and the overall
                organization.
              </div>
            </div>
            <div className={styles.problemsInAOfficeWithoutPParent}>
              <div className={styles.aboutAbcCompany}>
                <ul className={styles.whyDoWe1}>
                  Problems in a office without Performance Management System
                </ul>
              </div>
              <div className={styles.performanceManagementIs2}>
                Performance management is a comprehensive process that involves
                the planning, monitoring, and assessment of an individual's or
                an organization's performance in order to achieve predetermined
                goals and objectives. It encompasses a range of activities and
                strategies aimed at optimizing the efficiency, effectiveness,
                and productivity of individuals, teams, and the overall
                organization.
              </div>
            </div>
            <div className={styles.objectiveOfAPerformanceManParent}>
              <div className={styles.aboutAbcCompany}>
                3.Objective of a Performance Management System
              </div>
              <div className={styles.theSoleObjectiveContainer}>
                <p className={styles.aToProvide}>
                  The sole objective of developing integrated information portal
                  of Local Government at province level is:
                </p>
                <p className={styles.aToProvide}>
                  a. To provide a single platform to access the information of
                  all local government inside the province,
                </p>
                <p className={styles.aToProvide}>
                  b. To integrated the data of local government at provincial
                  level and develop meaningful insight and visualization,
                </p>
                <p className={styles.aToProvide}>
                  c. To serve as a common information collection cum
                  communication portal between provincial government and local
                  government,
                </p>
                <p className={styles.aToProvide}>
                  d. To contribute on open data database.
                </p>
              </div>
            </div>
            <div className={styles.howPmsWorksInContextOfNeParent}>
              <div className={styles.aboutAbcCompany}>
                How PMS works in context of Nepal
              </div>
              <div className={styles.theSoleObjectiveContainer}>
                <p
                  className={styles.aToProvide}
                >{`The implementation and operation of a performance management system (PMS) in Nepal would generally follow the same principles as in other countries. However, specific cultural, legal, and organizational factors in Nepal may influence how a performance management system works. Here's a general overview: `}</p>
                <p className={styles.aToProvide}>&nbsp;</p>
                <p
                  className={styles.aToProvide}
                >{`Goal Setting: The process usually starts with setting clear, achievable, and culturally relevant goals. In Nepal, cultural values and societal expectations may shape the nature of these goals, taking into account factors such as community relationships and social responsibilities. `}</p>
                <p className={styles.aToProvide}>&nbsp;</p>
                <p
                  className={styles.aToProvide}
                >{`Performance Planning: Developing plans to achieve these goals involves considering cultural nuances. Understanding the cultural dynamics and communication styles is crucial for effective planning. `}</p>
                <p className={styles.aToProvide}>&nbsp;</p>
                <p
                  className={styles.aToProvide}
                >{`Feedback and Communication: Communication is a key aspect of performance management. In Nepal, where hierarchical structures may be more pronounced, the communication approach may need to be adapted to ensure openness and transparency. `}</p>
                <p className={styles.aToProvide}>&nbsp;</p>
                <p
                  className={styles.aToProvide}
                >{`Performance Appraisal: Performance appraisals should be conducted in a manner that respects the local culture. Providing constructive feedback and recognition is important, taking into account cultural sensitivities. `}</p>
                <p className={styles.aToProvide}>&nbsp;</p>
                <p
                  className={styles.aToProvide}
                >{`Recognition and Rewards: Recognition and rewards should align with Nepali cultural values. For example, public acknowledgment and non-monetary incentives might be as important as financial rewards. `}</p>
                <p className={styles.aToProvide}>&nbsp;</p>
                <p
                  className={styles.aToProvide}
                >{`Legal and Regulatory Compliance: Understanding and complying with labor laws and regulations in Nepal is crucial. This includes considerations related to leave policies, working hours, and any specific legal requirements related to performance evaluations. `}</p>
                <p className={styles.aToProvide}>&nbsp;</p>
                <p
                  className={styles.aToProvide}
                >{`Cultural Sensitivity: Being culturally sensitive is paramount. In Nepal, respect for elders and authority figures is significant. The performance management system should be designed and implemented with an understanding of Nepali cultural norms and values. `}</p>
                <p className={styles.aToProvide}>&nbsp;</p>
                <p
                  className={styles.aToProvide}
                >{`Training and Development: Providing training and development opportunities that are culturally relevant and align with the aspirations of employees can enhance the effectiveness of the performance management system. `}</p>
                <p className={styles.aToProvide}>&nbsp;</p>
                <p
                  className={styles.aToProvide}
                >{`Technology Adoption: While technology can streamline performance management, the level of technological infrastructure and digital literacy in Nepal should be considered. Solutions may need to be adapted to ensure accessibility and ease of use. `}</p>
                <p className={styles.aToProvide}>&nbsp;</p>
                <p className={styles.aToProvide}>
                  Adaptability: Flexibility and adaptability are essential.
                  Cultural and organizational dynamics may change over time, and
                  the performance management system should be responsive to
                  these changes. It's crucial to involve local stakeholders,
                  including employees, managers, and HR professionals, in the
                  design and implementation of the performance management system
                  to ensure it resonates with the local context. Additionally,
                  periodic reviews and adjustments should be made based on
                  feedback and evolving organizational and cultural factors in
                  Nepal.
                </p>
              </div>
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
                      <p className={styles.aToProvide}>Get IT on</p>
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
                      <p className={styles.aToProvide}>{`Download on `}</p>
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
                onClick={onFrameContainer9Click}
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
                onClick={onFrameContainer10Click}
              >
                <img
                  className={styles.facebookIcon1}
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
                  className={styles.vectorIcon5}
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
                  className={styles.vectorIcon7}
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
    </>
  );
};

export default AboutUs;
