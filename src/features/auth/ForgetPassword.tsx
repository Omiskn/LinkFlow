import AuthLayout from "../../layouts/AuthLayout";
import AuthLeft from "./components/AuthLeft";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

export default function ForgetPassword() {
  return (
    <AuthLayout>
      <AuthLeft
        title="Forget Password"
        showSocial={false}
        formType={<ForgotPasswordForm />}
      />
    </AuthLayout>
  );
}
