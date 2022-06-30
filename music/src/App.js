import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search_Bar from './Components/Search_Bar';


function App() {

  const [songs, setSongs] = useState([]);

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
      <Search_Bar parentSongs={songs}/>
    
    </div>
  );

} 

  export default App;