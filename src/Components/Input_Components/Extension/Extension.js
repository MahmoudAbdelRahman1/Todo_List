import React, { useContext, useState } from "react";
import { Context_Styles_Input } from "../../../Context/ContextAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faCaretLeft,
} from "@fortawesome/free-solid-svg-icons";

const Extension = () => {
  // opject li
  let liList = [
    {
      Id: 1,
      IconName: faAlignLeft,
      Value: "left",
    },
    {
      Id: 2,
      IconName: faAlignCenter,
      Value: "center",
    },
    {
      Id: 3,
      IconName: faAlignRight,
      Value: "right",
    },
  ];
  // Destructuring for Set Style Inputs
  let [StylesInput, setStylesInput] = useContext(Context_Styles_Input);
  // Function for setStylesInput
  let FunSetStyle = (e) => {
    setStylesInput(e.Value);
  };
  // function set act style li
  const [IconSw, setIconSw] = useState("icon-sw --icon-sw-d");
  const [Ul, setUl] = useState("block-li --block-li-d center-space-a-c");
  const [Blockex, setBlockex] = useState(
    "block-main-extension --block-main-extension-d center-space-r"
  );
  let FunSw = () => {
    if (IconSw == "icon-sw --icon-sw-d") {
      setIconSw("icon-sw --icon-sw-a");
      setUl("block-li --block-li-a center-space-a-r");
      setBlockex(
        "block-main-extension --block-main-extension-a center-space-r"
      );
    } else {
      setIconSw("icon-sw --icon-sw-d");
      setUl("block-li --block-li-d center-space-a-c");
      setBlockex(
        "block-main-extension --block-main-extension-d center-space-r"
      );
    }
  };
  return (
    <div className="container-main-extension center-c">
      <div className={Blockex}>
        <ul className={Ul}>
          {liList.map((e) => {
            return (
              <li
                className="li-align"
                key={e.Id}
                onClick={() => FunSetStyle(e)}
              >
                <FontAwesomeIcon className={"icon-align"} icon={e.IconName} />
              </li>
            );
          })}
        </ul>
        <div className="block-sw center-c" onClick={() => FunSw()}>
          <FontAwesomeIcon className={IconSw} icon={faCaretLeft} />
        </div>
      </div>
    </div>
  );
};

export default Extension;
