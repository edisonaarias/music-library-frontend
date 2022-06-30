

  useEffect(() => {
    makeGetRequest();
  }, [])
//  New Song:
//  {
//      "title": "The Outside",
//      "artist": "Red",
//      "album": "Genius",
//      "genre": "Metal/Christian rock",
//      "release_date": "2011-02-01"
//  }
  async function getAllSongs(){
    let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
    await getAllSongs();
(
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