
import React, { useState } from "react";

const GetRank = () => {
  const [name, setName] = useState("");
  const [rank, setRank] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGetRank = async () => {
    try {
      const response = await fetch(`/api/sat-results/rank?name=${name}`);
      if (response.ok) {
        const data = await response.json();
        setRank(data.rank);
      } else {
        console.error("Error retrieving rank");
      }
    } catch (error) {
      console.error("Error retrieving rank:", error);
    }
  };

  return (
    <div>
      <h2>Get Rank</h2>
      <div>
        <label htmlFor="name">Enter Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <button onClick={handleGetRank}>Get Rank</button>
      </div>
      {rank !== null && (
        <div>
          <p>Rank: {rank}</p>
        </div>
      )}
    </div>
  );
};

export default GetRank;
