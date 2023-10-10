import React, { useEffect, useState } from "react";

const ViewAllData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint for viewing all data.
    fetch("/api/sat-results")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>View All Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ViewAllData;
