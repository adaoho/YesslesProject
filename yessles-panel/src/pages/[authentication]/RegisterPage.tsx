import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
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
import { userRegister } from "@/features/user/userSlice";
import { registerValues } from "@/utils/initialValue";
import { userRegisterSchema } from "@/utils/schemas";
import { Formik } from "formik";
import { FiAlertCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Form, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [seePassword, setSeePassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSeePassword = () => {
    setSeePassword(!seePassword);
  };

  return (
    <>
      <Formik
        initialValues={registerValues}
        validationSchema={userRegisterSchema}
        autoComplete={"off"}
        onSubmit={(values) => {
          //@ts-ignore
          dispatch(userRegister(values, navigate));
        }}
      >
        {(props) => {
          //@ts-ignore
          const { values, errors, handleSubmit, handleChange } = props;

          return (
            <Form onSubmit={handleSubmit}>
              <div className="flex justify-center items-center w-screen h-screen">
                <Card className="mx-auto max-w-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Daftar Yessles Panel
                    </CardTitle>
                    <CardDescription>
                      Lengkapi informasi pada kolom berikut untuk melakukan
                      registrasi
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="first-name">Nama Lengkap</Label>
                        <Input
                          id="full-name"
                          placeholder="Emi Rahayu"
                          name="full_name"
                          onChange={handleChange}
                        />
                        {errors.full_name && (
                          <div className="flex flex-row gap-x-2 items-center text-[12px] text-yl-30">
                            <FiAlertCircle /> <p>{errors.full_name}</p>
                          </div>
                        )}
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="e.g kamu@yessles.id"
                          name="email"
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <div className="flex flex-row gap-x-2 items-center text-[12px] text-yl-30">
                            <FiAlertCircle /> <p>{errors.email}</p>
                          </div>
                        )}
                      </div>
                      <div className="grid gap-2 relative">
                        <Label htmlFor="password">Password</Label>
                        <div className="flex relative">
                          <Input
                            id="password"
                            type={seePassword ? "text" : "password"}
                            name="password"
                            placeholder="ketik password ... "
                            onChange={handleChange}
                          />
                          <div
                            className="absolute right-3 top-[28%] text-gray-600 active:scale-90 transition-all"
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
                        Create an account
                      </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                      Sudah Punya Akun?{" "}
                      <Link to={"/login"} className="underline">
                        Sign in
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

export default RegisterPage;
