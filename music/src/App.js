import React, { useEffect } from 'react';
import axios from 'axios';


function App() {
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

  return (
    <div>
      <h1>Hello World</h1>
      <button></button>
    </div>
  );
}

export default App;
