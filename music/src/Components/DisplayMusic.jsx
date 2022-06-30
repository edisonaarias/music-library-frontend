import React, { useState } from 'react';


const DisplayMusic = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            genre: genre,
            releasedate: releaseDate
        };
        console.log(newSong);
        props.addNewSongProperty(newSong)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='texts' value={title} onChange={(event) => setTitle(event.target.value)} />
            <label>Artist</label>
            <input type='texts' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album</label>
            <input type='texts' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Genre</label>
            <input type='texts' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <label>Release Date</label>
            <input type='date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)} />
            <button type='submit'>Add Song</button>
        </form>


     );
}
 
export default DisplayMusic;