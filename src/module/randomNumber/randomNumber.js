
const getRandomNumber = (lowerBound, upperBound) => {
    return (Math.floor(Math.random() * (upperBound - lowerBound)) + lowerBound);
}

export  {getRandomNumber}