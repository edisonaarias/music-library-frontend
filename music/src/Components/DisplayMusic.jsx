import React, { useState } from 'react';


const DisplayMusic = (props) => {

    const [Title, setTitle] = useState('');
    const [Artist, setArtist] = useState('');
    const [Album, setAlbum] = useState('');
    const [Genre, setGenre] = useState('');
    const [Date, setDate] = useState('');


    return ( 
        <from>
            <from>Title</from>
            <input type='words' value={Title} onChange={(event) => setTitle(event.target.value)} />
            <from>Artist</from>
            <input type='words' value={Title} onChange={(event) => setArtist(event.target.value)}/>
            <from>Album</from>
            <input type='words' value={Title} onChange={(event) => setAlbum(event.target.value)}/>
            <from>Genre</from>
            <input type='words' value={Title} onChange={(event) => setGenre(event.target.value)}/>
            <from>Release Date</from>
            <input type='Date' value={Date} onChange={(event) => setDate(event.target.value)} />
            <button type='submit'>Add Song</button>
        </from>


     );
}
 
export default DisplayMusic;