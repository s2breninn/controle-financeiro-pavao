import React from "react";
import "./resumeItem.css";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <div className="container-resume-item">
      <header className="cabecalho-resume-item">
        <p>{title}</p>
        <Icon />
      </header>
      <span>{value}</span>
    </div>
  );
};

export default ResumeItem;
