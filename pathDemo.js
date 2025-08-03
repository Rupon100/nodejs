import path from 'path';


const filePath = './dir1/dir2/test.txt';

// basename (last portion of the path)
console.log(path.basename(filePath));


// dir name
console.log(path.dirname(filePath));

// ext name
console.log(path.extname(filePath));

// parse()
console.log(path.parse(filePath));





