import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../config/firebase";
import Login from "./Login";
import Modal from "./Modal";
import toast from "react-hot-toast";
import axios from "axios";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";

const Register = ({ showModalRegistration, setShowModalRegistration }) => {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const login = "Sign in";

  useEffect(() => {
    if (user?.displayName && user?.email) {
      const { data } = axios.post("https://luxury-living-ll-server.onrender.com/user/", {
        name: user?.displayName,
        email: user?.email,
        password: "encrypted",
        role: "customer",
      });

      console.log(data);
    }
  }, [user]);

  const handleRegister = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: event.target.name.value });
    toast.success("Registration successful.");

    const { data } = await axios.post("https://luxury-living-ll-server.onrender.com/user/", {
      name,
      email,
      password,
      role: "customer",
    });

    console.log(data);

    setTimeout(() => {
      setShowModalRegistration(false);
    }, 2000);
  };

  return (
    <>
      {showModalRegistration && (
        <section>
          <div>
            <div className="flex justify-center items-center bg-gray-100">
              <form
                className="p-10 bg-white rounded flex justify-center items-center flex-col"
                onSubmit={handleRegister}
              >
                <input
                  type="text"
                  name="name"
                  className="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none"
                  autoComplete="off"
                  placeholder="Name"
                  required
                />
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
                    onClick={() => setShowModalLogin(true)}
                  >
                    Have account?
                  </span>
                </div>
                <button className="btn btn-sm rounded px-6 capitalize bg-[#251D58]">
                  Sign Up
                </button>
                <div
                  className="flex items-center justify-between border rounded-full w-full mt-8"
                  onClick={() => signInWithGoogle()}
                >
                  <Image
                    src="/assets/google.svg"
                    alt="google sign in logo"
                    height={31}
                    width={31}
                  />
                  <span className="font-semibold">Sign in with Google</span>
                  <span></span>
                </div>
              </form>
            </div>
          </div>
          {showModalLogin && (
            <Modal
              showModal={showModalLogin}
              setShowModal={setShowModalLogin}
              title={login}
              content={
                <Login
                  showModalLogin={showModalLogin}
                  setShowModalLogin={setShowModalLogin}
                />
              }
            />
          )}
        </section>
      )}
    </>
  );
};

export default Register;
