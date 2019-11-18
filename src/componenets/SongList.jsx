import React, { useState, useEffect } from "react";
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
  const [age, setAge] = useState(29);
  const [songs, setSongs] = useState(initialState);
  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log("use effect hooks ran", songs);
    return () => {
      console.log("clean up");
    };
  }, [songs]);
  useEffect(() => {
    console.log("use effect hooks ran", age);
    return () => {
      console.log("clean up");
    };
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>
        age:{age} click to add one
      </button>
    </div>
  );
};

export default SongList;
