import React, { useContext } from "react";
import ButSave from "../../Components/Input_Components/But_Save/ButSave";
import CreateNotes from "../../Components/Input_Components/Create_But_Notes/CreateNotes";
import Extension from "../../Components/Input_Components/Extension/Extension";
import Inputs from "../../Components/Input_Components/Inputs/Inputs";
import { Context_Create_Notes } from "../../Context/ContextAPI";

const Form = () => {
  let [ClassForm, setClassForm, BlockForm, setBlockForm] =
    useContext(Context_Create_Notes);
  return (
    <div className={ClassForm}>
      <form
        className={BlockForm}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <ButSave />
        <Inputs />
        <Extension />
      </form>
      <CreateNotes />
    </div>
  );
};

export default Form;
