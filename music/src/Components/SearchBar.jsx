import { useEffect } from 'react';


//  New Song:
//  {
//      "title": "The Outside",
//      "artist": "Red",
//      "album": "Genius",
//      "genre": "Metal/Christian rock",
//      "release_date": "2011-02-01"
//  }

const SearchBar = (props) => {

    return ( 
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Data</th>
                </tr>
                </thead>
                <tbody>
                    {props.parentSongs.map((song, index) => {
                        return (
                            <tr>
                            <td>{index + 1}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            </tr>
                        );
                })}        
                </tbody>
            </table>
    );
}

export default SearchBar;