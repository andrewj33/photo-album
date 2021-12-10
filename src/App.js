import React, { useState, useEffect } from "react";
import axios from "axios";

import Navigation from "./components/nav/Navigation";
import Gallery from "./components/album/Gallery";
import "./App.css";

function App() {
  const [albums, setAlbums] = useState({number: 1, list: [] })
  const JSON_PLACEHOLDER_END_POINT = `https://jsonplaceholder.typicode.com/photos?albumId=${albums.number}`

  // state updating function that handles navigation based 
  // triggers, updates album number
  const handleChange = (newNumber) => {
    setAlbums({...albums, number: newNumber})
  }
  
  useEffect(() => {
    // self-invoking async function for fetching and mapping 
    // the albumlist data
    (async function Fetcher() {
      const res = await axios.get(JSON_PLACEHOLDER_END_POINT);
      const mapped = res.data.map(item => {
        return {id: item.id, title: item.title}
      })
      // Set the list to the mapped list of album objects
      setAlbums({...albums, list: mapped })
    })()
    // We want useeffect to have album number as a dependency
    // in order for it to trigger rerenders whenever the number
    // changes in state
  }, [albums.number])

  /**
   * Renders conditionally based on when the albumList is filled.
   * Includes two components, Navigation, which controls which album
   * to visit, and Gallery, which lists all ids and titles of a given
   * album
   */

  return (
    <div className="App">
      {
        (albums.list.length > 0) ?
          (
            <div>
              <header>
                <h1>Album {albums.number}</h1>
                <Navigation
                  albumNum={albums.number}
                  handleChange={handleChange}
                />
              </header>
              <Gallery albumList={albums.list} />
            </div>
          ) :
          (<h1>Loading</h1>)
      }
    </div>
  );
}

export default App;
