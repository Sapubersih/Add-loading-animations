import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import Skeleton from "./components/Skeleton";
import "./styles/loading.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    // simulate API call
    setTimeout(() => {
      setData(["Item 1", "Item 2", "Item 3"]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Loading Animation Demo</h1>

      {loading ? (
        <>
          <Spinner />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
