import React, { useState } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const initialState = [
    { id: 1, title: "Some one you loved" },
    { id: 2, title: "Circles" },
    { id: 3, title: "Senorita" },
    { id: 4, title: "Truth Hurts" },
    { id: 5, title: "Lose you to love me" }
  ];
  const [songs, setSongs] = useState(initialState);
  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
