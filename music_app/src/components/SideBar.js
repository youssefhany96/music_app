import React, { useState, useRef } from "react";

import "./SideBar.css";
import logo from "../assets/spotify-white.png";
import Modal from "./Modal";
import { FaPlus } from "react-icons/fa";

function SideBar({ activePlaylist, setActivePlaylist }) {
  const [lists, setLists] = useState({
    home: [],
    favorites: [],
  });
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
      {playlists.map((list) => (
        <li
          key={list}
          className={list === activePlaylist ? "active" : ""}
          onClick={() => setActivePlaylist(list)}
        >
          {list}
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
