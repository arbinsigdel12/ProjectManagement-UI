import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./ContactSales.module.css";
import Sucess from "../components/Sucess";
import PortalPopup from "../components/PortalPopup";
const ContactSales = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const [isSucessPopupOpen, setSucessPopupOpen] = useState(false);

  const openSucessPopup = useCallback(() => {
    setSucessPopupOpen(true);
  }, []);

  const closeSucessPopup = useCallback(() => {
    setSucessPopupOpen(false);
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeadingContainerClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onHeadingContainer1Click = useCallback(() => {
    navigate("/featurespage");
  }, [navigate]);

  const onHeadingContainer2Click = useCallback(() => {
    navigate("/pricing");
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

  const[namefirst,setName]=useState('');
  const[emailadd,setAdd]=useState('');
  const[message,setMess]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    const formsub={namefirst,emailadd,message}
    console.log(formsub)
    openSucessPopup();
  
  }
  return (
    <>
      <div className={styles.contactsales}>
        <header className={styles.navbar1}>
          <div className={styles.image1Wrapper} onClick={onFrameContainerClick}>
            <img className={styles.image1Icon} alt="" src="/undefined1.png" />
          </div>
          <div className={styles.mainlinks}>
            <nav className={styles.links1}>
              <div className={styles.heading} onClick={onHeadingContainerClick}>
                <div className={styles.heading1}>About Us</div>
              </div>
              <div
                className={styles.heading}
                onClick={onHeadingContainer1Click}
              >
                <div className={styles.heading1}>Features</div>
              </div>
              <div
                className={styles.heading}
                onClick={onHeadingContainer2Click}
              >
                <div className={styles.heading1}>Pricing</div>
              </div>
              <div className={styles.heading6}>
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
        <div className={styles.getintouchwithuscontainer1}>
          <div className={styles.getInTouch}>GET IN TOUCH WITH US</div>
          <div className={styles.abcCompanyIs}>
            ABC Company is here to manage all your projects
          </div>
        </div>
        <section className={styles.formfillcontainer1}>
          <div className={styles.readytotryframe}>
            <div className={styles.getInTouch}>
              READY TO TRY ABC Company for yourself
            </div>
            <div className={styles.weWillLoveContainer}>
              <p className={styles.fillOutThe}>
                We will love to provide information to you about our system
              </p>
              <p className={styles.fillOutThe}>
                Fill out the following form and we will be in touch with you
              </p>
              <p className={styles.fillOutThe}> within 24 hours</p>
            </div>
          </div>
          <form className={styles.nameParent} onSubmit={handleSubmit} action="/contactsales">
            <input className={styles.name1}value={namefirst} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your name here" required/>
            <input className={styles.phone1}value={emailadd} onChange={(e)=>setAdd(e.target.value)} type="email" placeholder="Enter Email address here" required />
            <textarea className={styles.message1}value={message} onChange={(e)=>setMess(e.target.value)} placeholder="Want to write any information to share to us" required />
            <input className={styles.submit} type="submit"/>
            {isSucessPopupOpen && (
              <PortalPopup
               overlayColor="rgba(113, 113, 113, 0.85)"
               placement="Centered"
               onOutsideClick={closeSucessPopup}
              >
              <Sucess onClose={closeSucessPopup} />
              </PortalPopup>
              )}
          </form>
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
                      <p className={styles.fillOutThe}>Get IT on</p>
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
                      <p className={styles.fillOutThe}>{`Download on `}</p>
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

export default ContactSales;
