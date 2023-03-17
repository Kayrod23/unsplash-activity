import "./App.css";
import React from "react";
import ImageCard from "./components/ImageCard/ImageCard";
import { useState, useEffect } from "react";
import fetchImages from "./utils/fetch.js";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages().then((res) => {
      setImages(res);
    });
  }, []);

  return (
    <div className="App">
      <h1>Unsplash API v2 by Riya Alexander, Harold Fachin, Diandre Miller, Keeanu Rodriguez</h1>
      {images.map((image) => {
        return (
          <div>
            <ImageCard img={image} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
