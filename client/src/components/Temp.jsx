import React, { useState } from "react";
import axios from "axios";

function SQLQueryGenerator() {
  const [summary, setSummary] = useState("");
  const [generatedQuery, setGeneratedQuery] = useState("");

  const handleGenerateQuery = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/generate-sql-query",
        { sqlSummary: summary }
      );
      setGeneratedQuery(response.data.sqlQuery);
    } catch (error) {
      console.error("Error generating SQL query:", error);
    }
  };

  return (
    <div>
      <h1>SQL Query Generator</h1>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder="Enter SQL summary here..."
      />
      <button onClick={handleGenerateQuery}>Generate SQL Query</button>

      {generatedQuery && (
        <div>
          <h2>Generated SQL Query:</h2>
          <pre>{generatedQuery}</pre>
        </div>
      )}
    </div>
  );
}

export default SQLQueryGenerator;
