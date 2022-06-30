import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search_Bar from './Components/Search_Bar';
import Music_Table from './Components/Search_Bar';
import DisplayMusic from './Components/DisplayMusic';

function App() {

  const [songs, setSongs] = useState([{title: 'The Outside'}, {Arist: 'Red'}, {Album:'Genius'}, {Album:'Release Date'}]);
  //  New Song:
//  {
//      "title": "The Outside",
//      "artist": "Red",
//      "album": "Genius",
//      "genre": "Metal/Christian rock",
//      "release_date": "2011-02-01"
//  }

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
    
      <Music_Table parentSongs={songs}/>
      <DisplayMusic/>
    
    </div>
  );

} 

  export default App;