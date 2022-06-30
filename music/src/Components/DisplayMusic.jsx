import React, { useState } from 'react';


const DisplayMusic = (props) => {

    const [Title, setTitle] = useState('');
    const [Artist, setArtist] = useState('');
    const [Album, setAlbum] = useState('');
    const [Genre, setGenre] = useState('');
    const [Date, setDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: Title,
            artist: Artist,
            genre: Genre,
            date: Date,
            
        };
        console.log(newSong);
        props.addNewSongProperty(newSong)
    }


    return ( 
        <from onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='texts' value={Title} onChange={(event) => setTitle(event.target.value)} />
            <label>Artist</label>
            <input type='texts' value={Artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album</label>
            <input type='texts' value={Album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Genre</label>
            <input type='texts' value={Genre} onChange={(event) => setGenre(event.target.value)}/>
            <label>Release Date</label>
            <input type='date' value={Date} onChange={(event) => setDate(event.target.value)} />
            <button type='submit'>Add Song</button>
        </from>


     );
}
 
export default DisplayMusic;