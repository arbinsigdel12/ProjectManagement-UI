import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Drawer.module.css";
const Drawer = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      },
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/featurespage");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/pricing");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/contactsales");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    window.open("https://pm-system.mstech.com.np/");
    onClose && onClose();
  }, []);

  const onFrameButtonClick = useCallback(() => {
    window.open("https://pm-system.mstech.com.np/");
    onClose && onClose();
  }, []);

  return (
    <div className={styles.drawer1} data-animate-on-scroll>
      <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
        <div className={styles.home}>Home</div>
      </div>
      <div className={styles.aboutUsWrapper} onClick={onFrameContainer1Click}>
        <div className={styles.home}>About Us</div>
      </div>
      <div className={styles.featuresWrapper} onClick={onFrameContainer2Click}>
        <div className={styles.home}>Features</div>
      </div>
      <div className={styles.pricingWrapper} onClick={onFrameContainer3Click}>
        <div className={styles.home}>Pricing</div>
      </div>
      <div
        className={styles.contactSalesWrapper}
        onClick={onFrameContainer4Click}
      >
        <div className={styles.home}>Contact Sales</div>
      </div>
      <div className={styles.signInWrapper} onClick={onClose}>
        <div className={styles.home} onClick={onFrameContainer5Click}>SIGN IN</div>
      </div>
      <button className={styles.getStartedWrapper} onClick={onClose}>
        <div className={styles.getStarted}onClick={onFrameButtonClick}>Get Started</div>
      </button>
      <img
        className={styles.closeIcon1}
        alt=""
        src="/undefined.png"
        onClick={onClose}
      />
    </div>
  );
};

export default Drawer;
