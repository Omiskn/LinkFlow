import AuthLayout from "../../layouts/AuthLayout";
import AuthRight from "./components/AuthRight";
import AuthLeft from "./components/AuthLeft";
import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <AuthLayout>
      <AuthRight
        to="register"
        title="Hello, Friend!"
        buttonText="Sign up"
        message="Enter your personal details and start journey with us"
      />
      <AuthLeft
        title="Sign in to Link Nest"
        message="or use your email account"
        formType={<LoginForm />}
      />
    </AuthLayout>
  );
}
