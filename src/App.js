import React from "react";
import ContextAPI from "./Context/ContextAPI";

import Form from "./Screens/Form/Form";
import Results from "./Screens/Results/Results";

const App = () => {
  return (
    <ContextAPI>
      <div className="main-container center-c">
        <Form />
        <Results />
      </div>
    </ContextAPI>
  );
};

export default App;
