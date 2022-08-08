import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../config/firebase";
import toast from "react-hot-toast";

const Reset = ({ showModalReset, setShowModalReset }) => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleReset = async (event) => {
    event.preventDefault();

    await sendPasswordResetEmail(event.target.email.value);
    toast.success("Password reset successfully.");
    setTimeout(() => {
        setShowModalReset(false);
    }, 2000);
  };
  return (
    <>
      {showModalReset && (
        <section>
          <div>
            <div className="flex justify-center items-center bg-gray-100">
              <form
                className="p-10 bg-white rounded flex justify-center items-center flex-col"
                onSubmit={handleReset}
              >
                <input
                  type="email"
                  name="email"
                  className="mb-5 p-3 w-80 focus:border-[#00affa] rounded border-2 outline-none"
                  autoComplete="off"
                  placeholder="Email"
                  required
                />
                <button className="btn btn-sm rounded px-6 capitalize bg-[#251D58]">
                  Reset
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Reset;
