import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable';
import DisplayMusic from './Components/DisplayMusic';

function App() {

  const [songs, setSongs] = useState([]);

  function addNewSong(song){

    let tempSongs = [...songs, song];

    setSongs(tempSongs);
  }

  useEffect(() => {
    makeGetRequest();
   }, [])

  async function createSong(newSong){
    try{
      //  New Song:
      //  }
      //      "title": "Momentary",
      //      "artist": "Hands Like Houses",
      //      "album": "dissonants",
      //      "genre": "Rock",
      //      "release_date": "2016-02-15"
      //  };
      newSong(response.data);
      console.log(newSong);
      let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
    } catch (ex) {
      await addNewSong();
      console.log('Error in makeGetRequest API call!')
      
    }
  }


  useEffect(() => {
   makeGetRequest();
  }, [])

  async function makeGetRequest(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/songs/');
      setSongs(response.data);
      console.log(response.data);
    } catch (ex) {
      console.log('Error in MakeGetRequest API call!');
    }
  }

  return (
    <div>
    
      <MusicTable songs={songs}/>
      <DisplayMusic addNewSongProperty={addNewSong} />
    
    </div>
  );
}

  export default App;