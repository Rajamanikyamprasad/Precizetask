
import React, { useState } from "react";

const UpdateScore = () => {
  const [name, setName] = useState("");
  const [newScore, setNewScore] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleScoreChange = (e) => {
    setNewScore(e.target.value);
  };

  const handleUpdateScore = async () => {
    try {
      const response = await fetch("/api/sat-results/update-score", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, newScore }),
      });

      if (response.ok) {
        setMessage("SAT score updated successfully");
      } else {
        console.error("Error updating SAT score");
        setMessage("Error updating SAT score");
      }
    } catch (error) {
      console.error("Error updating SAT score:", error);
      setMessage("Server error");
    }
  };

  return (
    <div>
      <h2>Update SAT Score</h2>
      <div>
        <label htmlFor="name">Enter Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="newScore">New SAT Score:</label>
        <input
          type="number"
          id="newScore"
          value={newScore}
          onChange={handleScoreChange}
          required
        />
      </div>
      <div>
        <button onClick={handleUpdateScore}>Update Score</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateScore;
