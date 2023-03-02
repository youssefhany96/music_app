import React, { useEffect, useState } from "react";
import "./App.css";
import data from "../data/songs.json";
import { FaSearch } from "react-icons/fa";

import SideBar from "./SideBar";
import SongsList from "./SongsList";

function App() {
  // const [filteredData, setFilteredData] = useState([]);
  // const [selected, setSelected] = useState([]);
  const [activePlaylist, setActivePlaylist] = useState("home");
  const [lists, setLists] = useState({
    home: [],
    favorites: [],
  });

  // useEffect(() => {
  //   setFilteredData(
  //     data.filter((item) =>
  //       item.title.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search]);

  return (
    <div className="App">
      <SideBar
        activePlaylist={activePlaylist}
        setActivePlaylist={setActivePlaylist}
      />
      <div className="main">
        <SongsList
          title={activePlaylist}
          // songs={filteredData}
          playlists={lists}
        />
      </div>
      {/* <h3>PLAYLIST</h3>
      <h2>Driving</h2>
      <p>
        Showing {filteredData.length} of {data.length} songs
      </p>
      <button style={{ marginRight: "10px" }}>Add to Playlist</button>
      <button>Play</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FaSearch
          style={{
            fontSize: "20px",
            marginRight: "5px",
            color: "grey",
            marginTop: "5px",
          }}
        />
        <input
          type="text"
          placeholder="Filter "
          style={{
            width: "100%",
            height: "20px",
            fontSize: "18px",
            padding: "5px",
            marginBottom: "10px",
            outline: "none",
            border: "none",
            backgroundColor: "transparent",
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <table className="table">
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Year</th>
          <th>Duration</th>
        </tr>
        {filteredData.map((item) => (
          <tr key={item.id}>
            <td>
              <button
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  color: "grey",
                  fontSize: "20px",
                  paddingRight: "10px",
                }}
                onClick={() => {
                  if (selected.includes(item.id)) {
                    setSelected(selected.filter((id) => id !== item.id));
                  } else {
                    setSelected([...selected, item.id]);
                  }
                }}
              >
                {selected.includes(item.id) ? "✓" : "+"}
              </button>
              {item.title}
            </td>
            <td>{item.artist}</td>
            <td>{item.album}</td>
            <td>{item.year}</td>
            <td>{item.duration}</td>
          </tr>
        ))}
      </table> */}
    </div>
  );
}

export default App;
