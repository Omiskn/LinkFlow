import AuthLayout from "../../layouts/AuthLayout";
import AuthRight from "./components/AuthRight";
import AuthLeft from "./components/AuthLeft";
import SignUpForm from "./components/SignUpForm";

export default function SignUp() {
  return (
    <AuthLayout>
      <AuthRight
        to="login"
        title="welcome back!"
        buttonText="Login"
        message="To keep connected with use pleae login with your personal info"
      />
      <AuthLeft
        title="Create Account"
        message="or use your email for registration
"
        formType={<SignUpForm />}
      />
    </AuthLayout>
  );
}
