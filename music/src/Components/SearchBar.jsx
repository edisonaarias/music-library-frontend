import { useEffect } from 'react';

//  New Song:
//  {
//      "title": "The Outside",
//      "artist": "Red",
//      "album": "Genius",
//      "genre": "Metal/Christian rock",
//      "release_date": "2011-02-01"
//  }
// Filter by album, artist, genre, release date, and title


/**Function made to find a song with 5 (terms album, artist, genre, release date, and title)
 * 
 * @param {Array} Triatsperson  A collection of songs-objects 
 * @param {return} people       A collection of songs-objects 
 */

 function searchForFiveTerms(Termssong, songs) {
    let results = song.filter(
         }
        x = '5 terms';
        y = new RegExp(/a/g);
        while(null != (z=y.exec(x))) {
            console.log(z);    
            console.log(z[0]);
    }

            const str = 'a a a';
            const re = /a/g;

        while(match = re.exec(str)){
            console.log(match, ' found at : ', match.index); 

        
    );
    console.log(results);
    return results;

// const SearchBar = (props) => {

//     return ( 
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>Artist</th>
//                     <th>Album</th>
//                     <th>Genre</th>
//                     <th>Release Data</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                     {props.parentSongs.map((song, index) => {
//                         return (
//                             <tr>
//                             <td>{index + 1}</td>
//                             <td>{song.title}</td>
//                             <td>{song.artist}</td>
//                             </tr>
//                         );
//                 })}        
//                 </tbody>
//             </table>
//     );
// }

// export default SearchBar;