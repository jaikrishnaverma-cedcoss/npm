import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import styles from "./DashboardLoginDarkTheme.module.css";
const DashboardLoginDarkTheme: FunctionComponent = () => {
  return (
    <div className={styles.dashboardLoginDarkTheme}>
      <img className={styles.vectorsIcon} alt="" src="/vectors.svg" />
      <img
        className={styles.lightModeDarkMode}
        alt=""
        src="/light-mode--dark-mode.svg"
      />
      <div className={styles.form}>
        <div className={styles.sectionForgot}>
          <div className={styles.forgotPassword}>Forgot password?</div>
          <div className={styles.rememberMe}>Remember me</div>
          <div className={styles.sectionForgotChild} />
        </div>
        <Button className={styles.loginBtn} variant="success">
          login
        </Button>
        <Form.Group className={styles.passwordFormgroup}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Input placeholder" />
        </Form.Group>
        <Form.Group className={styles.usernameFormgroup}>
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Input placeholder"
            defaultValue="Login"
          />
        </Form.Group>
        <div className={styles.signInAnd}>
          Sign in and start managing your candidates!
        </div>
        <div className={styles.signIn}>Sign in</div>
      </div>
    </div>
  );
};

export default DashboardLoginDarkTheme;
