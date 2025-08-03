// import fs from 'fs'

// // readFile(), callback (asynchronous)
// fs.readFile('./text.txt', 'utf-8', (err, data) => {
//     console.log(data);
// })

// // readFileSync() - Synchronous
// const data = fs.readFileSync('./text.txt', 'utf-8');
// console.log("Sync..: ", data);


// using promises version
import { write } from 'fs';
import fs from 'fs/promises';
// fs.readFile('./text.txt', 'utf-8')
// .then(data => console.log(data))
// .catch(err => console.log(err)); 

// through async await
const readFile = async () => {
    try{
        const data = await fs.readFile('./text.txt', 'utf-8');
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
readFile();


// write a file

const writeFile = async () => {
    try{
        await fs.writeFile('./test.text', 'this is new file written using fs module');
    }catch(error){
        console.log(error);
    }
}
writeFile()


// append something in the file
const appendFile = async () => {
    try{
        await fs.appendFile('./test.text', '\nthis is append from the fs demo file');
    }catch(error){
        console.log(error);
    }
}

