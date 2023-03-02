import React from "react";

import "./SongsList.css";

function Table({ data, removeFromPlaylist, addItem }) {
  return (
    <table className="table">
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th>Year</th>
        <th>Duration</th>
      </tr>
      {data.map((item) => (
        <tr key={item.id}>
          <td>
            <button
              className="remove-btn"
              onClick={() => removeFromPlaylist(item.id)}
            >
              -
            </button>
            <button className="add-btn" onClick={() => addItem(item)}>
              +
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
  );
}

export default Table;
