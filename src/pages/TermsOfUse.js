import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./TermsOfUse.module.css";

const TermsOfUse = () => {
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

  const onFrameContainer6Click = useCallback(() => {
    window.open("*");
  }, []);

  const onJoinUsOnClick = useCallback(() => {
    window.open("*");
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    window.open("*");
  }, []);

  const onAddUsOnClick = useCallback(() => {
    window.open("*");
  }, []);

  const onPrivacyTextClick = useCallback(() => {
    navigate("/privacy-policy");
  }, [navigate]);

  return (
    <>
      <div className={styles.termsOfUse1}>
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
        <div className={styles.performanceManagementSystemWrapper}>
          <div className={styles.performanceManagementSystemContainer}>
            <p className={styles.blankLine}>
              Performance Management System - Terms of Service
            </p>
            <p className={styles.blankLine}>Effective starting: 2023/12/12</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              Thank you for choosing Performance Management System! These Terms
              of Service ("Terms") outline the rights and responsibilities
              governing your use of our program management system. By accessing
              or using Performance Management System, you agree to comply with
              these Terms. Please read them carefully PLEASE NOTE THAT IF YOU
              SIGN UP FOR OUR PRODUCT USING AN EMAIL ADDRESS FROM YOUR EMPLOYER
              OR ANOTHER ENTITY, THEN (A) YOU WILL BE DEEMED TO REPRESENT SUCH
              PARTY, (B) YOUR CLICK TO ACCEPT WILL BIND YOUR EMPLOYER OR THAT
              ENTITY TO THESE TERMS, AND (C) THE WORD “YOU” IN THESE TERMS WILL
              REFER TO YOUR EMPLOYER OR THAT ENTITY.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              These Terms are effective as of the date you first click “I agree”
              (or similar button or checkbox) or use or access the services,
              whichever is earlier (the “Effective Date”). These Terms do not
              have to be signed in order to be binding. You indicate your assent
              to these Terms by clicking “I agree” (or similar button or
              checkbox) at the time you register for the program management,
              create an account, or place an Order. For No-Charge Products, you
              also indicate your assent to these Terms by accessing or using the
              applicable No-Charge Product.
            </p>
            <p className={styles.blankLine}>
              Program management is a strategic and systematic approach aimed at
              coordinating and overseeing a collection of interconnected
              projects within an organization, collectively known as a program.
              The primary objective is to align these projects with the
              organization's strategic goals, ensuring that they work
              synergistically to deliver intended benefits. Program managers
              take a comprehensive view of the entire program, managing
              interdependencies, optimizing resource allocation, and overseeing
              governance structures. Effective stakeholder management is
              crucial, involving clear communication with executives, project
              managers, team members, and external parties. The program
              management process includes proactive risk management, resource
              allocation, monitoring of project progress through key performance
              indicators, and change management to navigate organizational
              shifts. Program closure is a formalized process, including the
              transition of deliverables and the realization of benefits. By
              providing a structured and integrated framework, program
              management enhances the likelihood of successful project outcomes
              and contributes to the organization's overall strategic success.
            </p>
            <p className={styles.blankLine}>
              The term "Terms of Use" (also known as Terms and Conditions or
              Terms of Service) for program management refers to a set of rules
              and guidelines that users must agree to follow when using a
              particular program or service. These terms serve several important
              purposes in the context of program management:
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>Legal Agreement:</li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                The Terms of Use form a legally binding agreement between the
                program manager (or the organization providing the program) and
                the users. By using the program, users agree to comply with the
                specified terms.
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>User Responsibilities:</li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                The terms outline the responsibilities and obligations of the
                users. This can include acceptable behavior, prohibited actions,
                and any specific rules or regulations that users must adhere to
                while using the program.
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Intellectual Property Protection:
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                The terms typically address issues related to intellectual
                property, such as copyrights, trademarks, and other important
                information. Users are usually prohibited from copying,
                distributing, or modifying the program without explicit
                permission. On copying, distributing, or modifying any
                information will lead to copyright claims and charges on the
                user.
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Liabilities and Disclaimers:
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Terms of Use often include disclaimers that limit the program
                manager's liability in certain situations. This may include
                disclaimers related to the accuracy of information, service
                interruptions, or any potential damages resulting from the use
                of the program.
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>Privacy Policies:</li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Privacy-related clauses inform users about how their personal
                information will be collected, stored, and used. This includes
                details about data collection practices, cookies, and any
                third-party services that may be involved.
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>Termination of Service:</li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                The terms specify conditions under which the program manager can
                terminate a user's access to the program. This could be due to
                violations of the terms, illegal activities, or other reasons
                outlined in the agreement.
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>Updates and Changes:</li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Terms of Use may include information about the right of the
                program manager to update or change the terms. Users are
                typically notified of changes, and continued use of the program
                implies acceptance of the modified terms.
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>Compliance with Laws:</li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Users are often required to comply with relevant laws and
                regulations while using the program. This ensures that the
                program and its users operate within the legal framework.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>Communication and Notices:</li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                The terms may specify how the program manager communicates with
                users, including the use of email, notifications within the
                program, or other means. It also outlines how legal notices or
                updates to the terms will be provided.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Governing Law and Jurisdiction:
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                The terms usually specify the governing law that applies to the
                agreement and the jurisdiction where legal disputes will be
                resolved.
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>Updates and Modifications:</li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Describes how updates, changes, or modifications to the terms or
                the program itself will be communicated and implemented.
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>Miscellaneous Provisions:</li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Includes miscellaneous clauses such as force majeure
                (unforeseeable circumstances that prevent fulfillment of a
                contract), severability, and the entire agreement clause.
              </li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>User Conduct:</li>
            </ul>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Defines the acceptable behavior of users while using the
                program. This can include guidelines on appropriate content,
                communication, and any actions that may be considered a breach
                of terms.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              Terms and Conditions for Program Management
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>1. Project and Task Management:</p>
            <p className={styles.blankLine}>1.1 Project Plans:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Project plans shall be developed and maintained for each phase
                of the program, outlining tasks, timelines, and resource
                requirements.
              </li>
            </ul>
            <p className={styles.blankLine}>1.2 Task Execution:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Project teams are responsible for executing tasks as outlined in
                the project plans.
              </li>
              <li className={styles.theTermsOf}>
                Any deviations from the plan must be communicated promptly to
                the Program Manager for assessment and adjustment.
              </li>
            </ul>
            <p className={styles.blankLine}>1.3 Resource Allocation:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Resource allocation shall be managed efficiently to ensure
                optimal utilization and alignment with project goals.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              2. Collaboration and Communication Strategies:
            </p>
            <p className={styles.blankLine}>2.1 Communication Plan:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                A comprehensive communication plan will be established,
                specifying the frequency, methods, and channels of
                communication.
              </li>
              <li className={styles.theTermsOf}>
                Key stakeholders and their respective roles will be identified
                in the plan.
              </li>
            </ul>
            <p className={styles.blankLine}>2.2 Collaboration Platforms:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Teams shall utilize designated collaboration platforms for
                document sharing, project tracking, and communication.
              </li>
              <li className={styles.theTermsOf}>
                Regular updates and important announcements will be posted on
                these platforms.
              </li>
            </ul>
            <p className={styles.blankLine}>2.3 Meetings and Reporting:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Regular team meetings and status reports will be conducted to
                foster collaboration and keep all stakeholders informed of
                project progress.
              </li>
              <li className={styles.theTermsOf}>
                Meeting minutes and reports will be documented and made
                available to relevant parties.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              3. Quality Assurance and Control Measures:
            </p>
            <p className={styles.blankLine}>3.1 Quality Standards:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                The program shall adhere to predefined quality standards and
                guidelines throughout its lifecycle.
              </li>
              <li className={styles.theTermsOf}>
                Quality expectations will be communicated to all team members
                and stakeholders.
              </li>
            </ul>
            <p className={styles.blankLine}>3.2 Quality Control Reviews:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Regular quality control reviews will be conducted at key
                milestones to assess compliance with established standards.
              </li>
              <li className={styles.theTermsOf}>
                Corrective actions will be implemented promptly to address any
                identified deviations.
              </li>
            </ul>
            <p className={styles.blankLine}>3.3 Continuous Improvement:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                A culture of continuous improvement will be fostered,
                encouraging teams to identify and implement process
                enhancements.
              </li>
              <li className={styles.theTermsOf}>
                Lessons learned from each phase will be documented and utilized
                for future program iterations.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>4. Change Management:</p>
            <p className={styles.blankLine}>4.1 Change Requests:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                Change requests affecting project scope, timelines, or resources
                must be formally submitted to the Change Control Board for
                evaluation.
              </li>
              <li className={styles.theTermsOf}>
                Approved changes will be documented and communicated to relevant
                stakeholders.
              </li>
            </ul>
            <p className={styles.blankLine}>4.2 Risk Management:</p>
            <ul className={styles.legalAgreement}>
              <li className={styles.theTermsOf}>
                A proactive approach to risk management will be adopted, with
                identified risks tracked and mitigated throughout the program.
              </li>
              <li className={styles.theTermsOf}>
                Unforeseen challenges will be addressed promptly, and risk
                mitigation strategies will be implemented.
              </li>
            </ul>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              Acknowledgment of Agreement for Program Management
            </p>
            <p className={styles.blankLine}>
              This document serves as an official acknowledgment of the
              agreement reached among the parties involved in the management of
              the Performance Management System. The successful execution of
              this program is the result of collaborative efforts, dedication,
              and effective communication among all stakeholders under Kriwi
              Consult Pvt Ltd.
            </p>
            <p className={styles.blankLine}>
              Each individual and organization listed above has played a crucial
              role in the planning, execution, and successful completion of the
              Performance Management System. Their commitment to excellence,
              proactive approach, and ability to overcome challenges have been
              instrumental in achieving our program goals and objectives.
            </p>
            <p className={styles.blankLine}>
              We also acknowledge the collective effort in maintaining open
              lines of communication, fostering a positive team spirit, and
              adapting to changes as needed throughout the program lifecycle.
            </p>
            <p className={styles.blankLine}>
              By affixing our signatures below, we formally acknowledge our
              agreement with the terms and conditions outlined in the program
              management plan. We look forward to continuing this collaborative
              journey in future endeavors.
            </p>
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
                      <p className={styles.thisCompanyIs}>Get IT on</p>
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
                      <p className={styles.thisCompanyIs}>{`Download on `}</p>
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
                  src="/undefined16.png"
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
            <div className={styles.privacy} onClick={onPrivacyTextClick}>
              Privacy
            </div>
            <div className={styles.disclaimer}>Term of use</div>
          </div>
        </section>
      </div>
      {isDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom"
          onOutsideClick={closeDrawer}
        >
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default TermsOfUse;
