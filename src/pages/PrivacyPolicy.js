import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
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

  const onAddUsOnClick = useCallback(() => {
    window.open("*");
  }, []);

  const onTermOfUseClick = useCallback(() => {
    navigate("/terms-of-use");
  }, [navigate]);

  return (
    <>
      <div className={styles.privacyPolicy}>
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
        <main className={styles.lastUpdated12222023ThisWrapper}>
          <a className={styles.lastUpdated12222023Container}>
            <p className={styles.blankLine}>Last Updated: 12/22/2023</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              This Company is committed to protecting the privacy of our users.
              This privacy policy outlines how we collect, use, disclose, and
              protect your information when you use our program management
              services. This policy will help you understand:
            </p>
            <p className={styles.thisCompanyIs}>
              · What types of personal information are collected from users?
            </p>
            <p className={styles.thisCompanyIs}>
              · Who is collecting the personal data and is responsible for the
              security of the data?
            </p>
            <p className={styles.thisCompanyIs}>
              · Where can users go to review or update their personal
              information?
            </p>
            <p className={styles.thisCompanyIs}>
              · When is user data collected?
            </p>
            <p className={styles.thisCompanyIs}>
              · When are users notified of changes to the privacy policy?
            </p>
            <p className={styles.thisCompanyIs}>
              · How is user data protected from unauthorized access or breaches?
            </p>
            <p className={styles.thisCompanyIs}>
              · Why is certain personal information necessary for the program
              management system?
            </p>
            <p className={styles.thisCompanyIs}>
              · Other Important privacy policy
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              A privacy policy stands as a fundamental document in the realm of
              data management, embodying a commitment to transparency, user
              trust, and legal compliance. Serving as more than a mere
              regulatory requirement, it functions as a pact between an
              organization and its users, clearly delineating how personal
              information is gathered, processed, and safeguarded. The policy
              addresses key facets, such as the explicit purpose behind data
              collection, the robust security measures in place to protect
              sensitive information, and the rights afforded to users over their
              own data. By providing transparency about third-party
              partnerships, articulating user choices, and establishing
              mechanisms for obtaining informed consent, a privacy policy
              empowers individuals to make conscious decisions about sharing
              their information. Furthermore, the commitment to regularly update
              the policy reflects an acknowledgment of the dynamic nature of
              data management practices and the organization's dedication to
              keeping users informed. Ultimately, a well-constructed privacy
              policy not only helps an organization comply with legal mandates
              but also contributes to the cultivation of trust in the digital
              landscape, fostering responsible data practices and safeguarding
              user privacy.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              1. What types of personal information are collected from users?
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              We collect information about you when you provide it to us, when
              you use our Services, and when other sources provide it to us, as
              further described below.
            </p>
            <p className={styles.thisCompanyIs}>Signing Up:</p>
            <p className={styles.thisCompanyIs}>
              When you sign up for our services, we collect information
              necessary for creating and managing your account. This may include
              your name, email address, contact information, and authentication
              credentials. This data is used to establish your identity within
              our system and facilitate secure access to our services.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Property Details:</p>
            <p className={styles.thisCompanyIs}>
              User data is collected through property details voluntarily
              provided by you. This includes information such as property
              addresses, descriptions, and any other relevant details you choose
              to input into our system. This data is essential for tailoring our
              services to your specific needs and preferences.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Using Our Services:</p>
            <p className={styles.thisCompanyIs}>
              As you engage with our services, we collect data related to your
              interactions and activities within the platform. This encompasses
              any updates, communications, or contributions you make while
              utilizing our program management system. The data collected during
              service usage is crucial for providing and improving the
              functionality of our platform.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Payment Method:</p>
            <p className={styles.thisCompanyIs}>
              If you choose to make payments through our system, we collect
              relevant payment information, such as credit card details or other
              payment credentials. This information is securely processed by our
              payment service providers, and we do not store sensitive payment
              details on our servers.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Connected Devices:</p>
            <p className={styles.thisCompanyIs}>
              In order to enhance your experience and provide seamless access to
              our services, we may collect information about the devices you use
              to connect with our platform. This includes device identifiers,
              types, and specifications, enabling us to optimize our services
              for different devices.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Automatic Information Collection:
            </p>
            <p className={styles.thisCompanyIs}>
              When you use our system, certain information is automatically
              collected for analytical and performance purposes. This may
              include IP addresses, browser types, device characteristics, and
              usage patterns. Analyzing this data helps us identify areas for
              improvement and optimize the user experience.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Information Provided by Your Office or Department:
            </p>
            <p className={styles.thisCompanyIs}>
              In the course of our business interactions, our office or
              department may provide additional information relevant to your
              engagement with our services. This could include correspondence,
              notes, or records related to your account or projects. Any such
              information is handled in strict accordance with our privacy
              policy and is utilized only for the purposes outlined therein,
              ensuring consistency in data management practices across all
              facets of our organization. The confidentiality and security of
              this information are paramount, and it will not be disclosed or
              used for any purposes other than those explicitly specified in our
              privacy policy.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              2. Who is collecting the personal data and is responsible for the
              security of the data?
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Following details illustrate how the user's details is being
              collected and how they are responsible for the security of data
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Who is Collecting the Data:</p>
            <p className={styles.thisCompanyIs}>
              The data is collected by your organization, the entity with which
              the user is engaged. As the data controller, your organization
              determines the purposes for which personal information is
              collected and processed.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Responsibility for Security:</p>
            <p className={styles.thisCompanyIs}>
              Your organization is dedicated to ensuring the security and
              confidentiality of the collected data. Robust security measures,
              including encryption, access controls, and routine security
              assessments, are implemented to protect user information from
              unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Data Collection and Usage:</p>
            <p className={styles.thisCompanyIs}>
              The data collected is used for specific purposes, including but
              not limited to:
            </p>
            <p className={styles.thisCompanyIs}>
              · Reviewing the tasks completed by the user within our platform.
            </p>
            <p className={styles.thisCompanyIs}>
              · Sending invitations or mentions to user-provided email addresses
              for meetings or other collaborative activities within the
              platform.
            </p>
            <p className={styles.thisCompanyIs}>
              · Communicating additional tasks and project-related information
              to the user through email notifications.
            </p>
            <p className={styles.thisCompanyIs}>
              · Recognizing and providing bonuses to users who receive positive
              reviews or demonstrate exceptional performance within the
              platform.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Bonus for Good Review:</p>
            <p className={styles.thisCompanyIs}>
              Your Organization may provide bonuses or incentives to users who
              receive positive reviews or demonstrate outstanding contributions
              to projects. Any such bonus distribution is carried out in
              accordance with our internal policies and is subject to applicable
              legal and regulatory considerations.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              3. Where can users go to review or update their personal
              information?
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Reviewing or Updating Profile:
            </p>
            <p className={styles.thisCompanyIs}>
              Users can review and update their profile information by accessing
              the "Settings" section within the platform. In the Settings menu,
              users will find options to view and modify their personal details,
              contact information, and any other relevant profile data.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Requesting Task Review:</p>
            <p className={styles.thisCompanyIs}>
              To request a review of ongoing tasks and performance feedback,
              users can utilize the designated feature within the platform.
              Typically, there is a specific section or functionality labeled
              "Task Review" or a similar term. Users can navigate to this
              section to request and view feedback on their tasks, fostering a
              transparent and collaborative environment.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Requesting Performance Review:
            </p>
            <p className={styles.thisCompanyIs}>
              Users can initiate a request for a performance review by reaching
              out to the designated reviewer or supervisor through the
              platform's communication channels. This may include sending a
              direct message, using an internal messaging system, or submitting
              a performance review request form. The process may vary, but clear
              instructions will be provided within the platform for users to
              take this action.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              4. When is user data collected?
            </p>
            <p className={styles.thisCompanyIs}>
              Collection of the user's data is initialized during preparation of
              the user's profile and through the year to review his tasks. Here
              are some more details on the subject:
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              During Initialization of User Profile:
            </p>
            <p className={styles.thisCompanyIs}>
              User data is initially collected during the setup of the user
              profile. This includes essential information such as name, contact
              details, and other relevant details needed to establish and
              personalize the user's account.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Providing Location Information:
            </p>
            <p className={styles.thisCompanyIs}>
              When users provide location information, such as property
              addresses or geographic details, as part of property reports or
              other interactions within the platform, this data is collected to
              enhance the accuracy and relevance of services provided.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Providing Property Reports:</p>
            <p className={styles.thisCompanyIs}>
              Data is collected when users generate and provide property reports
              within the platform. This may include details about property
              conditions, updates, or milestones relevant to the program
              management system.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Throughout the Year for Performance Analysis:
            </p>
            <p className={styles.thisCompanyIs}>
              User performance data is collected periodically throughout the
              year to assess and analyze individual contributions and
              achievements within the organization. This ongoing collection
              supports performance reviews, task evaluations, and the overall
              enhancement of the user's experience within the program management
              system.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              5. When are users notified of changes to the privacy policy?
            </p>
            <p className={styles.thisCompanyIs}>
              Users are notified from the notification system as mail when any
              changes occur in the system.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Through the Notification System:
            </p>
            <p className={styles.thisCompanyIs}>
              Users will be notified of any changes to the privacy policy
              through the platform's notification system. This may include
              in-app notifications, pop-ups, or other visible alerts when users
              log in to the system.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Via Email:</p>
            <p className={styles.thisCompanyIs}>
              Additionally, a notification email will be sent to the email
              address associated with the user's account within 1 to 2 days of
              any updates to the privacy policy. This email will highlight the
              nature of the changes and provide a link to the updated policy.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Within the Platform:</p>
            <p className={styles.thisCompanyIs}>
              A summary or notice of the changes will be prominently displayed
              within the platform, directing users to review the updated privacy
              policy. This ensures that users are aware of and have easy access
              to the modified terms.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Advance Notice:</p>
            <p className={styles.thisCompanyIs}>
              Where feasible, we strive to provide users with advance notice of
              upcoming changes to the privacy policy. This allows users to
              anticipate and understand the modifications before they come into
              effect.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              6. How is user data protected from unauthorized access or
              breaches?
            </p>
            <p className={styles.thisCompanyIs}>
              User data is secured through measures like access controls,
              authentication, encryption, regular audits, data backups, and
              employee awareness, ensuring protection against unauthorized
              access or breaches.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Access Control:</p>
            <p className={styles.thisCompanyIs}>
              Access to user data is strictly controlled through robust access
              control mechanisms. Role-based access ensures that individuals
              have access only to the data required for their specific roles,
              minimizing the risk of unauthorized access.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Authentication Methods:</p>
            <p className={styles.thisCompanyIs}>
              User authentication is a critical layer of defense. Our platform
              employs strong authentication methods, such as multi-factor
              authentication (MFA), to verify the identity of users. This
              enhances the security of user accounts and prevents unauthorized
              access.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Token Encryption:</p>
            <p className={styles.thisCompanyIs}>
              Sensitive data, such as authentication tokens, is encrypted to add
              an extra layer of protection. Encryption ensures that even if
              intercepted, the information remains secure and unreadable to
              unauthorized parties.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Security Audits:</p>
            <p className={styles.thisCompanyIs}>
              Regular security audits and assessments are conducted to identify
              and address vulnerabilities in the system. These proactive
              measures help ensure that the platform is resilient against
              emerging threats and potential weaknesses.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Data Backup:</p>
            <p className={styles.thisCompanyIs}>
              Regular data backups are performed to safeguard user data. In the
              event of a data breach or loss, these backups enable the swift
              recovery of information, minimizing disruptions and data loss.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Employee Awareness:</p>
            <p className={styles.thisCompanyIs}>
              Employee awareness is a key component of our security strategy.
              Staff members are trained on security best practices, emphasizing
              the importance of safeguarding user data. This proactive approach
              creates a security-conscious culture within the organization.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              7. Why is certain personal information necessary for the program
              management system?
            </p>
            <p className={styles.thisCompanyIs}>
              Collecting specific personal information within the program
              management system serves crucial roles in enabling secure and
              personalized user experiences.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              User Identification and Authentication:
            </p>
            <p className={styles.thisCompanyIs}>
              Personal information, such as usernames and authentication
              credentials, is essential to verify and authenticate user
              identities, ensuring secure access to the program management
              system.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Customization and Personalization:
            </p>
            <p className={styles.thisCompanyIs}>
              User profiles and associated personal details allow the program
              management system to customize and personalize the user
              experience. This includes tailoring interface preferences and
              displaying relevant project information to meet individual needs.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Communication:</p>
            <p className={styles.thisCompanyIs}>
              Contact information provided by users enables seamless
              communication within the platform, facilitating project updates,
              notifications, and collaborative interactions among project
              participants.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Task Assignment and Tracking:
            </p>
            <p className={styles.thisCompanyIs}>
              Personal information is utilized for assigning tasks and tracking
              project progress. This ensures effective project management,
              proper task allocation, and real-time monitoring of workflows.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Performance Evaluation:</p>
            <p className={styles.thisCompanyIs}>
              The system uses personal information to assess user performance,
              track contributions to projects, and provide constructive
              feedback. This supports performance evaluations and helps
              recognize outstanding achievements.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Security and Access Control:</p>
            <p className={styles.thisCompanyIs}>
              Personal information is integral to implementing security
              measures, including role-based access controls. This ensures that
              users have appropriate permissions based on their roles within the
              program management system, enhancing overall security.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Legal and Regulatory Compliance:
            </p>
            <p className={styles.thisCompanyIs}>
              The collection of certain personal information is necessary to
              comply with legal and regulatory requirements, ensuring that the
              program management system adheres to data protection laws and
              industry regulations.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              8. Other Important privacy policy
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Data Retention and Deletion:</p>
            <p className={styles.thisCompanyIs}>
              Clearly outline the duration for which user data is retained
              within the program management system. Specify the criteria and
              conditions that determine the retention period, considering legal
              obligations, business needs, and user preferences. Explain the
              process for data deletion or anonymization, ensuring transparency
              about how user data is managed throughout its life cycle.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Third-Party Data Sharing:</p>
            <p className={styles.thisCompanyIs}>
              Provide detailed information on any third-party entities with
              which user data may be shared. Specify the types of data shared,
              the purposes of sharing, and the security measures in place to
              protect user information during these exchanges. Include
              assurances about the responsible handling of data by third parties
              and offer users choices or opt-out options regarding third-party
              data sharing.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>User Consent Mechanisms:</p>
            <p className={styles.thisCompanyIs}>
              Articulate the methods used to obtain and record user consent
              before collecting, processing, or sharing personal information.
              Clearly state the specific purposes for which consent is sought.
              Include details on how users can modify or revoke their consent,
              emphasizing the organization's commitment to respecting user
              autonomy and informed decision-making.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Data Access and Correction Rights:
            </p>
            <p className={styles.thisCompanyIs}>
              Detail the procedures for users to access their personal data
              stored within the program management system. Specify the
              mechanisms in place for correcting or updating inaccuracies in the
              data. Provide information on the time frame within which user
              requests for data access and corrections will be addressed.
              Emphasize the organization's commitment to supporting user rights
              and ensuring data accuracy.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Data Portability:</p>
            <p className={styles.thisCompanyIs}>
              Explain the process through which users can request and obtain a
              copy of their personal data in a structured, commonly used, and
              machine-readable format. Outline the purposes for which users
              might exercise their data portability rights, such as transferring
              data to another service. Clearly communicate the organization's
              support for user data portability and the steps involved in making
              such requests.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Cookies and Tracking Technologies:
            </p>
            <p className={styles.thisCompanyIs}>
              Provide comprehensive information about the use of cookies and
              other tracking technologies within the program management system.
              Detail the types of cookies employed, their specific purposes
              (e.g., analytics, functionality), and their lifespan. Clearly
              explain how users can manage or control their cookie preferences,
              including options for opting out or adjusting settings. Emphasize
              the organization's commitment to respecting user privacy
              preferences.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>Children's Privacy:</p>
            <p className={styles.thisCompanyIs}>
              Clearly state whether the program management system is intended
              for use by children. If not, explicitly mention this in the
              privacy policy. If applicable, outline specific measures taken to
              protect the privacy of users under the age of 13, ensuring
              compliance with relevant children's privacy laws. Clearly
              communicate the organization's commitment to providing a safe and
              secure online environment for all users.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              Incident Response and Notification:
            </p>
            <p className={styles.thisCompanyIs}>
              Detail the organization's procedures and timelines for responding
              to data breaches or security incidents. Clearly outline the
              communication plan for notifying affected users about the
              incident, including the information to be provided and the
              channels through which notifications will be sent. Emphasize the
              organization's commitment to transparency and prompt communication
              in the event of a security incident.
            </p>
            <p className={styles.thisCompanyIs}>&nbsp;</p>
            <p className={styles.thisCompanyIs}>
              International Data Transfers:
            </p>
            <p className={styles.thisCompanyIs}>
              Provide a thorough explanation of any international data transfers
              that may occur. Clearly outline the safeguards in place to protect
              user data during these transfers, such as standard contractual
              clauses or adherence to international frameworks. Emphasize the
              organization's commitment to ensuring that international data
              transfers comply with applicable data protection laws and
              regulations, providing users with confidence in the secure
              handling of their information across borders.A
            </p>
          </a>
        </main>
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
            <div className={styles.disclaimer}>Privacy</div>
            <div className={styles.termOfUse1} onClick={onTermOfUseClick}>
              Term of use
            </div>
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

export default PrivacyPolicy;
