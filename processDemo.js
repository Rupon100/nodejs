console.log(process.argv);

// env
console.log(process.env);

console.log(process.title);

console.log(process.uptime());

process.on('exit', (code) => {
    console.log("About to exit with",code);
})

process.exit(0);
console.log("helll")