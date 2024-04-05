import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Image from "../../components/layout/Image";
import reg_img from "../../assets/reg_img.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { spacing } from "@mui/system";
import Heading from "../../components/layout/Heading";
import { FaAccessibleIcon } from "react-icons/fa";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import Paragraph from "../../components/layout/Paragraph";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import LoadingButton from "@mui/lab/LoadingButton";
import { ColorRing } from "react-loader-spinner";
import { Bounce, Zoom, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const auth = getAuth();

  let navigate = useNavigate();

  let [regData, setRegData] = useState({
    email: "",
    password: "",
  });

  let [regError, setRegError] = useState({
    email: "",
    password: "",
  });

  let [openEye, setOpenEye] = useState(false);
  let [loading, setLoading] = useState(false);

  let handleChange = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
    setRegError({ ...regError, [e.target.name]: "" });
  };

  let handleSubmit = () => {
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log("Email Requierd");
    if (!regData.email) {
      setRegError({ ...regError, email: "Email Requierd" });
    } else if (!pattern.test(regData.email)) {
      setRegError({ ...regError, email: "Valid Email Requierd" });
    } else if (!regData.password) {
      setRegError({ ...regError, password: "Password Requierd" });
    } else if (regData.password.length < 6) {
      setRegError({
        ...regError,
        password: "Password must be greter than 6 charecter",
      });
    } else {
      setLoading(true);
      signInWithEmailAndPassword(auth, regData.email, regData.password)
        .then((userCredential) => {
          setLoading(false);
          toast.success("Login Sussessful", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          navigate("/home");
          console.log("usercreated", userCredential);
        })
        .catch((error) => {
          toast.error("Invalid Credential", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);

          console.log(error.message.includes("invalid-credential"));
          if (error.message.includes("invalid-credential")) {
            setRegError({ ...regError, email: "Invalid Credential" });
          }
          // ..
        });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={6}>
        <div className="regBox">
          <Heading as="h1" text="Login to your account!" className="regTitle" />

          <div className="inputMain">
            <div className="inputDiv">
              <TextField
                name="email"
                onChange={handleChange}
                type="email"
                id="outlined-basic"
                variant="outlined"
                label="Email Address"
                placeholder="Youraddres@email.com"
              />
            </div>
            {regError.email && (
              <Alert className="regErrorDesign" severity="error">
                {regError.email}
              </Alert>
            )}
            <div className="inputDiv">
              <TextField
                name="password"
                onChange={handleChange}
                type={openEye ? "text" : "password"}
                id="outlined-basic"
                variant="outlined"
                label="Password"
                placeholder="Enter your password"
              />
              {!openEye && (
                <FaEye onClick={() => setOpenEye(!openEye)} className="eye" />
              )}
              {openEye && (
                <FaEyeSlash
                  onClick={() => setOpenEye(!openEye)}
                  className="eye"
                />
              )}
            </div>
            {regError.password && (
              <Alert className="regErrorDesign" severity="error">
                {regError.password}
              </Alert>
            )}
            <div className="btnDiv">
              <Button
                variant="contained"
                onClick={handleSubmit}
                className="regButton logButton"
              >
                Login to Continue
              </Button>
              {loading && (
                <ColorRing
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{
                    position: "absolute",
                    right: "80px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              )}
            </div>
            <Link
              className="signInPara"
              style={{ marginTop: "16px", display: "inline-block" }}
              to="/forgotPass"
            >
              Forgot Password
            </Link>
            <Paragraph className="signInPara textLeft">
              Don’t have an account ?
              <Link to="/" className="signInLink">
                Sign up
              </Link>
            </Paragraph>
          </div>
        </div>
      </Grid>
      <Grid xs={6}>
        <Image srcImg={reg_img} altText="reg_img" className="regImage" />
      </Grid>
    </Grid>
  );
};

export default Login;
