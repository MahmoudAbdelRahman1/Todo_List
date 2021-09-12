import React, { useContext, useEffect } from "react";
import ResList from "../../Components/Result_Components/Result_List/ResList";
import ResTitle from "../../Components/Result_Components/Result_Title/ResTitle";
import {
  Context_Min_Data,
  Context_Style_Result,
} from "../../Context/ContextAPI";

const Results = () => {
  // Create useContext
  const DataResult = useContext(Context_Min_Data);
  // Destructuring for an Array Data Input
  const [Res, setRes] = DataResult;
  const [ClassMinRes, setClassMinRes] = useContext(Context_Style_Result);

  return (
    <div className={ClassMinRes}>
      <ResTitle />
      <ResList />
    </div>
  );
};

export default Results;
