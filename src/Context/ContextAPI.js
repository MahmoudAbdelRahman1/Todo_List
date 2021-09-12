import React, { useState } from "react";

// Create ContextAPI
export const Context_Data_Input = React.createContext();
export const Context_Min_Data = React.createContext();
export const Context_Styles_Input = React.createContext();
export const Context_Create_Notes = React.createContext();
export const Context_StyleHedden = React.createContext();
export const Context_Style_Result = React.createContext();

const ContextAPI = (props) => {
  // Create UseState For Data Inputs
  const [DataTitle, setDataTitle] = useState("");
  const [DataText, setDataText] = useState("");
  // Create The Main Object For Values Input
  const [MinDataInput, setMinDataInput] = useState([]);
  // Create useState for style inputs
  const [StyleInp, setStyleInp] = useState("center");
  // Create notes
  const [FormMobile, setFormMobile] = useState(
    "min-component-form --a-create-notea center-space-r"
  );
  const [BlockForm, setBlockForm] = useState(
    "block-form a--black-form center-cs"
  );
  // heddeing button create notes
  const [StyleHadden, setStyleHadden] = useState(
    "block-create-notes center-c  --heddeing"
  );
  // class for result
  const [MainRes, setMainRes] = useState(
    "min-component-res --d-main-component-result center-cs"
  );

  // Save Data Input in By an Array
  let dataInp = [DataTitle, setDataTitle, DataText, setDataText];
  let minData = [MinDataInput, setMinDataInput];
  let styleInp = [StyleInp, setStyleInp];
  let formMobile = [FormMobile, setFormMobile, BlockForm, setBlockForm];
  let styleHadden = [StyleHadden, setStyleHadden];
  let classRes = [MainRes, setMainRes];
  return (
    <Context_Data_Input.Provider value={dataInp}>
      <Context_Min_Data.Provider value={minData}>
        <Context_Styles_Input.Provider value={styleInp}>
          <Context_Create_Notes.Provider value={formMobile}>
            <Context_StyleHedden.Provider value={styleHadden}>
              <Context_Style_Result.Provider value={classRes}>
                {props.children}
              </Context_Style_Result.Provider>
            </Context_StyleHedden.Provider>
          </Context_Create_Notes.Provider>
        </Context_Styles_Input.Provider>
      </Context_Min_Data.Provider>
    </Context_Data_Input.Provider>
  );
};

export default ContextAPI;
