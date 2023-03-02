import React, { useState } from "react";

import "./SideBar.css";
import logo from "../assets/spotify-white.png";
import Modal from "./Modal";

function SideBar(props) {
  const [lists, setLists] = useState({
    home: [],
    favorites: [],
  });
  const [currentList, setCurrentList] = useState("home");
  const [modal, setModal] = useState(false);

  const playlists = Object.keys(lists);

  const openModal = () => {
    setModal(true);
  };

  return (
    <ul className="sidebar">
      <img src={logo} alt="spotify" className="logo" />
      {playlists.map((list) => (
        <li key={list} className={list === currentList ? "active" : ""}>
          {list}
        </li>
      ))}
      <li className="add-playlist" onClick={openModal}>
        New Playlist
      </li>
      <Modal show={modal} close={() => setModal(false)}>
        <h1>Modal</h1>
      </Modal>
    </ul>
  );
}

export default SideBar;
