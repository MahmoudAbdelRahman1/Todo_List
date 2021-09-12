import React, { useContext, useState } from "react";
import {
  Context_Min_Data,
  Context_Data_Input,
} from "../../../Context/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faPen } from "@fortawesome/free-solid-svg-icons";

const ResList = () => {
  let [MinData, setMinData] = useContext(Context_Min_Data);
  let [DataTitle, setDataTitle, DataText, setDataText] =
    useContext(Context_Data_Input);
  // function delete notes
  let FunDelList = (e) => {
    alert(e);
    let newList = MinData;
    newList.splice(e, 1);
    setMinData([...newList]);
  };
  // function update notes
  let FunUpdate = (e) => {
    setDataTitle(e.Title);
    setDataText(e.Notes);
  };
  return (
    <div className="main-container-res center-cs">
      {MinData.map((e, i) => {
        return (
          <div key={i} className="main-card-res center-c">
            <div className="card-res center-cs">
              <div
                className="but-delete-notes center-c"
                onClick={() => FunDelList(e.Id)}
              >
                <span className="icon-delete"></span>
              </div>
              <div className="notes title-notes">{e.Title}</div>
              <div className="notes body-notes">{e.Notes}</div>
              <div className="block-extesion center-space-a-c">
                <div
                  className="but-align center-c"
                  onClick={() => {
                    FunUpdate(e);
                  }}
                >
                  <FontAwesomeIcon style={{ color: "#ffff" }} icon={faPen} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResList;
