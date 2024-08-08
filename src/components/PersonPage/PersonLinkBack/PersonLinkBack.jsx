import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import iconBack from "./img/arrow.svg";

import styles from "./PersonLinkBack.module.css";

const PersonLinkBack = () => {
  let navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <Link to="#" onClick={handleGoBack} className={styles.link}>
      <img className={styles.link__img} src={iconBack} alt="go back" />
      <span>Go back</span>
    </Link>
  );
};

export default PersonLinkBack;
