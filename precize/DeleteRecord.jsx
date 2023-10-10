
import React, { useState } from "react";

const DeleteRecord = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDeleteRecord = async () => {
    try {
      const response = await fetch("/api/sat-results/delete-record", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        setMessage("Record deleted successfully");
        setName(""); // Clear the input field
      } else {
        console.error("Error deleting record");
        setMessage("Error deleting record");
      }
    } catch (error) {
      console.error("Error deleting record:", error);
      setMessage("Server error");
    }
  };

  return (
    <div>
      <h2>Delete One Record</h2>
      <div>
        <label htmlFor="name">Enter Name to Delete:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <button onClick={handleDeleteRecord}>Delete Record</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteRecord;
