import React, { useContext } from "react";
import {
  Context_Data_Input,
  Context_Min_Data,
} from "../../../Context/ContextAPI";

const ButSave = () => {
  // Create UseContext
  const valueInputs = useContext(Context_Data_Input);
  const minRes = useContext(Context_Min_Data);
  // Destructuring for an Array Data Input
  let [DataTitle, setDataTitle, DataNotes, setDataNotes] = valueInputs;
  let [Res, setRes] = minRes;
  // Function Add to Opject Result
  const FunResult = () => {
    if (DataTitle == "" || DataNotes == "") {
      alert("error");
    } else {
      setRes([...Res, { Title: DataTitle, Notes: DataNotes, Id: Res.length }]);
      setDataTitle("");
      setDataNotes("");
    }
  };
  return (
    <div className="block-but center-c">
      <input
        className="but-save"
        type={"submit"}
        onClick={FunResult}
        value="Save"
      />
    </div>
  );
};

export default ButSave;
