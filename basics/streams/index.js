const fs = require('fs');

const readStream = fs.createReadStream('blog.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('stream.txt');

// readStream.on('data', (chunk) =>{
//     // console.log(chunk)
//     writeStream.write(chunk + " ---------NEW CHUNK -----------");
//     console.log("----------------- NEW CHUNK -----------");
// })

readStream.pipe(writeStream)
