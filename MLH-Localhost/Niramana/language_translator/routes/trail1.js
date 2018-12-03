var http = require("http");
var tts = require('./voice-rss-tts/index.js');

http.createServer(function (request, response) {
    tts.speech({
        key: 'abcfbde1f87e40bcbb4e9ba0be35cf51',
        hl: 'en-us',
        src: 'Hello, World!',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false,
        b64: true,
        callback: function (error, content) {
            response.end(error || content);
        }
    });
}).listen(8081);
                        