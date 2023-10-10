import React, { useState } from "react";

const InsertData = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    City: "",
    Country: "",
    Pincode: "",
    SATScore: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sat-results", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message.
        console.log("Data inserted successfully.");
        // Clear the form
        setFormData({
          Name: "",
          Address: "",
          City: "",
          Country: "",
          Pincode: "",
          SATScore: "",
        });
      } else {
        // Handle errors, e.g., display an error message.
        console.error("Error inserting data.");
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div>
      <h2>Insert SAT Results</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Address">Address:</label>
          <input
            type="text"
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="City">City:</label>
          <input
            type="text"
            id="City"
            name="City"
            value={formData.City}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Country">Country:</label>
          <input
            type="text"
            id="Country"
            name="Country"
            value={formData.Country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Pincode">Pincode:</label>
          <input
            type="text"
            id="Pincode"
            name="Pincode"
            value={formData.Pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="SATScore">SAT Score:</label>
          <input
            type="number"
            id="SATScore"
            name="SATScore"
            value={formData.SATScore}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InsertData;
