import React from "react";

const Footer = ({ position }) => {
  const getPosition = (position) => {
    if (position === "abs") {
      return "absolute";
    } else {
      return "relative";
    }
  };

  return (
    <>
      <div
        className={`${getPosition(
          position
        )} bottom-0 w-full py-[2px] text-center bg-stone-900 text-slate-200`}
      >
        <p className="text-sm md:text-lg">
          &#169; 2024 Victor Aderibigbe (BytesNova &trade;)
        </p>
      </div>
    </>
  );
};

export default Footer;
