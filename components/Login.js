import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../config/firebase";
import Modal from "./Modal";
import Register from "./Register";
import Reset from "./Reset";
import toast from "react-hot-toast";

const Login = ({ showModalLogin, setShowModalLogin }) => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [showModalReset, setShowModalReset] = useState(false);
  const [showModalRegistration, setShowModalRegistration] = useState(false);
  const register = "Sign up";
  const reset = "Reset password";

  const handleLogin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(
      event.target.email.value,
      event.target.password.value
    );
    toast.success("Login successful.");
    setTimeout(() => {
      setShowModalLogin(false);
    }, 2000);
  };

  return (
    <>
      {showModalLogin && (
        <section>
          <div>
            <div className="flex justify-center items-center bg-gray-100">
              <form
                className="p-10 bg-white rounded flex justify-center items-center flex-col"
                onSubmit={handleLogin}
              >
                <input
                  type="email"
                  name="email"
                  className="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none"
                  autoComplete="off"
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  name="password"
                  className="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none"
                  autoComplete="off"
                  placeholder="Password"
                  required
                />
                <div className="flex justify-between w-full mb-8">
                  <span
                    className="cursor-pointer"
                    onClick={() => setShowModalReset(true)}
                  >
                    Forgot password?
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => setShowModalRegistration(true)}
                  >
                    Create account.
                  </span>
                </div>
                <button className="btn btn-sm rounded px-6 capitalize bg-[#251D58]">
                  Sign In
                </button>
              </form>
            </div>
          </div>
          {(showModalRegistration && (
            <Modal
              showModal={showModalRegistration}
              setShowModal={setShowModalRegistration}
              title={register}
              content={
                <Register
                  showModalRegistration={showModalRegistration}
                  setShowModalRegistration={setShowModalRegistration}
                />
              }
            />
          )) ||
            (showModalReset && (
              <Modal
                showModal={showModalReset}
                setShowModal={setShowModalReset}
                title={reset}
                content={
                  <Reset
                    showModalReset={showModalReset}
                    setShowModalReset={setShowModalReset}
                  />
                }
              />
            ))}
        </section>
      )}
    </>
  );
};

export default Login;
