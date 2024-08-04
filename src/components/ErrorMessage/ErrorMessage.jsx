import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        У темныx сил пропала связь.
        <br />
        Данные не подгружаются.
        <br />
        Жди...
      </p>
    </>
  );
};

export default ErrorMessage;
