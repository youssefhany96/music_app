import React, { useState, useEffect } from "react";

import "./SongsList.css";
import Modal from "./Modal";
import Table from "./Table";
import SearchBar from "./SearchBar";

function SongsList({ title, playlists, setPlaylists }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [playlistSelect, setPlaylistSelect] = useState("");

  const [filteredData, setFilteredData] = useState(playlists[title]);

  useEffect(() => {
    setFilteredData(
      playlists[title].filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, title, playlists]);

  const newPlaylists = Object.keys(playlists).filter(
    (item) => !["home"].includes(item)
  );

  const removeFromPlaylist = (id) => {
    const newPlaylists = playlists[title].filter((item) => item.id !== id);
    setPlaylists({
      ...playlists,
      [title]: newPlaylists,
    });
  };

  const addItem = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((id) => id !== item));
    } else {
      setSelected([...selected, item]);
    }
  };
  
  return (
    <div className="songs-list">
      <h3 className="title">{title}</h3>
      {filteredData.length === 0 ? (
        <p className="no-songs">
          No songs in this playlist
        </p>
      ) : (
        <>
          <SearchBar setSearch={setSearch} />
          <Table
            data={filteredData}
            removeFromPlaylist={removeFromPlaylist}
            addItem={addItem}
          />
        </>
      )}
      <Modal show={selected.length > 0} close={() => setSelected([])}>
        <h3 className="modal-title">Add to playlist</h3>

        {newPlaylists.length < 1 ? (
          <p className="modal-text">No playlists created yet</p>
        ) : (
          <div className="modal-content">
            <select
              name="playlist"
              id="playlist"
              value={playlistSelect}
              onChange={(e) => {
                setPlaylistSelect(e.target.value);
              }}
              className="modal-select"
            >
              <option value="">select a playlist</option>
              {newPlaylists.map((playlist) => (
                <option
                  key={playlist}
                  value={playlist}
                  disabled={playlist === title}
                  style={{
                    color: playlist === title ? "grey" : "black",
                  }}
                >
                  {playlist}
                </option>
              ))}
            </select>
            <button
              className="modal-btn"
              onClick={() => {
                playlists[playlistSelect] = [
                  ...playlists[playlistSelect],
                  ...selected,
                ];
                setSelected([]);
                setPlaylistSelect("");
              }}
            >
              Add
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default SongsList;
