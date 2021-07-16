
var filesystem = require('fs');
// it is an asynchronous function, which means it executes
//  and it takes time to ready and mean while other tasks where
// performed
// filesystem.readFile('Letter.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })
// console.log("Before reading the file, this console log will be executer");

// filesystem.writeFile("reply.txt", "I Love you too baby", ()=> {
//     console.log("writen");
// })
// if(!filesystem.existsSync('./Love')) {
//     filesystem.mkdir("./Love", (err)=>{
//         if (err) throw err;
//         console.log("created dir")
//     })  
// }else{
//     filesystem.rmdir('./Love', (err)=> {
//         if (err){
//             console.log(err)
//         }
//     })
// }

if(filesystem.existsSync('Letter.txt')){
    filesystem.unlink('Letter.txt', (err)=> {
        if (err){
            console.log(err)
        }
    })
}