import useFetch from "./hooks/useFetch";

function App() {

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=20"
  );

  return (
    <div className="bg-black text-white p-4">
      <h1 className="text-2xl text-center mb-4">Photos</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-4 gap-3">
        {data && data.map((item) => (
            <div key={item.id} className="border p-2">
              <img src={"https://picsum.photos/200?random=" + item.id} alt="img" className="w-full"/>
              <p className="text-xs mt-2">{item.title}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;