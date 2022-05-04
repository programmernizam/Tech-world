import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { Container } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleName = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  const handleEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Email" });
    }
  };

  const handlePassword = (e) => {
    const passwordRegex = /.{6}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password: "Password Must Be  contain 6 characters",
      });
    }
  };
  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password Don't Match" });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  return (
    <Container>
      <PageTitle title={'Sign Up'}/>
      <div className="shadow p-5 my-5 mx-auto" id="login-form">
        <h2>Login Here</h2>
        <form onSubmit={handleCreateAccount}>
          <input
            onChange={handleName}
            className="input-filed"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            onChange={handleEmail}
            className="input-filed"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          {errors?.email && (
            <p className="text-danger my-3 fw-bold">{errors?.email}</p>
          )}
          <input
            onChange={handlePassword}
            className="input-filed"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {errors?.password && (
            <p className="text-warning my-3 fw-bold">{errors?.password}</p>
          )}
          <input
            onChange={handleConfirmPassword}
            className="input-filed"
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            required
          />
          {errors?.confirmPassword && (
            <p className="text-warning my-3 fw-bold">
              {errors?.confirmPassword}
            </p>
          )}
          <p className="text-white">
            Already have a account?{" "}
            <Link className="text-decoration-none text-info" to={"/login"}>
              Login
            </Link>
          </p>
          {loading && <Loading></Loading>}
          <p className="text-warning">{error?.message}</p>
          <input type="submit" value="SignUP" className="input-submit" />
          <SocialLogin />
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
