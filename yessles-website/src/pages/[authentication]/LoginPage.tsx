import { FiAlertCircle } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { userLogin } from "@/features/user/userSlice";
import { loginValues } from "@/utils/initialValue";
import { userLoginSchema } from "@/utils/schemas";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [seePassword, setSeePassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSeePassword = () => {
    setSeePassword(!seePassword);
  };
  return (
    <>
      <Formik
        initialValues={loginValues}
        validationSchema={userLoginSchema}
        autoComplete={"off"}
        onSubmit={(values) => {
          //@ts-ignore
          dispatch(userLogin(values, navigate));
        }}
      >
        {(props) => {
          // @ts-ignore
          const { values, handleChange, errors, handleSubmit } = props;

          return (
            <Form onSubmit={handleSubmit}>
              <div className="flex justify-center items-center w-screen h-screen">
                <Card className="mx-auto max-w-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">
                      Login to Yessles Panel
                    </CardTitle>
                    <CardDescription>
                      Masukkan Email serta Password Akun Kamu
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          autoComplete="off"
                          id="email"
                          type="email"
                          name="email"
                          onChange={handleChange}
                          placeholder="e.g kamu@yessles.id"
                        />
                        {errors.email && (
                          <div className="flex flex-row gap-x-2 items-center text-[12px] text-yl-30">
                            <FiAlertCircle /> <p>{errors.email}</p>
                          </div>
                        )}
                      </div>
                      <div className="grid gap-2 relative">
                        <div className="flex items-center">
                          <Label htmlFor="password">Password</Label>
                        </div>
                        <div className="relative">
                          <Input
                            autoComplete="off"
                            id="password"
                            type={seePassword ? "text" : "password"}
                            name="password"
                            onChange={handleChange}
                            placeholder="ketik password ... "
                          />
                          <div
                            className="absolute right-3 top-[24%] text-gray-600 active:scale-90 transition-all"
                            onClick={onSeePassword}
                          >
                            {seePassword ? (
                              <AiFillEyeInvisible className="size-5" />
                            ) : (
                              <AiFillEye className="size-5" />
                            )}
                          </div>
                        </div>
                        {errors.password && (
                          <div className="flex flex-row gap-x-2 items-center text-[12px] text-yl-30">
                            <FiAlertCircle /> <p>{errors.password}</p>
                          </div>
                        )}
                      </div>
                      <Button type="submit" className="w-full">
                        Login
                      </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                      Belum Punya Akun?{" "}
                      <Link to={"/panel/register"} className="underline">
                        Registrasi
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginPage;
