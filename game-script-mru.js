//define list of questions (pull from spreadsheet somehow)
const questions = ['This president got a surveyor degree from William and Mary.','This president wrote over 1,000 letters to his wife.','This president introduced ice cream from France to the US.','This president was Princetons first graduate student.','This president was the last president to have never been photographed.','This president was the first president to not win the popular vote but still win the election.','This president fought more than 100 duels.','This presidents house was named Lindenwald.','This president was the only one to never issue an executive order or a pardon.','This president was known as His Accidency.','This president never fathered or adopted any known children.','This presidents nickname was "Old Rough and Ready"','This president married his teacher.','This presidents nicknames included "Hero of Many a Well-Fought Bottle"','This president is the only one to have never married.','This president also worked as a bartender.','This president sewed his own clothes.','This president was buried in North Americas largest tomb.','This president was nicknamed "His Fraudulency"','This president could write Greek with one hand and Latin with the other at the same time.','This president threw a bell into a canal as a prank.','This president personally executed a man.','This president was scared of electricity.','This president received a secret surgery on a friends yacht during his presidency.','This president was known as the first president that smiled when being photographed ','This president started the tradition of throwing the first ball of the MLB season.','This president appointed the first Jewish justice to the Supreme Court.','This president wore size 19 shoes, which was the largest feet of any president.','This president was the only president to be born on Independence Day','This president was the first Quaker president.','This president contracted polio after his vice-presidential defeat and was paralyzed.','This president dared the KKK to kill him.','This president was the first president to ride in a helicopter.','This president was the first president who was a Boy Scout.','This president gave interviews on the toilet.','This president visited all 50 states.','This president was a star football player in college.','This president was a speed reader and could read 2000 words per minute.','This presidents favorite snack was Jelly Bellies.','This president was a fighter pilot in World War II.','This president lost the nuclear launch codes.','This president was a member of an elite secret student society at Yale called "Skull and Bones".','This president earned a Nobel prize and multiple grammys.','This president never had an alcoholic drink.','This president was bullied due to a childhood stutter.'];
const questionNames = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','Jimmy Carter','Ronald Reagan','George H.W. Bush','Bill Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden'];
const questionNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];
const questionPoints = [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6];

const presidents = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','Jimmy Carter','Ronald Reagan','George H.W. Bush','Bill Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden'];
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];

let presidentToGuess = '';
let lives = 1;
let points = 0;

//select random question
function selectRandomQuestionIndex(){
    return Math.floor(Math.random() * questions.length);
}

//initialize game
function initializeGame(){
    points = 0;
    lives = 1;

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