import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Context_Create_Notes,
  Context_StyleHedden,
  Context_Style_Result,
} from "../../../Context/ContextAPI";
("../../../Context/ContextAPI");
const CreateNotes = () => {
  let [calssForm, setclassform, BlockForm, setBlockForm] =
    useContext(Context_Create_Notes);
  //
  let [StyleHadden, setStyleHadden] = useContext(Context_StyleHedden);
  let [ClassMinRes, setClassMinRes] = useContext(Context_Style_Result);
  //
  let FunFormModile = () => {
    setclassform("min-component-form --a-create-notea center-cs");
    setStyleHadden("block-create-notes center-c --heddeing");
    setBlockForm("block-form --a-black-form center-cs");
    setClassMinRes("min-component-res --d-main-component-result center-cs");
  };
  return (
    <div className={StyleHadden}>
      <button
        className="but-create-notes center-space-a-r"
        onClick={() => FunFormModile()}
      >
        <FontAwesomeIcon icon={faPlusCircle} />
        Create Notes
      </button>
    </div>
  );
};

export default CreateNotes;
