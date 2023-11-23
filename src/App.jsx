import { useState } from "react";
import "./App.css";
import { IoIosSearch } from "react-icons/io";
function App() {
  const [user, setUser] = useState([{ jazim: "jazim" }]);
  return (
    <div className="container">
      <div className="flex flex-col ">
        <div className="flex items-center justify-center gap-2 h-[120px] bg-[#141622]">
          <input
            className="p-1 pl-3 rounded-md bg-[#181b29] w-[25%] text-white border border-white"
            type="text"
            name="name"
            placeholder="Enter a user name..."
          />

          <IoIosSearch className="text-white text-3xl cursor-pointer  rounded-md hover:text-black hover:bg-white" />
        </div>
        {user.length != 0 ? (
          <div className="flex gap-2 bg-[#181b29] h-screen px-32 py-12 items-center justify-center">
            <div className="w-1/3 border border-gray-700 h-full rounded-md"></div>
            <div className="w-2/3 border border-gray-700 h-full rounded-md"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 items-center justify-center h-screen bg-[#181b29] text-2xl text-white font-semibold  px-32 py-12 ">
            <img src="giticon.png" className="rounded-full h-32" />
            <p>Search for user</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
