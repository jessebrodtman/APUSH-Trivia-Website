//define list of questions (pull from spreadsheet somehow)
const questions = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson  ','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William H. Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert C. Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','James Earl Carter','Ronald Reagan','George H.W. Bush','William J. Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden'];
const questionNames = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson  ','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William H. Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert C. Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','James Earl Carter','Ronald Reagan','George H.W. Bush','William J. Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden'];
const questionNumbers = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22/24','23','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'];
const questionPoints = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22/24','23','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'];

const presidents = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson  ','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William H. Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert C. Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','James Earl Carter','Ronald Reagan','George H.W. Bush','William J. Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden, Jr.'];
const numbers = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22/24','23','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46'];

const maxWrongGuesses = 3;

let presidentToGuess = '';
let lives = 3;
let points = 0;

//select random question
function selectRandomQuestionIndex(){
    return Math.floor(Math.random() * questions.length);
}

//initialize game
function initializeGame(){
    points = 0;
    lives = 3;

    // Clear any previous message
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = '';
    const gameOverContainer = document.querySelector('.game-over');
    gameOverContainer.innerText = '';

    updateLifeDisplay();
    document.querySelector('.score').innerText = points;
    nextQuestion();
}

//next question
function nextQuestion(){
    questionIndex = selectRandomQuestionIndex();
    questionToGuess = questions[questionIndex];

    //clear previous question
    clearPreviousQuestion();

    //update the question display
    updateQuestionDisplay();

    //remove previous answer buttons
    const answerContainer = document.querySelector('.answers');
    while(answerContainer.firstChild){
        answerContainer.removeChild(answerContainer.firstChild);
    }

    //generate answer buttons
    randomStart = Math.floor(Math.random() * 5)-5;
    if(randomStart > parseInt(questionNumbers[questionIndex])){
        randomStart = parseInt(questionNumbers[questionIndex]);
    }else if(4+randomStart+parseInt(questionNumber[questionIndex])>=46){
      randomStart = 42-parseInt(questionNumber[questionIndex]);
    }
    
    for(let i=0; i<5; i++){
        const answerButton = document.createElement('button');
        answerButton.innerText = presidents[randomStart+i+parseInt(questionNumbers[questionIndex])];
        answerButton.addEventListener('click', checkAnswer);
        answerContainer.appendChild(answerButton);
    }
}

//clear the previous question
function clearPreviousQuestion(){
    const questionContainer = document.querySelector('.question');
    questionContainer.innerText = '';
    
    const answerContainer = document.querySelector('.answers');
    while(answerContainer.firstChild){
        answerContainer.removeChild(answerContainer.firstChild);
    }

    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = '';

    const gameOverContainer = document.querySelector('.game-over');
    while(gameOverContainer.firstChild){
        gameOverContainer.removeChild(gameOverContainer.firstChild);
    }
}

//update the question display
function updateQuestionDisplay(){
    const questionContainer = document.querySelector('.question');
    questionContainer.innerText = questionToGuess;
}

//check answer for a question
function checkAnswer(){
    if(this.innerText === questionNames[questionIndex]){
        points+=parseInt(questionPoints[questionIndex]);
        document.querySelector('.score').innerText = points;
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText = 'Correct! The president is ' + questionNames[questionIndex] + '!';
        
        const gameOverContainer = document.querySelector('.game-over');
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next Question';
        nextButton.addEventListener('click', nextQuestion);
        gameOverContainer.appendChild(nextButton);
    }else{
        lives--;
        updateLifeDisplay();
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText = 'Incorrect! The president is ' + questionNames[questionIndex] + '!';
        if(lives === 0){
            gameOver();
        }else{
            const gameOverContainer = document.querySelector('.game-over');
            const nextButton = document.createElement('button');
            nextButton.innerText = 'Next Question';
            nextButton.addEventListener('click', nextQuestion);
            gameOverContainer.appendChild(nextButton);
        }
    }
}

//update life display
function updateLifeDisplay(){
    const lifeContainer = document.querySelector('.lives');
    lifeContainer.innerHTML = `<img src="hearts${lives}.jpg" alt="${lives} hearts">`
}

//end game
function gameOver(){
    const gameOverContainer = document.querySelector('.game-over');
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Game Over! You scored ' + points + ' points! Click to play again!';
    restartButton.addEventListener('click', initializeGame);
    gameOverContainer.appendChild(restartButton);
}

  // Initialize the game when the page loads
  window.addEventListener('load', initializeGame);