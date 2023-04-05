import { FunctionComponent, useEffect } from "react";
import { Button } from "@mui/material";
import VectorIcon from "../components/VectorIcon";
import styles from "./IPhone141.module.css";

const IPhone141: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
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
      }
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

  return (
    <div className={styles.iphone141}>
      <div className={styles.vitachat}>VitaChat</div>
      <Button
        className={styles.iphone141Child}
        sx={{ width: 157 }}
        variant="contained"
        color="primary"
        href="https://buy.stripe.com/00g14igsO7j4dry144"
      >
        Get Started
      </Button>
      <VectorIcon vector6="https://buy.stripe.com/00g14igsO7j4dry144" />
      <div className={styles.haveThePowerContainer}>
        <p
          className={styles.haveThePower}
        >{`Have the power of ChatGPT at your fingertips—no more waiting in the queue. `}</p>
        <p className={styles.haveThePower}>&nbsp;</p>
        <p className={styles.haveThePower}>
          Simply, send a text and get a response in less than a minute.
        </p>
      </div>
      <video
        className={styles.vitachatdemov11}
        autoPlay
        muted
        loop
        data-animate-on-scroll
      >
        <source src="/vitachatdemov1.mp4" />
      </video>
    </div>
  );
};

export default IPhone141;
