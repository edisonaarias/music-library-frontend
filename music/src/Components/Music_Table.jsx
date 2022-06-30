

const Music_Table = (props) => {

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
                  {props.parentSongs.map((song, index) => {
                      return (
                          <tr>
                          <td>{index + 1}</td>
                          <td>{song.title}</td>
                          <td>{song.artist}</td>
                          <td>{song.album}</td>
                          <td>{song.genre}</td>
                          <td>{song.date}</td>
                          </tr>
                      );
              })}        
              </tbody>
          </table>
  );
}

export default Music_Table;