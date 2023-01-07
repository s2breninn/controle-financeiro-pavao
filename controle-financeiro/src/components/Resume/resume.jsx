import React from "react";
import "./resume.css";
import ResumeItem from "../ResumeItem/resumeItem";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <div className="container-resume">
      <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} value="income" />
      <ResumeItem
        title="Saída"
        Icon={FaRegArrowAltCircleDown}
        value="expense"
      />
      <ResumeItem title="Receita" Icon={FaDollarSign} value="Total" />
    </div>
  );
};

export default Resume;
