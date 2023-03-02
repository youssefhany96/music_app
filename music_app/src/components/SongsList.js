import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import data from "../data/songs.json";
import "./SongsList.css";

function SongsList({ title, songs, playlists }) {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  console.log(title);
  console.log(playlists);
  console.log(playlists[title]);
  // const songIds = playlists[title].map((song) => song.id);

  return (
    <div className="songs-list">
      <h3 className="title">{title}</h3>
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
            color: "grey",
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
      </table>
    </div>
  );
}

export default SongsList;
