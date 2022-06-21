import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
   makeGetRequest();
  }, [])

  async function makeGetRequest(){
    try{
      let response = await axios.get('http://127.0.0.1:8000/api/songs/');

      console.log(response.data);
    } catch (ex) {
      console.log('Error in MakeGetRequest API call!');
    }
  }

async function createSong(newSong){
//  New Song:
//  {
//      "title": "Dreamer",
//      "artist": "I The Mighty",
//      "album": "Karma Never Sleeps",
//      "genre": "Alternative/Indie, Rock",
//      "release_date": "2012-03-27
//  }
  let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
  if(response.status === 201){
    await getAllSongs();
  }
}  
    return (
      <div>
        <table>
          <thead>
            <tr>
            <th>song title</th>
            <th>album</th>
            <th>artist</th>
            <th>genre</th>
            <th>release_date</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }

  export default App;
