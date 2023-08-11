import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BE_URI}`,
        {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setMessage(data.message)
        })
        .catch((error) => console.error(error)); // Handle errors
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;