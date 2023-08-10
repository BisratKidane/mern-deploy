import { useEffect, useState } from "react";
import DataService from "./services/remote.service"

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    DataService.getData()
    .then((res) => {
      console.log({res})
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <h1>Fetched Data</h1>
      <p>
        {message}
      </p>
    </div>
  );
}

export default App;