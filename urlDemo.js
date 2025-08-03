import url from 'url';

const urlString = "https://www.google.com/search?q=hello+world&oq=hello+world&gs_lcrp=EgZjaHJvbWUqCggAEAAYsQMYgAQyCggAEAAYsQMYgAQyBwgBEAAYgAQyBwgCEAAYgAQyBwgDEAAYgAQyCggEEC4YsQMYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBggHEEUYPNIBCDI3MzdqMGo5qAIIsAIB8QWt4pNWRWJMcw&sourceid=chrome&ie=UTF-8";

// url object
const urlObj = new URL(urlString);

console.log(urlObj);


// format
console.log(url.format(urlObj));


// import.meta.url - file url
console.log(import.meta.url);


// file url to path
console.log(url.fileURLToPath(import.meta.url));