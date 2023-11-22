import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="flex flex-col ">
        <div className="flex items-center justify-center gap-2 h-[120px] bg-[#141622]">
          <input
            className="p-1 pl-3 rounded-md bg-[#181b29] w-[25%] text-white"
            type="text"
            name="name"
            placeholder="Enter a user name..."
          />
          <button>Search</button>
        </div>
        <div className="flex bg-[#181b29] h-screen"></div>
      </div>
    </div>
  );
}

export default App;
