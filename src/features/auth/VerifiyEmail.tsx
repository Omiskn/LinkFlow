// import { useEffect, useState } from "react";
// import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Spinner } from "@/components/ui/Spinner";
import { Field } from "@/components/ui/field";
import { useVerifiyEmail } from "./hooks/useVerifiyEmail";
import { useEffect } from "react";

function VerifiyEmail() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const navigate = useNavigate();
  const { verifyEmail, isloading, isError, isSuccess } = useVerifiyEmail();
  //   const [called, setCalled] = useState(false);

  //   const hasVerified = useRef(false);

  console.log(isSuccess);
  console.log(isError);
  console.log(isloading);

  useEffect(() => {
    if (!token) return;

    verifyEmail(token);
  }, [token, verifyEmail]);

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md text-center shadow-lg mt-8">
        <CardHeader>
          <CardTitle>Email Verification</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {isloading && (
            <Field
              orientation="horizontal"
              className="flex items-center justify-center"
            >
              <Spinner />
              <p className="text-gray-500">Verifying your email</p>
            </Field>
          )}

          {/* <Alert>
            <InfoIcon />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
            <AlertAction>
              <Button variant="outline">Enable</Button>
            </AlertAction>
          </Alert> */}

          {isSuccess && (
            <>
              <Alert className="border-green-500 text-green-600">
                <AlertTitle>You have been verified!</AlertTitle>

                <AlertDescription>
                  Your email has been successfully verified 🎉
                </AlertDescription>
              </Alert>

              <Button
                onClick={() => {
                  navigate("/login");
                }}
                className="w-full"
              >
                Go to Login
              </Button>
            </>
          )}

          {isError && (
            <>
              <Alert className="border-red-500 text-red-600">
                <AlertTitle>Verified faild!</AlertTitle>

                <AlertDescription>
                  Something went wrong. The link may be invalid or expired.
                </AlertDescription>
              </Alert>

              <Button
                onClick={() => window.location.reload()}
                className="w-full"
              >
                Try Again
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default VerifiyEmail;
