import React, { useState } from "react";

import data from "../data/songs.json";
import "./App.css";
import SideBar from "./SideBar";
import SongsList from "./SongsList";

function App() {
  const [activePlaylist, setActivePlaylist] = useState("home");
  const [lists, setLists] = useState({
    home: data,
  });

  return (
    <div className="App">
      <SideBar
        activePlaylist={activePlaylist}
        setActivePlaylist={setActivePlaylist}
        lists={lists}
        setLists={setLists}
      />
      <SongsList
        title={activePlaylist}
        playlists={lists}
        setPlaylists={setLists}
      />
    </div>
  );
}

export default App;
