//Initialize BINGO options
let bOpts = [];
let iOpts = [];
let nOpts = [];
let gOpts = [];
let oOpts = [];


//Choose haw many balls of each letter, and return an array (bingoBalls) of all the bingo balls
//const bingoBalls = spaceOptions(5); MUST RUN THIS LINE BEFORE CALLING A NUMBER FOR NOW
const spaceOptions = (options) => {
    for (let i = 1; i <= options; i++) {
        bOpts.push(`B${i}`);
        iOpts.push(`I${i}`);
        nOpts.push(`N${i}`);
        gOpts.push(`G${i}`);
        oOpts.push(`O${i}`);
    };
    const bingoBalls = bOpts.concat(iOpts, nOpts, gOpts, oOpts);
    return bingoBalls;
};


//Create a Bingo card with random numbers for each of letter of BINGO
const generateCard = () => {
    let bCols = [];
    let bOptsCopy = [...bOpts];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * bOptsCopy.length)
        bCols.push(bOptsCopy[randomIndex]);
        bOptsCopy.splice(randomIndex, 1);
    };
    
    let iCols = [];
    let iOptsCopy = [...iOpts];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * iOptsCopy.length)
        iCols.push(iOptsCopy[randomIndex]);
        iOptsCopy.splice(randomIndex, 1);
    };

    let nCols = [];
    let nOptsCopy = [...nOpts];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * nOptsCopy.length)
        nCols.push(nOptsCopy[randomIndex]);
        nOptsCopy.splice(randomIndex, 1);
    };

    let gCols = [];
    let gOptsCopy = [...gOpts];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * gOptsCopy.length)
        gCols.push(gOptsCopy[randomIndex]);
        gOptsCopy.splice(randomIndex, 1);
    };

    let oCols = [];
    let oOptsCopy = [...oOpts];
    for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * oOptsCopy.length)
        oCols.push(oOptsCopy[randomIndex]);
        oOptsCopy.splice(randomIndex, 1);
    };

    return [bCols, iCols, nCols, gCols, oCols];
};


//Check to see if a win condition has been met (five in a row)
const checkWin = (card) => {
    //Up and Down Win
    for (let letter of card) {
        if (letter.every(item => item === 'x')) {
            console.log('You Win UD');
            break;
        };
    };
 
    //Left to Right Win
    let checkWinArray4 = [];
    checkWinArray4.push(card[0][0], card[1][0], card[2][0], card[3][0], card[4][0]);
    if (checkWinArray4.every(item => item === 'x')) {
        console.log('You Win LR0')
    };
    
    let checkWinArray5 = [];
    checkWinArray5.push(card[0][0], card[1][1], card[2][1], card[3][1], card[4][1]);
    if (checkWinArray5.every(item => item === 'x')) {
        console.log('You Win LR1')
    };
    
    let checkWinArray6 = [];
    checkWinArray6.push(card[0][2], card[1][2], card[2][2], card[3][2], card[4][2]);
    if (checkWinArray6.every(item => item === 'x')) {
        console.log('You Win LR2')
    };
    
    let checkWinArray7 = [];
    checkWinArray7.push(card[0][3], card[1][3], card[2][3], card[3][3], card[4][3]);
    if (checkWinArray7.every(item => item === 'x')) {
        console.log('You Win LR3')
    };
    
    let checkWinArray8 = [];
    checkWinArray8.push(card[0][4], card[1][4], card[2][4], card[3][4], card[4][4]);
    if (checkWinArray8.every(item => item === 'x')) {
        console.log('You Win LR4')
    };
    
    /* //Left to Right Win (not working)
    for (let i = 0; i < 5; i++) {
        let checkWinArray1 = [];
        for (let j = 0; j < 5; j++ ) {
            checkWinArray1.push(card[j][i]);
            if (checkWinArray1.every(item => item === 'x')) {
                console.log('You Win LR')
            }
        };
    }; 
    (THIS CURRENTLY DOESNT WORK AND I DONT KNOW WHY) */ 

    //Diagonal Win
    let checkWinArray2 = [];
    checkWinArray2.push(card[0][0], card[1][1], card[2][2], card[3][3], card[4][4]);
    if (checkWinArray2.every(item => item === 'x')) {
        console.log('You Win TLBR')
    };

    let checkWinArray3 = [];
    checkWinArray3.push(card[0][4], card[1][3], card[2][2], card[3][1], card[4][0]);
    if (checkWinArray3.every(item => item === 'x')) {
        console.log('You Win TRBL')
    };
    
    //Not Yet Won
    console.log('Please Call Another Number')
};
 

//Call a bingo number, and mark the number off on the card if it is there (possibly put check win inside here)
//const bingoBalls = spaceOptions(5); MUST RUN THIS LINE BEFORE CALLING A NUMBER FOR NOW
const callNumber = (bingoCard) => {
    const randomBallIndex = Math.floor(Math.random() * bingoBalls.length);
    const pickedBall = bingoBalls[randomBallIndex];
    bingoBalls.splice(randomBallIndex, 1);
    
    console.log(pickedBall);
    
    for (let letter of bingoCard) {
        for (let i = 0; i < 5; i++) {
            if (pickedBall === letter[i]) {
                letter.splice(i, 1, 'x');
            }
        }
    };
    //checkWin(bingoCard);
};


//Reset the game by making the BINGO options empty again (run space options again to refill balls after reset)
const resetGame = () => {
    bOpts = [];
    iOpts = [];
    nOpts = [];
    gOpts = [];
    oOpts = [];
};


//Test 
const bingoBalls = spaceOptions(5); 
console.log(bingoBalls);

const newCard = generateCard();
console.log(newCard[0]);
console.log(newCard[1]);
console.log(newCard[2]);
console.log(newCard[3]);
console.log(newCard[4]);

const callAndCheck = () => {
    callNumber(newCard);
    console.log(newCard[0]);
    console.log(newCard[1]);
    console.log(newCard[2]);
    console.log(newCard[3]);
    console.log(newCard[4]);
};

callAndCheck();
checkWin(newCard);

