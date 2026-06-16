import { useState, useEffect } from "react";

function useFetch(url) {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setError("");
      })
      .catch(() => {
        setError("Error fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;