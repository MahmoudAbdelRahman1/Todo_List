import React, { useContext } from "react";
import {
  Context_Data_Input,
  Context_Styles_Input,
} from "../../../Context/ContextAPI";

const Inputs = () => {
  // Destructuring for an Array Data Input
  let [DataTitle, setDataTitle, DataNotes, setDataNotes] =
    useContext(Context_Data_Input);
  let [StylesInput, setStylesInput] = useContext(Context_Styles_Input);

  return (
    <div className="container-main-input center-cs">
      <div className="container-input-t">
        <input
          type="text"
          className="input-title block-input"
          placeholder="title"
          value={DataTitle}
          onChange={(e) => setDataTitle(e.target.value)}
          style={{ textAlign: StylesInput }}
        />
      </div>
      <div className="container-input-n">
        <textarea
          type="text"
          className="input-notes block-input "
          placeholder="note"
          value={DataNotes}
          onChange={(e) => setDataNotes(e.target.value)}
          style={{ textAlign: StylesInput }}
        />
      </div>
    </div>
  );
};

export default Inputs;
