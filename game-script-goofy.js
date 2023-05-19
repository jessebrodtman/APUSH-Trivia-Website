//define list of questions (pull from spreadsheet somehow)
const questions = ['This president is mistakenly believed to have had wooden dentures.','This president was known as His Rotundity.','This president had to sell 6,000 books to Congress to get out of debt.','This presidents last words were "I talk better lying down".','This president did not actually write the document he is known for.','This president enjoyed skinny dipping daily.','This president taught his parrot how to curse.','This president was believed to "scent his whiskers" or in other words, put perfume on his mutton chops.','The president had 25 grandchildren.','This president had 15 children.','This president banned dancing from the white house.','This president overdosed on cherries.','This president married his teacher.','This president was arrested for running over an old lady with his horse.','This president cocked his head at all times.','This president was an amazing wrestler, winning all but 1 of his 300 matches.','This president said that God assassinated Lincoln so he could become president.','This president received a speeding ticket while president.','This president served lemonade instead of alchohol at the White House.','This president was elected to the US Senate as a representative of Ohio.','This president owned 80 pairs of pants.','This president married his adopted daughter.','This president married his dead wifes niece, who was 25 years younger than him.','This president had a pet parrot named "Washington Post".','This president wore a ring with a lock of Abraham Lincolns hair in it during his inauguration.','This president needed to be pulled out of a bathtub.','This presidents full name starts with "Thomas".','This president lost a set of White House china in a poker game.','This president owned a lion named "Tax Reduction".','This presidents son owned two pet crocodiles.','This president was related to his wife and 11 other presidents.','This president was the only president in the 1900s who didnt go to college.','This president banished the White Houses squirrels for ruining the putting green.','This president had affairs with more than a dozen women.','This president peed in public.','This president once said "Im not a crook. Ive earned everything Ive got".','This president was an underwear model.','This president abandoned his military career to save the family peanut farm.','This presidents favorite snack was Jelly Bellies.','This president celebrated his 85th birthday by skydiving.','This president was nicknamed "Bubba" when he was a child.','This president was a high school cheerleader.','This president liked to play basketball.','This president had cheeto hair.','This president fell off a bike in a famous video.','This president owned a dog named "Sweet Lips".','This presidents niece was commonly called the "Democratic Queen."','This president lost the nuclear launch codes.','This president was the first black president.','This president became associated with the phrase "Lets go Brandon".'];
const questionNames = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','Jimmy Carter','Ronald Reagan','George H.W. Bush','Bill Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden','George Washington','James Buchanan','Bill Clinton','Barack H. Obama','Joseph R. Biden'];
const questionNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,1,15,42,44,46];
const questionPoints = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];

const presidents = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','Jimmy Carter','Ronald Reagan','George H.W. Bush','Bill Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden'];
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];

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
    randomStart = Math.floor(Math.random() * 5)-4;
    if(randomStart + questionNumbers[questionIndex]<1){
        randomStart = 1-questionNumbers[questionIndex];
    }
    if(4+randomStart+questionNumbers[questionIndex]>=45){
      randomStart = 42-questionNumbers[questionIndex];
    }
    //console.log(questionNames[questionIndex]);
    //console.log('question index: ' + questionIndex);
    //console.log('random start: ' + randomStart);
    
    for(let i=0; i<5; i++){
        const answerButton = document.createElement('button');
        if(randomStart+i+questionNumbers[questionIndex] === 24){
            randomStart++;
        }
        if(randomStart+i+questionNumbers[questionIndex]>24){
            answerButton.innerText = presidents[randomStart+i+questionNumbers[questionIndex]-2];
            //console.log((randomStart+i+questionNumbers[questionIndex])+' '+(randomStart+i+questionNumbers[questionIndex]-2));
        }else{
            answerButton.innerText = presidents[randomStart+i+questionNumbers[questionIndex]-1];
            //console.log((randomStart+i+questionNumbers[questionIndex])+' '+(randomStart+i+questionNumbers[questionIndex]-1));
        }
        
        answerButton.addEventListener('click', checkAnswer);
        answerContainer.appendChild(answerButton);
    }
}

//clear the previous questionj
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
    //disable buttons
    const answerButtons = document.querySelectorAll('.answers button');
    answerButtons.forEach(button => {
      button.disabled = true;
      button.removeEventListener('click', checkAnswer);
    });

    if(this.innerText === questionNames[questionIndex]){
        points+=questionPoints[questionIndex];
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
    hearts = '';
    for(let i=0; i<lives; i++){
        hearts+='♥';   
    }
    lifeContainer.innerText = hearts;
    //lifeContainer.innerHTML = `<img src="hearts${lives}.jpg" alt="${lives} hearts">`
}

//end game
function gameOver(){
    const lifeContainer = document.querySelector('.lives');
    lifeContainer.innerHTML = '<p style="font-size:4rem;color:red;">No lives left!</p>';

    const gameOverContainer = document.querySelector('.game-over');
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Game Over! You scored ' + points + ' points! Click to play again!';
    restartButton.addEventListener('click', initializeGame);
    gameOverContainer.appendChild(restartButton);
}

  // Initialize the game when the page loads
  window.addEventListener('load', initializeGame);