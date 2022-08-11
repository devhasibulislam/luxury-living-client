import React from "react";
const Mockup = ({ children }) => {
  return (
    <section className="shadow rounded-2xl">
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
          {children}
        </div>
      </div>
    </section>
  );
};
export default Mockup;
