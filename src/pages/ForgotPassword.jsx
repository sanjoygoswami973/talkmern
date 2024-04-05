import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Heading from "../components/layout/Heading";

const ForgotPassword = () => {
  const auth = getAuth();
  let navigate = useNavigate();

  let [forgotValue, setForgotValue] = useState("");
  let [loading, setLoading] = useState(false);

  let handleForgotChange = (e) => {
    setForgotValue(e.target.value);
  };

  let handleForgotClick = () => {
    console.log(forgotValue);
    setLoading(true);
    sendPasswordResetEmail(auth, forgotValue)
      .then(() => {
        setLoading(false);
        toast.success("Please Check Your Email", {
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
        setForgotValue("");
        navigate("/login");
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        toast.error("Please Enter Your Valid Email", {
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
      });
    // setForgotValue("");
  };

  return (
    <div className="forgotBox">
      <div className="containBox">
        <Heading
          as="h3"
          text="Forgot Password"
          style={{ marginBottom: "20px" }}
        />
        <TextField
          onChange={handleForgotChange}
          id="outlined-basic"
          label="Email"
          placeholder="Enter Your Email"
          variant="outlined"
          value={forgotValue}
        />
        <div style={{ marginTop: "16px" }}>
          {!loading && (
            <Button onClick={handleForgotClick} variant="contained">
              Submit
            </Button>
          )}
          {loading && (
            <ColorRing
              visible={true}
              height="38"
              width="90"
              ariaLabel="color-ring-loading"
              wrapperStyle={{
                background: "#f1ecec",
              }}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
