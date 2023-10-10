import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import InsertData from "./InsertData";
import ViewAllData from "./ViewAllData";
import GetRank from "./GetRank";
import UpdateScore from "./UpdateScore";
import DeleteRecord from "./DeleteRecord";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
 
  return (
    <div className="App">
      <Menu onSelectOption={handleSelectOption} />
      {selectedOption === "insert" && <InsertData />}
      {selectedOption === "view" && <ViewAllData />}
      {selectedOption === "rank" && <GetRank />}
      {selectedOption === "update" && <UpdateScore />}
      {selectedOption === "delete" && <DeleteRecord />}
    </div>
  );
}

export default App;
