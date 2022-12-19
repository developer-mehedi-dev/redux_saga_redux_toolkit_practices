import "./App.css";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogsFetch } from "./dogState";
import "./App.css";

function App() {
  const dogs = useSelector((state) => state.dogs.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogsFetch());
  }, [dispatch]);

  console.log(dogs);

  return (
    <div className="App">
      <h1>DOG SPECIES GALLERY</h1>
      <p>
        Images of different species of cats, lots of cats for your viewing
        pleasure.
      </p>
      <hr />
      <div className="gallery">
        {dogs.map((dog) => (
          <div key={dog.id} className="row">
            <div className="column column-left">
              <img src={dog.image.url} alt="" width="200" height="200" />
            </div>
            <div className="column column-right">
              <h2>{dog.name}</h2>
              <p>
                <b>origin:</b> {dog.origin}
              </p>
              <p>
                <b>details:</b> {dog.bred_for}
              </p>
              <p>
                <b>type:</b>
                {dog.breed_group}
              </p>
              <p>
                <b>age:</b>
                {dog.life_span}
              </p>
              <p>
                <b>categories</b>
                {dog.temperament}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
