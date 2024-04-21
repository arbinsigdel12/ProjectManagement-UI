import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./Pricing.module.css";
const Pricing = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeadingContainerClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onHeadingContainer1Click = useCallback(() => {
    navigate("/featurespage");
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

  const onConfirmpricebtnClick = useCallback(() => {
    // Please sync "HomePage14" to the project
  }, []);

  const onPlaystoreContainerClick = useCallback(() => {
    window.open("*");
  }, []);

  const onAppleContainerClick = useCallback(() => {
    window.open("*");
  }, []);

  const onFrameContainer17Click = useCallback(() => {
    window.open("*");
  }, []);

  const onJoinUsOnClick = useCallback(() => {
    window.open("*");
  }, []);

  const onFrameContainer18Click = useCallback(() => {
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

  const [email, setEmail] = useState('');
  const [confirmationEmail, setConfirmationEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const displayConfirmation = () => {
    setConfirmationEmail(email);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, name: 'FonePay', src: 'undefined22.png' }, // Add your image source here
    { id: 2, name: 'ESewa', src: 'undefined23.png' }, // Add your image source here
    { id: 3, name: 'IMEPay', src: 'undefined24.png' }, // Add your image source here
    { id: 4, name: 'Khalti', src: 'undefined25.png' }, // Add your image source here
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleSubmit = () => {
  console.log(selectedItem.name);
  console.log(confirmationEmail);
  console.log(selectedImage.name);
  console.log(selectedItem.price);
  };

  return (
    <>
      <div className={styles.pricing}>
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
              <div className={styles.heading4}>
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
        <div className={styles.pricingcontainer1}>
          <div className={styles.pricepermonth}>
            <div className={styles.step1}>
              <div className={styles.step1Wrapper}>
                <div className={styles.plan}>Step 1</div>
              </div>
              <div className={styles.selectYourPlan1}>
                Select your plan to work with :
              </div>
            </div>
            <div className={styles.suscriptionoption}>
              <div className={styles.pricingBox} onClick={() => handleItemClick({ name: '1 month', price: 'Rs 2500|-'})}>
                <div className={styles.month}>1 month</div>
                <div className={styles.rs2500}>Rs 2500|-</div>
                <div className={styles.perMonth}>per month</div>
              </div>
              <div className={styles.pricingBox} onClick={() => handleItemClick({ name: '6 month', price: 'Rs 2000|-'})}>
                <div className={styles.month}>6 month</div>
                <div className={styles.rs2500}>Rs 2000|-</div>
                <div className={styles.perMonth}>per month</div>
              </div>
              <div className={styles.pricingBox} onClick={() => handleItemClick({ name: '1 year', price: 'Rs 1750|-'})}>
                <div className={styles.month}>1 year</div>
                <div className={styles.rs2500}>Rs 1750|-</div>
                <div className={styles.perMonth}>per month</div>
              </div>
            </div>
          </div>
          <div className={styles.emailaddress}>
            <div className={styles.month}>
              All money is shown in Nepali Rupees
            </div>
            <div className={styles.step2}>
              <div className={styles.step2Wrapper}>
                <div className={styles.plan}>Step 2</div>
              </div>
              <div className={styles.enterYourEmail1}>
                Enter your email address :
              </div>
            </div>
            <div className={styles.month}>
              Privacy guaranteed:We don’t share your private information and
              will contact you only when needed
            </div>
            <div className={styles.emailaddress} >
              <input className={styles.emailtoprice1} type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
              <button className={styles.submit} onClick={displayConfirmation}>Confirm Email</button>
            </div>
          </div>
          <div className={styles.payoption}>
            <div className={styles.step3}>
              <div className={styles.step2Wrapper}>
                <div className={styles.plan}>Step 3</div>
              </div>
              <div className={styles.chooseYourPayment1}>
                Choose your payment option:
              </div>
            </div>
            <div className={styles.paymentoption}>
                 <div style={{ overflowY: 'auto', maxHeight: '200px', width: '500px' }}>
                  <div>
                  {images.map((image) => (
                   <div key={image.id} style={{ cursor: 'pointer' }} onClick={() => handleImageClick(image)}>
                    <img className={styles.paymentimage}style={{ width: '300px', height: '100px' }}
                    src={image.src} alt={image.name}
                    />
                   </div>
                   ))}
                   </div>
              </div>
            </div>
            </div>
          <div className={styles.payDetail}>
            <div className={styles.confirmDetails}>Confirm Details</div>
            <div className={styles.month}>
              ************************************************************************************************************************
            </div>
            <div className={styles.planParent}>
              <div className={styles.plan}>PLAN:</div>
              <div className={styles.monthWrapper}>
                <div className={styles.plan}>{selectedItem && (
                            <div>
                              <p>{selectedItem.name}</p>
                            </div>
                          )}</div>
              </div>
            </div>
            <div className={styles.emailAddressParent}>
              <div className={styles.plan}>Email Address:</div>
              <div className={styles.monthWrapper}>
                <div className={styles.plan}>{confirmationEmail && (
                <div>
                  <p>{confirmationEmail}</p>
                </div>
              )}</div>
              </div>
            </div>
            <div className={styles.paymentOptionParent}>
              <div className={styles.plan}>Payment Option:</div>
              <div className={styles.monthWrapper}>
                <div className={styles.plan}>
                {selectedImage && (
                    <div>
                      <p>{selectedImage.name}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.totalParent}>
              <div className={styles.plan}>Total:</div>
              <div className={styles.monthWrapper}>
                <div className={styles.plan}>{selectedItem && (
                            <div>
                              <p>{selectedItem.price}</p>    
                            </div>
                          )}</div>
              </div>
            </div>
            <div className={styles.month}>
              ************************************************************************************************************************
            </div>
            <button
              className={styles.confirmpricebtn1}
              onClick={handleSubmit}
            >
              <div className={styles.confirm}>CONFIRM</div>
            </button>
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
                      <p className={styles.getItOn}>Get IT on</p>
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
                      <p className={styles.getItOn}>{`Download on `}</p>
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
                onClick={onFrameContainer17Click}
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
                onClick={onFrameContainer18Click}
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
export default Pricing;
