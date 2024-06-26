import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { auth } from "../Common/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = ({ setActive, setUser }) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();

  const { email, password, firstName, lastName, confirmPassword } = state;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        try {
          const { user } = await signInWithEmailAndPassword(auth, email, password);
          setUser(user);
          setActive("dashboard");
          navigate("/dashboard"); // Navigate to dashboard after successful sign-in
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error("All fields are mandatory to fill");
      }
    } else {
      if (password !== confirmPassword) {
        toast.error("Password doesn't match");
      } else if (firstName && lastName && email && password) {
        try {
          const { user } = await createUserWithEmailAndPassword(auth, email, password);
          await updateProfile(user, { displayName: `${firstName} ${lastName}` });
          setUser(user);
          setActive("dashboard");
          navigate("/dashboard"); // Navigate to dashboard after successful sign-up
        } catch (error) {
          toast.error(error.message);
        }
      } else {
        toast.error("All fields are mandatory to fill");
      }
    }
  };

  return (
      <div className="container-fluid m-10">
        <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-center text-2xl font-bold mb-4">
            {!signUp ? "Sign-In" : "Sign-Up"}
          </h2>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-10 col-md-8 col-lg-6">
              <form className="row" onSubmit={handleAuth}>
                {signUp && (
                  <>
                    <div className="col-6 py-3">
                      <input
                        type="text"
                        className="form-control input-text-box"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6 py-3">
                      <input
                        type="text"
                        className="form-control input-text-box"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}
                <div className="col-12 py-3">
                  <input
                    type="email"
                    className="form-control input-text-box"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 py-3">
                  <input
                    type="password"
                    className="form-control input-text-box"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                {signUp && (
                  <div className="col-12 py-3">
                    <input
                      type="password"
                      className="form-control input-text-box"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                )}

                <div className="col-12 py-3 text-center">
                  <button
                    className={`btn ${!signUp ? "btn-sign-in" : "btn-sign-up"}`}
                    type="submit"
                  >
                    {!signUp ? "Sign-in" : "Sign-up"}
                  </button>
                </div>
              </form>
              <div>
                {!signUp ? (
                  <>
                    <div className="text-center justify-content-center mt-2 pt-2">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account ?&nbsp;
                        <span
                          className="link-danger"
                          style={{ textDecoration: "none", cursor: "pointer" }}
                          onClick={() => setSignUp(true)}
                        >
                          Sign Up
                        </span>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center justify-content-center mt-2 pt-2">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Already have an account ?&nbsp;
                        <span
                          style={{
                            textDecoration: "none",
                            cursor: "pointer",
                            color: "#298af2",
                          }}
                          onClick={() => setSignUp(false)}
                        >
                          Sign In
                        </span>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Auth;
