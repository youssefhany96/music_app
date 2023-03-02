import React, { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";

import "./SideBar.css";
import logo from "../assets/spotify-white.png";
import Modal from "./Modal";

function SideBar({ activePlaylist, setActivePlaylist, lists, setLists}) {
  const [modal, setModal] = useState(false);
  const playlistRef = useRef(null);

  const playlists = Object.keys(lists);

  const openModal = () => {
    setModal(true);
  };

  const addPlaylist = (e) => {
    e.preventDefault();
    const playlist = playlistRef.current.value;
    if (playlist === "") return;
    setLists({ ...lists, [playlist]: [] });
    playlistRef.current.value = null;
    setModal(false);
  };

  return (
    <ul className="sidebar">
      <img src={logo} alt="spotify" className="logo" />
      {playlists.map((playlist) => (
        <li
          key={playlist}
          className={activePlaylist === playlist ? "active" : ""}
          onClick={() => setActivePlaylist(playlist)}
        >
          {playlist}
        </li>

      ))}
      <li className="add-playlist" onClick={openModal}>
        <FaPlus style={{ marginRight: "5px" }} />
        New Playlist
      </li>
      <Modal show={modal} close={() => setModal(false)}>
        <form>
          <h3 className="modal-title">New Playlist</h3>
          <div className="content-wrapper">
            <input
              type="text"
              placeholder="Playlist Name"
              required
              className="modal-input"
              ref={playlistRef}
            />
            <button type="submit" onClick={addPlaylist} className="modal-btn">
              Create
            </button>
          </div>
        </form>
      </Modal>
    </ul>
  );
}

export default SideBar;
