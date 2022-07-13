const { google } = require('googleapis');

function youTubeApi(word){
    return new Promise((resolve, reject) => {
        google.youtube("v3").search.list({
        key: process.env.GOOGLE_TOKEN,
        part: 'snippet',
        q: word,
        maxResults: 10
         }).then((response) => {
             var videoLink = "https://www.youtube.com/watch?v=" + response.data.items[0].id.videoId;
             resolve(videoLink);
        }).catch((err) => console.log(err));
    });
}

 module.exports = youTubeApi;