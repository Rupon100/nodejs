// export Common js 


// make a random number
const generateRandom = () =>{
    return Math.floor(Math.random() * 100) + 1;
}

// calcius to fahrenhite
const celToFarenhite = (celcius) => {
    return (celcius * 9) / 5 + 32;
}



module.exports = {
    generateRandom,
    celToFarenhite,
};