import React from "react";

const LangImage = ({ lang, name, className }) => {
  return (
    <img
      src={`/assets/${lang}/${name}`}
      className={className}
      alt=""
      onError={(e) => {
        e.target.src = `/assets/en/${name}`; // fallback to English
      }}
    />
  );
};

export default LangImage;
