import crypto from 'crypto'


// // randomBytes()
// crypto.randomBytes(16, (err, buf) => {
//     console.log(buf.toString('hex'))
// })


 

const algo = 'aes-256-cbc';
const key = crypto.randomBytes(32); // 32 bytes for aes-256
const iv = crypto.randomBytes(16);  // 16 bytes IV

const message = "Hello honey";

// Encrypt
const cipher = crypto.createCipheriv(algo, key, iv);
let encrypted = cipher.update(message, 'utf8', 'hex');
encrypted += cipher.final('hex');

// Decrypt
const decipher = crypto.createDecipheriv(algo, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');

// Output
console.log('Encrypted:', encrypted);
console.log('Decrypted:', decrypted);
