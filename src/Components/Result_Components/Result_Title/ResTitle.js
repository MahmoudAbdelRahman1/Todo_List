import React, { useState, useEffect, useContext } from "react";
import {
  Context_Min_Data,
  Context_Create_Notes,
  Context_StyleHedden,
  Context_Style_Result,
} from "../../../Context/ContextAPI";

const ResTitle = () => {
  // create useContext
  let [ValInput, setValInput] = useContext(Context_Min_Data);
  let [calssForm, setclassform, BlockForm, setBlockForm] =
    useContext(Context_Create_Notes);
  let [StyleHadden, setStyleHadden] = useContext(Context_StyleHedden);
  let [ClassMinRes, setClassMinRes] = useContext(Context_Style_Result);

  // usecontext for jsx
  const [Title, setTitle] = useState("NO NOTES");
  // useEffect for title
  useEffect(() => {
    if (ValInput.length == 0) {
      setTitle("NO NOTES");
      setclassform("min-component-form --a-create-notea center-cs");
      setStyleHadden("block-create-notes center-c --heddeing");
      setBlockForm("block-form --a-black-form center-cs");
      setClassMinRes("min-component-res --d-main-component-result center-cs");
    } else {
      setTitle("");
      setclassform("min-component-form --d-create-notea center-cs");
      setStyleHadden("block-create-notes center-c --none-heddeing");
      setBlockForm("block-form --d-black-form center-cs");
      setClassMinRes("min-component-res --a-main-component-result center-cs");
    }
  }, [ValInput]);
  return <div className={"title-res"}>{Title}</div>;
};

export default ResTitle;
