import React from "react";

const Footer = ({ absolute }) => {
  return (
    <>
      <div
        className={
          absolute
            ? "absolute bottom-0 w-full py-5 text-center bg-stone-900 text-slate-200"
            : "w-full py-5 text-center bg-stone-900 text-slate-200"
        }
      >
        <p>&#169; 2024 Victor Aderibigbe (BytesNova &trade;)</p>
      </div>
    </>
  );
};

export default Footer;
