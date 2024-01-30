import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./DashboardLoginLightTheme.module.css";
const DashboardLoginLightTheme: FunctionComponent = () => {
  return (
    <div className={styles.dashboardLoginLightTheme}>
      <img className={styles.vectorsIcon} alt="" src="/vectors1.svg" />
      <img
        className={styles.lightModeDarkMode}
        alt=""
        src="/light-mode--dark-mode.svg"
      />
      <div className={styles.form}>
        <div className={styles.sectionForgot}>
          <a className={styles.forgotPassword}>Forgot password?</a>
          <div className={styles.rememberMe}>Remember me</div>
          <Form.Check
            className={styles.sectionForgotChild}
            label="Remember me"
          />
        </div>
        <button className={styles.loginBtn} autoFocus>
          <Button className={styles.rectangle} variant="success">
            Login
          </Button>
          <div className={styles.login}>login</div>
        </button>
        <input
          className={styles.password}
          type="text"
          placeholder="Password"
          maxLength
          minLength
        />
        <input
          className={styles.username}
          type="text"
          placeholder="Login"
          maxLength
          minLength
          required
        />
        <div className={styles.signInAnd}>
          Sign in and start managing your candidates!
        </div>
        <div className={styles.signIn}>Sign in</div>
      </div>
    </div>
  );
};

export default DashboardLoginLightTheme;
