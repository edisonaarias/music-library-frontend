

const MusicTable = (props) => {
    console.log("hello from muic table", props.songs)
  return ( 
          <table>
              <thead>
              <tr>
                  <th>Title</th>
                  <th>Artist</th>
                  <th>Album</th>
                  <th>Genre</th>
                  <th>Release Date</th>
              </tr>
              </thead>
              <tbody>
                  {props.songs.map((song, index) => {
                      return (
                          <tr key={index}>

                          <td>{song.title}</td>
                          <td>{song.artist}</td>
                          <td>{song.album}</td>
                          <td>{song.genre}</td>
                          <td>{song.release_date}</td>
                          </tr>
                      );
              })}        
              </tbody>
          </table>
  );
}

export default MusicTable;