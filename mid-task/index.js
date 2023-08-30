// Mid Task JavaScript

let songs = [
    {
        "title": "Death Bed",
        "artist": "Powfu",
        "genre": "Jazz",
        "duration": 2,
        "id": "1"
    },
    {
        "title": "Bad Liar",
        "artist": "Imagine Dragons",
        "genre": "Rock",
        "duration": 4,
        "id": "2"
    },
    {
        "title": "Faded",
        "artist": "Alan Walker",
        "genre": "Remix",
        "duration": 3,
        "id": "3"
    },
    {
        "title": "Hate Me",
        "artist": "Ellie Goulding",
        "genre": "Pop",
        "duration": 4,
        "id": "4"
    },
    {
        "title": "Solo",
        "artist": "Clean Bandit",
        "genre": "Rock",
        "duration": 4,
        "id": "5"
    },
    {
        "title": "Without Me",
        "artist": "Halsey",
        "genre": "Pop",
        "duration": 2,
        "id": "6"
    },
    {
        "id": "7",
        "title": "Like a Rolling Stone",
        "artist": "Bob Dylan",
        "genre": "R&B",
        "duration": 5,
    },
    {
        "id": "8",
        "title": "What's Going On",
        "artist": "Marvin Gaye",
        "genre": "Pop",
        "duration": 4,
    },
    {
        "id": "9",
        "title": "Hey Jude",
        "artist": "The Beatles",
        "genre": "Romance",
        "duration": 3,
    },
    {
        "id": "10",
        "title": "Smells Like Teen Spirit",
        "artist": "Nirvana",
        "genre": "Reggae",
        "duration": 3,
    },
    {
        "id": "11",
        "title": "Born to Run",
        "artist": "Bruce Springsteen",
        "genre": "Funk",
        "duration": 4
    },
    {
        "id": "12",
        "title": "Dancing in the Street",
        "artist": "Martha and the Vandellas",
        "genre": "Pop rock",
        "duration": 6
    },
    {
        "id": "415",
        "title": "In Bloom",
        "artist": "Nirvana",
        "genre": "Pop rock",
        "duration": 3,
    },
    {
        "id": "168",
        "title": "Let's Get It On",
        "artist": "Marvin Gaye",
        "genre": "Pop",
        "duration": 5
    },
    {
        "id": "62",
        "title": "Yesterday",
        "artist": "The Beatles",
        "genre": "Reggae",
        "duration": 4
    },
    {
        "id": "213",
        "title": "Let It Be",
        "artist": "The Beatles",
        "genre": "Reggae",
        "duration": 5
    },
    {
        "id": "296",
        "title": "Stan (feat. Dido)",
        "artist": "Eminem",
        "genre": "pop",
        "duration": 5
    },
    {
        "id": "297",
        "title": "She's Not There",
        "artist": "The Zombies",
        "genre": "pop",
        "duration": 5
    },
    {
        "id": "298",
        "title": "Train in Vain",
        "artist": "The Clash",
        "genre": "pop",
        "duration": 5
    },
    {
        "id": "299",
        "title": "Tired Of Being Alone",
        "artist": "Al Green",
        "genre": "pop",
        "duration": 5
    },
    {
        "id": "300",
        "title": "Black Dog",
        "artist": "Led Zeppelin",
        "genre": "pop",
        "duration": 5
    },
    {
        "id": "301",
        "title": "Street Fighting Man",
        "artist": "The Rolling Stones",
        "genre": "pop",
        "duration": 5
    },
    {
        "id": "302",
        "title": "Get Up, Stand Up",
        "artist": "Bob Marley & The Wailers",
        "genre": "pop",
        "duration": 5
    },
    {
        "id": "303",
        "title": "Heart of Gold",
        "artist": "Neil Young",
        "genre": "pop",
        "duration": 5
    },
];

/**
 * function groups by artist
 *  
 * @param {*} songs 
 * @returns 
 */
function groupsByArtist(songs) {

    let songsByArtist = {};

    songs.reduce((song, songsArtist) => {
        const { artist } = songsArtist;
        song[artist] = song[artist] || [];
        song[artist].push(songsArtist);

        return song;
    }, songsByArtist);

    // console.log(songsByArtist);

    return songsByArtist;
}

// console.log(groupsByArtist(songs));

/**
 * function groups by genre
 * 
 * @param {songs} songs 
 * @returns {songs} by genre
 */
function groupsByGenre(songs) {
    let songsGenre = {}

    songs.map((val) => {
        if (!songsGenre[val.genre]) {
            songsGenre[val.genre] = [];
        }
        songsGenre[val.genre].push(val);
    });

    return songsGenre;
}

// console.log(groupsByGenre(songs));

/**
 * function group by duration under 60 minutes
 * 
 * @param {*} songs 
 * @returns [Object]
 */
function groupsByDuration(songs) {
    let groups = [];
    let maxDuration = 0;

    songs.forEach(() => {
        const randomSongs = Math.floor(Math.random() * songs.length);
        let duration = songs[randomSongs].duration * 60;

        if (maxDuration + duration < 3600) {
            maxDuration += duration;
            groups.push(songs[randomSongs]);
        }
    });

    console.log("Max dur", maxDuration);
    return groups;
}

console.log(groupsByDuration(songs));