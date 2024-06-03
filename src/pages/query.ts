const Genius = require("genius-lyrics");
const Client = new Genius.Client();

(async () => {
    const searches = await Client.songs.search("basti ka hasti");

    const firstSong = searches[0];
    const lyrics = await firstSong.lyrics();
    console.log(lyrics);
})();