//define list of questions (pull from spreadsheet somehow)
const questions = ['This president crossed the Delaware River.','This president created the Alien and Sedition Acts.','This president was elected in the Revolution of 1800.','This president was considered the Father of the Constitution.','This president created a doctrine separating affairs in America from Europe.','This president was the main culprit behind the Corrupt Bargain.','This president caused the Bank War.','This president was the first president to be born as a citizen of the United States.','This president died of pneoumia 30 days into office.','This president was the first president to have his veto of legislation overridden by Congress','This president allowed for the U.S to expand with annexation of Texas, the Oregon Territory, and the Mexican Cession','This president fought during the Mexican-American War ','This president signed a number of bills that became known as the Compromise of 1850','This president backed the Kansas-Nebraska Act of 1854, leading to the overturning of the Missouri Compromise ','This president was in office during the Dred Scott case and supported the Supreme Courts ruling.','This president issued the Emancipation Proclamation.','This president destroyed the Freedmens Bureau.','This president was the 5th general to lead the Union army during the Civil War.','This president won the election thanks to the Compromise of 1877.','This president was shot twice at a train station in Washington D.C.','This president signed the Chinese Exclusion Act in 1882.','This president served two non-consecutive terms.','This president signed the Sherman Anti-Trust Act.','This president presided over the Spanish American War.','This president was known for his Big Stick Diplomacy.','This president used Dollar Diplomacy with foreign nations.','This president issued the 14 Points Speech.','This president was in the Teapot Dome Scandal.','This president nickname was Silent Cal','This president had towns named after him during the Great Depression.','This president created the New Deal.','This president allowed for the dropping of Little Boy and Fat Man.','This president was wary about the military-industrial complex.','This president trained Cuban migrants to attempt to invade Cuba and remove communist influence.','This president created Medicare and Medicaid.','This president was in the Watergate Scandal.','This president pardoned Nixon.',' This president failed to bring 52 American hostages home for 444 days','This president believed in trickle-down economics.','This president conducted Operation Desert Storm.','This president was impeached due to an affair scandal.','This president had the US go to war in Iraq and Afghanistan.','This president was the first black president.','This president has the largest net worth of any president. ','This president became associated with the phrase "Lets go Brandon".'];
const questionNames = ['George Washington','John Adams','Thomas Jefferson','James Madison','James Monroe','John Quincy Adams','Andrew Jackson','Martin Van Buren','William Henry Harrison','John Tyler','James K. Polk','Zachary Taylor','Millard Fillmore','Franklin Pierce','James Buchanan','Abraham Lincoln','Andrew Johnson','Ulysses S. Grant','Rutherford B. Hayes','James A. Garfield','Chester A. Arthur','Grover Cleveland','Benjamin Harrison','William McKinley','Theodore Roosevelt','William Taft','Woodrow Wilson','Warren G. Harding','Calvin Coolidge','Herbert Hoover','Franklin D. Roosevelt','Harry S. Truman','Dwight D. Eisenhower','John F. Kennedy','Lyndon B. Johnson','Richard M. Nixon','Gerald R. Ford','Jimmy Carter','Ronald Reagan','George H.W. Bush','Bill Clinton','George W. Bush','Barack H. Obama','Donald J. Trump','Joseph R. Biden'];
const questionNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];
const questionPoints = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];

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