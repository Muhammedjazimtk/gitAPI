import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import "./App.css";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";

//https://api.github.com/users/Muhammedjazimtk/repos  api url for getting public repos of user
//https://api.github.com/users/Muhammedjazimtk api for getting user information

function App() {
  const [user, setUser] = useState({
    name: "",
    imgUrl: "",
    login: "",
    bio: "",
    followers: "",
    following: "",
    location: "",
    url: "",
    repc: "",
  });
  const [searched, setS] = useState(false);

  function search() {
    setS(true);
    let name = document.getElementById("name").value;
    // const response = octokit.request("GET /repos/{owner}/{repo}", {
    //   owner: "github",
    //   repo: "docs",
    //   issue_number: 11901,
    //   headers: {
    //     "x-github-api-version": "2022-11-28",
    //   },
    // });
    // console.log(response);
    axios
      .get(`https://api.github.com/users/${name}`)
      .then((response) => {
        console.log(response.data.name);
        setUser({
          name: response.data.name,
          imgUrl: response.data.avatar_url,
          login: response.data.login,
          bio: response.data.bio,
          followers: response.data.followers,
          following: response.data.followers,
          location: response.data.location,
          url: response.data.html_url,
          repc: response.data.public_repos,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="container">
      <div className="flex flex-col ">
        <div className="flex items-center justify-center gap-2 h-[120px] bg-black">
          <input
            id="name"
            className="p-1 pl-3 rounded-md bg-[#0d1117] w-[25%] text-white border border-white"
            type="text"
            name="name"
            placeholder="Enter a user name..."
            autoComplete="off"
          />

          <IoIosSearch
            className="text-white text-3xl cursor-pointer  rounded-md hover:text-black hover:bg-white"
            onClick={() => search()}
          />
        </div>
        {searched ? (
          <div className="flex gap-2 bg-[#0d1117] h-screen px-32 py-12 items-center justify-center">
            <div className="w-[30%]  gap-4  h-full rounded-md flex flex-col items-center p-4 ">
              <img className="rounded-full h-[50%]" src={user.imgUrl} />
              <div className="w-full h-full flex flex-col">
                <p
                  className="text-white text-xl font-semibold text-left "
                  id="propic"
                >
                  {user.name}
                </p>
                <a target="_blank" rel="noreferrer" href={user.url}>
                  <p className="text-gray-600">{user.login}</p>
                </a>
                <p className="text-white mt-4">{user.bio}</p>
                <p className="text-gray-600 mt-4 font-semibold">
                  <span className="text-white font-bold">{user.followers}</span>{" "}
                  Followers{" "}
                  <span className="text-white font-bold">{user.following}</span>{" "}
                  Following
                </p>
                {user.location ? (
                  <p className="text-white flex items-center mt-4 gap-2">
                    <IoLocationOutline />
                    {user.location}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="w-[70%] border border-gray-700 h-full rounded-md p-4  ">
              <p className="text-white font-semibold ">
                Public repos {user.repc}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 items-center justify-center h-screen bg-[#0d1117] text-xl text-white font-semibold  px-32 py-12 ">
            <img src="giticon.png" className="rounded-full h-32" />
            <p>Search for user</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
