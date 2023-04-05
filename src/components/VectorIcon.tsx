import { FunctionComponent } from "react";
import styles from "./VectorIcon.module.css";

type VectorIconType = {
  vector6?: string;
};

const VectorIcon: FunctionComponent<VectorIconType> = ({
  vector6 = "https://buy.stripe.com/00g14igsO7j4dry144",
}) => {
  return <img className={styles.iphone141Child} alt="" src={vector6} />;
};

export default VectorIcon;
